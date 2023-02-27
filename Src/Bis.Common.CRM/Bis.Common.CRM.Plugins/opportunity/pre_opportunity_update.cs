using Bis.Common.CRM.BusinessLogic;
using Bis.Common.CRM.Generic.Dataverse;
using Bis.Common.CRM.Generic.Dataverse.Extensions;
using Bis.Common.CRM.ObjectModel;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Discovery;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bis.Common.CRM.Plugins
{
    public class pre_opportunity_update : PluginBase
    {
        public override void HandlePreUpdateMessage(PluginExecutionContext context)
        {
            context.Trace("--- HandlePreUpdateMessage START ---");

            var currentEntity = context.TargetEntity;
            var currentOpportunity = currentEntity.ToEntity<Opportunity>();

            context.Trace("Creating factory");
            opportunityFactory factory = new opportunityFactory(context.AdminService);

            context.Trace("Considering and Invetigating field logic");
            factory.ConsideringAndInvestingTracking(currentOpportunity);


            context.Trace("--- HandlePreUpdateMessage STOP ---");
        }

    }
}
