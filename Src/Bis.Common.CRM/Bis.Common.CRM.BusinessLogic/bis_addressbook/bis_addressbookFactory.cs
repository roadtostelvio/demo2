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
    public class bis_addressbookFactory
    {
        private CrmServiceContext Service { get; set; }

        public bis_addressbookFactory(CrmServiceContext service)
        {
            Service = service;
        }

        public void SetName(bis_addressbook currentAddressBook)
        {
            Service.TracingService?.Trace($"SetName START");

            if (currentAddressBook.Contains(bis_addressbook.Fields.bis_address))
            {
                var address = Service.bis_addressSet.Where(x => x.Id == currentAddressBook.bis_address.Id).FirstOrDefault();
                currentAddressBook.SetAttribute(bis_addressbook.Fields.bis_name, address.bis_name);
            }
            else
            {
                Service.TracingService?.Trace($"bis_address field is empty on bis_addressbook.");
            }

            Service.TracingService?.Trace($"SetName END");
        }

        public void CheckExistingRecords(bis_addressbook currentAddressBook)
        {
            Service.TracingService?.Trace($"CheckExistingRecords START");

            var existingAddressBooks = Service.bis_addressbookSet.Where(x =>
                x.bis_institution.Id == currentAddressBook.bis_institution.Id &&
                x.bis_name == currentAddressBook.bis_name
            ).ToList();

            Service.TracingService?.Trace($"existingAddressBooks count: {existingAddressBooks.Count}");

            if (existingAddressBooks.Count() > 0)
            {
                throw new InvalidPluginExecutionException($"There is an existing record: {currentAddressBook.bis_name}");
            }

            Service.TracingService?.Trace($"CheckExistingRecords END");
        }

        public bool IsValidCreate(bis_addressbook currentAddressBook, out string message)
        {
            Service.TracingService?.Trace($"IsValidCreate START");

            message = string.Empty;

            if (!currentAddressBook.Contains(bis_addressbook.Fields.bis_institution))
            {
                message = "Institution record is missing from AddressBook!";
                return false;
            }

            Service.TracingService?.Trace($"IsValidCreate END");

            return true;
        }

        public void CreateAddressRecord(bis_addressbook currentAddressBook)
        {
            Service.TracingService?.Trace($"CreateAddressRecord START");

            if (currentAddressBook.Contains(bis_addressbook.Fields.bis_createnew) && currentAddressBook.bis_createnew == true)
            {
                Service.TracingService?.Trace($"creating new bis_address");

                var newAddressId = Service.OrganizationService.Create(new bis_address()
                {
                    bis_addressline1 = currentAddressBook.bis_addressline1,
                    bis_addressline2 = currentAddressBook.bis_addressline2,
                    bis_state = currentAddressBook.bis_state,
                    bis_city = currentAddressBook.bis_city,
                    bis_country = currentAddressBook.bis_country
                });
                Service.TracingService?.Trace($"new bis_address id: {newAddressId}");

                currentAddressBook.SetAttribute(bis_addressbook.Fields.bis_address, new EntityReference(bis_address.EntityLogicalName, newAddressId));
            }
            else
            {
                Service.TracingService?.Trace($"bis_createnew is empty or false");
            }

            Service.TracingService?.Trace($"CreateAddressRecord END");
        }

        public void DeleteAddressIfNotReferenced(EntityReference currentAddressBookRef)
        {
            Service.TracingService?.Trace("DeleteAddressIfNotReferenced Start");

            var currentAddressBook = Service.bis_addressbookSet.Where(x => x.Id == currentAddressBookRef.Id).FirstOrDefault();

            if (currentAddressBook != null && currentAddressBook.bis_address != null)
            {

                Service.TracingService?.Trace($"Current address id: {currentAddressBook.bis_address.Id}");

                var otherAddressBook = Service.bis_addressbookSet.Where(x =>
                    x.Id != currentAddressBookRef.Id &&
                    x.bis_address.Id == currentAddressBook.bis_address.Id
                ).FirstOrDefault();

                if (otherAddressBook == null)
                {
                    Service.TracingService?.Trace($"No other addressbook record found with this address, DELETING!");
                    Service.OrganizationService.Delete(currentAddressBook.bis_address.LogicalName, currentAddressBook.bis_address.Id);
                }
                else
                {
                    Service.TracingService?.Trace($"Other addressbook record found, keep address.");
                }
            }
            else
            {
                Service.TracingService?.Trace("Current addressbook or the address reference is null.");
            }

            Service.TracingService?.Trace("DeleteAddressIfNotReferenced End");
        }

    }
}
