using Bis.Common.CRM.Generic.Dataverse;
using Bis.Common.CRM.Generic.Dataverse.Extensions;
using Bis.Common.CRM.ObjectModel;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bis.Common.CRM.BusinessLogic
{
    public class opportunityFactory
    {
        private CrmServiceContext Service { get; set; }

        public opportunityFactory(CrmServiceContext service)
        {
            Service = service;
        }

        public void ValidateChange(Opportunity currentOpportunity, Opportunity preOpportunity = null)
        {
            var product = currentOpportunity.GetAttribute<EntityReference>(Opportunity.Fields.bis_product, preOpportunity);
            var account = currentOpportunity.GetAttribute<EntityReference>(Opportunity.Fields.parentaccountid, preOpportunity);

            if (product != null && account != null)
            {
                var existingOpportunity = Service.OpportunitySet.Where(x =>
                    x.parentaccountid.Id == account.Id &&
                    x.bis_product.Id == product.Id
                ).FirstOrDefault();

                if (existingOpportunity != null)
                {
                    throw new InvalidPluginExecutionException("There is already a Non-BIS Instrument with the same Product for the selected Institution");
                }

            }
        }

        public void ConsideringAndInvestingTracking(Opportunity currentOpportunity)
        {
            Service.TracingService?.Trace("ConsideringAndInvestingTracking Start");

            if (currentOpportunity.Contains(Opportunity.Fields.bis_considering))
            {
                currentOpportunity.SetAttribute(Opportunity.Fields.bis_lastupdatedconsidering, DateTime.Now);
            }

            if (currentOpportunity.Contains(Opportunity.Fields.bis_investing))
            {
                currentOpportunity.SetAttribute(Opportunity.Fields.bis_lastupdatedinvesting, DateTime.Now);
            }

            Service.TracingService?.Trace("ConsideringAndInvestingTracking End");
        }
    }
}
