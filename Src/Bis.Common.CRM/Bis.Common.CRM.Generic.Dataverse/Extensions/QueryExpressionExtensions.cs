using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace Bis.Common.CRM.Generic.Dataverse.Extensions
{
    public static class QueryExpressionExtensions
    {
        /// <summary>
        /// Converts the given QueryExpression to a FetchXML using a QueryExpressionToFetchXmlRequest.
        /// </summary>
        /// <param name="queryExpression"></param>
        /// <param name="organizationService"></param>
        /// <returns></returns>
        public static string ToFetchXml(this QueryExpression queryExpression, IOrganizationService organizationService)
        {
            var conversionRequest = new QueryExpressionToFetchXmlRequest
            {
                Query = queryExpression
            };
            var conversionResponse = (QueryExpressionToFetchXmlResponse)organizationService.Execute(conversionRequest);

            return conversionResponse.FetchXml;
        }

        /// <summary>
        /// Converts the given FetchXML to a QueryExpression.
        /// </summary>
        /// <param name="queryExpression"></param>
        /// <param name="organizationService"></param>
        /// <param name="fetchXml"></param>
        /// <returns></returns>
        public static QueryExpression FromFetchXml(IOrganizationService organizationService, string fetchXml)
        {
            var conversionRequest = new FetchXmlToQueryExpressionRequest
            {
                FetchXml = fetchXml
            };

            var conversionResponse = (FetchXmlToQueryExpressionResponse)organizationService.Execute(conversionRequest);

            return conversionResponse.Query;
        }
    }
}
