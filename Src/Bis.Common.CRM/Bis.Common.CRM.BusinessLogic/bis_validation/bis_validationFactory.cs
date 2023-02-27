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
    public class bis_validationFactory
    {
        private CrmServiceContext Service { get; set; }

        public bis_validationFactory(CrmServiceContext service)
        {
            Service = service;
        }

        public void CreateNewInstitution(bis_validation currentValidation, bis_validation preValidation)
        {
            var institutionName = currentValidation.GetAttribute<string>(bis_validation.Fields.bis_institutionname, preValidation);
            var institutionType = currentValidation.GetAttribute<EntityReference>(bis_validation.Fields.bis_institutiontype, preValidation);

            Service.TracingService?.TraceEntity(currentValidation);
            Service.TracingService?.TraceEntity(preValidation);

            if (!string.IsNullOrWhiteSpace(institutionName) && institutionType != null)
            {
                Service.TracingService?.Trace("Creating institution");

                var newAccountId = Service.OrganizationService.Create(new Account()
                {
                    name = institutionName,
                    bis_institutiontype = institutionType
                });

                Service.TracingService?.Trace($"newAccountId: {newAccountId}");

                currentValidation.SetAttribute(bis_validation.Fields.bis_relatedinstitution, new EntityReference(Account.EntityLogicalName, newAccountId));
                currentValidation.SetAttribute(bis_validation.Fields.statecode, new OptionSetValue((int)bis_validationState.Inactive));
                currentValidation.SetAttribute(bis_validation.Fields.statuscode, new OptionSetValue((int)bis_validation_StatusCode.Inactive));
            }
            else
            {
                Service.TracingService?.Trace("institutionName and/or institutionType is empty.");

            }
        }
    }
}
