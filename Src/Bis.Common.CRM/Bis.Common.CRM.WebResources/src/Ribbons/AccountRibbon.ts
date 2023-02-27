import { Entity, setMetadataCache, XrmContextCdsServiceClient } from "dataverse-ify";
import { bis_validation, bis_validationMetadata } from "../dataverse-gen/entities/bis_validation";
import { bis_validationrelatedentity } from "../dataverse-gen/enums/bis_validationrelatedentity";
import { bis_validationrelatedevent } from "../dataverse-gen/enums/bis_validationrelatedevent";
import { metadataCache } from "../dataverse-gen";

export class AccountRibbon {

    static async createNew_bis_validation() {

        debugger;

        setMetadataCache(metadataCache);
        const serviceClient = new XrmContextCdsServiceClient(Xrm.WebApi);

        const bis_validationObj = {
            logicalName: bis_validationMetadata.logicalName,
            bis_relatedentity: bis_validationrelatedentity.Institution,
            bis_relatedevent: bis_validationrelatedevent.Create
        } as bis_validation;

        let createdRecordId = await serviceClient.create(bis_validationObj);

        let pageInput: Xrm.Navigation.PageInputEntityRecord = {
            pageType: "entityrecord",
            entityName: bis_validationMetadata.logicalName,
            entityId: createdRecordId
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