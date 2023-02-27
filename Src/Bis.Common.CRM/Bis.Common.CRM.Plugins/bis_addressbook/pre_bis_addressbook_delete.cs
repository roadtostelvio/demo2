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
    public class pre_bis_addressbook_delete : PluginBase
    {
        public override void HandlePreDeleteMessage(PluginExecutionContext context)
        {
            context.Trace("--- HandlePreDeleteMessage START ---");

            var currentAddressBookRef = context.TargetEntityRef;

            bis_addressbookFactory factory = new bis_addressbookFactory(context.AdminService);

            factory.DeleteAddressIfNotReferenced(currentAddressBookRef);

            context.Trace("--- HandlePreDeleteMessage STOP ---");
        }

    }
}
