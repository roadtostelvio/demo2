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
    public class pre_bis_validation_update : PluginBase
    {
        public override void HandlePreUpdateMessage(PluginExecutionContext context)
        {
            context.Trace("--- HandlePreUpdateMessage START ---");

            var currentEntity = context.TargetEntity;
            var currentValidation = currentEntity.ToEntity<bis_validation>();

            bis_validation imageValidation = context.GetPreImage()?.ToEntity<bis_validation>();

            context.Trace("Creating factory");
            bis_validationFactory factory = new bis_validationFactory(context.AdminService);


            if (currentValidation.Contains(bis_validation.Fields.bis_institutionname) || currentValidation.Contains(bis_validation.Fields.bis_institutiontype))
            {
                context.Trace("Start creating new institution");
                factory.CreateNewInstitution(currentValidation, imageValidation);
            }
            else
            {
                context.Trace("No change in bis_institutionname/bis_institutiontype");
            }

            context.Trace("--- HandlePreUpdateMessage STOP ---");
        }

    }
}
