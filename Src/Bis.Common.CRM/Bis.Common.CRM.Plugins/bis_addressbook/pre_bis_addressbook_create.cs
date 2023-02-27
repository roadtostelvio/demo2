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
    public class pre_bis_addressbook_create : PluginBase
    {
        public override void HandlePreCreateMessage(PluginExecutionContext context)
        {
            context.Trace("--- HandlePreCreateMessage START ---");

            var currentAddressBook = context.TargetEntity.ToEntity<bis_addressbook>();

            bis_addressbookFactory factory = new bis_addressbookFactory(context.AdminService);

            var isValid = factory.IsValidCreate(currentAddressBook, out string errorMessage);

            if (!isValid) throw new InvalidPluginExecutionException(errorMessage);

            factory.CreateAddressRecord(currentAddressBook);

            factory.SetName(currentAddressBook);
            factory.CheckExistingRecords(currentAddressBook);
            

            context.Trace("--- HandlePreCreateMessage STOP ---");
        }

    }
}
