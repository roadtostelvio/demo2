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
    public class post_bis_validation_update : PluginBase
    {
        public override void HandlePostUpdateMessage(PluginExecutionContext context)
        {
            context.Trace("--- HandlePostUpdateMessage START ---");

            var currentEntity = context.TargetEntity;
            var currentValidation = currentEntity.ToEntity<bis_validation>();

            bis_validation imageValidation = context.GetPostImage()?.ToEntity<bis_validation>();
            
            var relatedEvent = currentValidation.GetAttribute<OptionSetValue>(bis_validation.Fields.bis_relatedevent, imageValidation);
            var relatedEntity = currentValidation.GetAttribute<OptionSetValue>(bis_validation.Fields.bis_relatedentity, imageValidation);
            var institutionName = currentValidation.GetAttribute<string>(bis_validation.Fields.bis_institutionname, imageValidation);
            var institutionType = currentValidation.GetAttribute<EntityReference>(bis_validation.Fields.bis_institutiontype, imageValidation);

            //if (
            //    relatedEvent != null &&
            //    relatedEntity != null &&
            //    relatedEvent.Value == (int)bis_ValidationRelatedEvent.Create &&
            //    relatedEntity.Value == (int)bis_ValidationRelatedEntity.Institution &&
            //    !string.IsNullOrWhiteSpace(institutionName) &&
            //    institutionType != null
            //)
            //{
            //    if (currentValidation.Contains(bis_validation.Fields.bis_institutionname))
            //    {
            //        FuzzySearchFactory fuzzyFactory = new FuzzySearchFactory(
            //            context.AdminService,
            //            currentEntity.ToEntityReference()
            //        );

            //        var foundCount = 0;
            //        foundCount += fuzzyFactory.SearchFuzzyInstitutionAndAddConnection(currentValidation.bis_institutionname);

            //        //ValidationUpdateEntity
            //        var validationUpdate = new bis_validation()
            //        {
            //            Id = currentEntity.Id
            //        };

            //        if (foundCount == 0)
            //        {
            //            //Creating new Institution
            //            context.Trace("No duplicates.");
            //            var newInstitution = new Account()
            //            {
            //                name = currentValidation.bis_institutionname,
            //                bis_institutiontype = currentValidation.bis_institutiontype,
            //            };

            //            context.Trace("Creating institution.");
            //            var newInstitutionId = context.AdminService.OrganizationService.Create(newInstitution);

            //            validationUpdate.bis_relatedinstitution = new EntityReference(Account.EntityLogicalName, newInstitutionId);
            //            validationUpdate.statecode = bis_validationState.Inactive;
            //            validationUpdate.statuscode = bis_validation_StatusCode.Inactive;
            //        }
            //        else
            //        {
            //            //Mark we have duplicates
            //            context.Trace("Duplicates exists.");
            //            validationUpdate.bis_duplicateexists = true;
            //        }

            //        context.Trace("Updating validation entity.");
            //        context.AdminService.OrganizationService.Update(validationUpdate);
            //    }
            //    else
            //    {
            //        context.Trace("No fuzzy search logic required.");
            //    }
            //}
            //else
            //{
            //    context.Trace("RelatedEvent not set.");
            //}

            context.Trace("--- HandlePostUpdateMessage STOP ---");
        }
    }
}
