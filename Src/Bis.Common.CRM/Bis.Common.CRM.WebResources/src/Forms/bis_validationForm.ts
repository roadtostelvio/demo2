import { bis_validation_bis_validation_statecode } from "../dataverse-gen";
import { bis_validationAttributes } from "../dataverse-gen/entities/bis_validation";
import { bis_validationrelatedentity } from "../dataverse-gen/enums/bis_validationrelatedentity";
import { bis_validationrelatedevent } from "../dataverse-gen/enums/bis_validationrelatedevent";
import { Entity, EntityReference, setMetadataCache, XrmContextCdsServiceClient } from "dataverse-ify";
import { bis_validation, bis_validationMetadata } from "../dataverse-gen/entities/bis_validation";
import { metadataCache } from "../dataverse-gen";
import { BIS_Generic } from "../Helpers/BIS_Generic";


export class bis_validationForm {

    static async onLoad(executionContext: Xrm.Events.EventContext): Promise<void> {

        let formContext = executionContext.getFormContext();

        formContext.getAttribute(bis_validationAttributes.bis_relatedentity).addOnChange(this.showFields);
        formContext.getAttribute(bis_validationAttributes.bis_relatedevent).addOnChange(this.showFields);

        formContext.data.entity.addOnPostSave(this.onPostSave);

        this.showFields(executionContext);
    }

    static async onPostSave(executionContext: Xrm.Events.EventContext): Promise<void> {
        debugger;
        let formContext = executionContext.getFormContext();

        let statecodeValue: bis_validation_bis_validation_statecode = formContext.getAttribute(bis_validationAttributes.statecode).getValue();
        let bis_relatedinstitutionRef: Xrm.LookupValue[] = formContext.getAttribute(bis_validationAttributes.bis_relatedinstitution).getValue();

        //(formContext.getControl(bis_validationAttributes.bis_relatedinstitution) as Xrm.Controls.LookupControl).getAttribute().getValue();

        if (statecodeValue == bis_validation_bis_validation_statecode.Inactive &&
            bis_relatedinstitutionRef != null &&
            bis_relatedinstitutionRef.length > 0
        ) {

            let pageInput: Xrm.Navigation.PageInputEntityRecord = {
                pageType: "entityrecord",
                entityName: bis_relatedinstitutionRef[0].entityType,
                entityId: bis_relatedinstitutionRef[0].id
            };

            Xrm.Navigation.navigateTo(pageInput).then(
                function success() {
                    // Run code on success
                },
                function error(error) {
                    // Handle errors
                    debugger;
                }
            );

        }

    }

    static async showFields(executionContext: Xrm.Events.EventContext): Promise<void> {

debugger;

        let formContext = executionContext.getFormContext();

        let bis_relatedentityValue: bis_validationrelatedentity = formContext.getAttribute(bis_validationAttributes.bis_relatedentity).getValue();
        let bis_relatedeventValue: bis_validationrelatedevent = formContext.getAttribute(bis_validationAttributes.bis_relatedevent).getValue();
        let bis_duplicateexistsValue: boolean = formContext.getAttribute(bis_validationAttributes.bis_duplicateexists).getValue();

        if (
            bis_relatedentityValue == bis_validationrelatedentity.Institution &&
            bis_relatedeventValue == bis_validationrelatedevent.Create
        ) {
            BIS_Generic.setSectionVisible(formContext, "tab_validation", "section_institutioncreate", true);
        }


        if (
            bis_relatedentityValue == bis_validationrelatedentity.Institution &&
            bis_duplicateexistsValue === true
        ) {
            BIS_Generic.setSectionVisible(formContext, "tab_validation", "section_duplicateinstitutions", true);
        }
    }

}
