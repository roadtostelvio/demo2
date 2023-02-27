using Bis.Common.CRM.Generic.Dataverse;
using Bis.Common.CRM.Generic.Dataverse.Extensions;
using Bis.Common.CRM.ObjectModel;
using Microsoft.Xrm.Sdk;
using Newtonsoft.Json;
using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace Bis.Common.CRM.BusinessLogic
{
    public class FuzzySearchFactory
    {
        private string AccessToken { get; set; }
        private CrmServiceContext Service { get; set; }
        private EntityReference ValidationRef { get; set; }

        private string OrganizationUrl { get; set; }

        public FuzzySearchFactory(CrmServiceContext service, EntityReference validationRef)
        {
            ValidationRef = validationRef;

            var currentOrg = service.OrganizationService.GetCurrentOrganization();
            currentOrg.Detail.Endpoints.TryGetValue(Microsoft.Xrm.Sdk.Organization.EndpointType.WebApplication, out var OrganizationUrl);

            service.TracingService?.Trace($"Retrieved OrganizationUrl: {OrganizationUrl}");

            var clientId = service.GetSystemSettings("DataverseClientId", false);
            var clientSecret = service.GetSystemSettings("DataverseClientSecret", false);

            MicrosoftOAuthTokenProvider tokenProvider = new MicrosoftOAuthTokenProvider(
                currentOrg.Detail.TenantId,
                clientId,
                clientSecret,
                $"{OrganizationUrl}/.default"
            );

            AccessToken = tokenProvider.GetTokenAsync().Result.AccessToken;
        }

        public int SearchFuzzyInstitutionAndAddConnection(string searchTerm)
        {
            int connectionCreated = 0;

            Service.TracingService?.Trace($"Search for: {searchTerm}");
            var response = SearchFuzzy(searchTerm);
            if (response != null)
            {
                Service.TracingService?.Trace($"Got API response");
                foreach (var e in response.value)
                {
                    if (e.document != null)
                    {
                        Service.TracingService.Trace($"entity: {e.document.entityName}, id: {e.document.objectId}");
                        if (string.Equals(e.document.entityName, Account.EntityLogicalName, StringComparison.InvariantCultureIgnoreCase))
                        {
                            try
                            {
                                Service.OrganizationService.Associate(
                                    bis_validation.EntityLogicalName,
                                    ValidationRef.Id,
                                    new Relationship(bis_validation.Relationships.bis_bis_validation_account),
                                    new EntityReferenceCollection()
                                    {
                                        new EntityReference(Account.EntityLogicalName, new Guid(e.document.objectId))
                                    }
                                );
                                connectionCreated++;
                            }
                            catch (Exception ex)
                            {
                                Service.TracingService?.Trace($"{ex.Message}");
                            }
                        }
                    }
                    else
                    {
                        Service.TracingService.Trace("e.document is null");
                    }
                }
            }
            else
            {
                Service.TracingService.Trace($"No result!");
            }

            return connectionCreated;
        }

        private FuzzySearchResponse SearchFuzzy(string searchTerm)
        {
            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Add("Authorization", AccessToken);

            var messageObject = new Dictionary<string, object>();
            messageObject.Add("search", $"{searchTerm}");
            messageObject.Add("suggestType", $"advanced");
            messageObject.Add("top", $"10");
            messageObject.Add("useFuzzy", $"true");

            HttpContent content = new StringContent(JsonConvert.SerializeObject(messageObject, new JsonSerializerSettings() { NullValueHandling = NullValueHandling.Ignore }), System.Text.Encoding.UTF8, "application/json");

            using (var response = client.PostAsync($"{OrganizationUrl}/api/search/v1.0/suggest", content).Result)
            {
                var responseMsg = response.Content.ReadAsStringAsync().Result;

                if (response.IsSuccessStatusCode)
                {
                    return JsonConvert.DeserializeObject<FuzzySearchResponse>(responseMsg);
                }
            }

            return null;
        }

    }
}
