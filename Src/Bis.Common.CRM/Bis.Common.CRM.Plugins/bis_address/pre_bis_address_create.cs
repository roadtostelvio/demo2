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
    public class pre_bis_address_create : PluginBase
    {
        public override void HandlePreCreateMessage(PluginExecutionContext context)
        {
            context.Trace("--- HandlePreCreateMessage START ---");

            var currentAddress = context.TargetEntity.ToEntity<bis_address>();

            bis_addressFactory factory = new bis_addressFactory(context.AdminService);

            string concatenatedAddress = factory.GetConcatenatedAddress(currentAddress);

            context.Trace($"concatenatedAddress: {concatenatedAddress}");

            currentAddress.SetAttribute(bis_address.Fields.bis_name, concatenatedAddress);

            context.Trace("--- HandlePreCreateMessage STOP ---");
        }

    }
}
