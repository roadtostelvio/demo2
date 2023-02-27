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
    public class post_bis_validation_create : PluginBase
    {
        public override void HandlePostCreateMessage(PluginExecutionContext context)
        {
            context.Trace("--- HandlePreCreateMessage START ---");

            context.Trace("--- HandlePreCreateMessage STOP ---");
        }
    }
}
