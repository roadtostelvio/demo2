using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bis.Common.CRM.Generic.Dataverse.Extensions
{
    public static class OrganizationServiceExtensions
    {
        /// <summary>
        /// Returns the EntityMetadata object for the specified entity type.
        /// </summary>
        /// <param name="organizationService"></param>
        /// <param name="entityLogicalName"></param>
        /// <returns></returns>
        public static EntityMetadata GetEntityMetadata(this IOrganizationService organizationService, string entityLogicalName)
        {
            RetrieveEntityRequest retrieveMetaRequest = new RetrieveEntityRequest()
            {
                EntityFilters = EntityFilters.All,
                RetrieveAsIfPublished = true,
                LogicalName = entityLogicalName
            };

            return ((RetrieveEntityResponse)organizationService.Execute(retrieveMetaRequest)).EntityMetadata;
        }

        public static RetrieveCurrentOrganizationResponse GetCurrentOrganization(this IOrganizationService organizationService)
        {
            return (RetrieveCurrentOrganizationResponse)organizationService.Execute(new RetrieveCurrentOrganizationRequest());
        }
    }
}
