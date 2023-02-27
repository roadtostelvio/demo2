import { bis_addressbook, bis_addressbookAttributes, bis_addressbookFormContext } from "../dataverse-gen/entities/bis_addressbook";
import { BIS_Generic } from "../Helpers/BIS_Generic";
import { Account, bis_addresstype, metadataCache } from "../dataverse-gen";
import { Entity, setMetadataCache, XrmContextCdsServiceClient } from "dataverse-ify";


export class bis_addressbookFormQC {

    static async onLoad(executionContext: Xrm.Events.EventContext): Promise<void> {

        let formContext = executionContext.getFormContext();

        formContext.getAttribute(bis_addressbookAttributes.bis_createnew).addOnChange(this.CreateNewOnChange);

        this.SetAddressTypeSelector(executionContext);
        this.CreateNewOnChange(executionContext);
    }

    static async SetAddressTypeSelector(executionContext: Xrm.Events.EventContext): Promise<void> {

        setMetadataCache(metadataCache);
        const serviceClient = new XrmContextCdsServiceClient(Xrm.WebApi);
        let formContext = executionContext.getFormContext();

        debugger;

        let bis_institutionRef: Xrm.LookupValue[] = formContext.getAttribute(bis_addressbookAttributes.bis_institution).getValue();

        if (bis_institutionRef != null) {

            let id = bis_institutionRef[0].id.replace("{","").replace("}","");
            let fetchXml = `
            <fetch top="1">
                <entity name="bis_addressbook">
                <attribute name="bis_addressbookid" />
                <filter>
                    <condition attribute="bis_type" operator="eq" value="913600000" />
                    <condition attribute="bis_institution" operator="eq" value="${id}" />
                </filter>
                </entity>
            </fetch>`;

            let existingMainAddress = await serviceClient.retrieveMultiple<bis_addressbook>(fetchXml);

            if (existingMainAddress.entities.length > 0) {
                debugger;
                        (formContext.getControl(bis_addressbookAttributes.bis_type) as Xrm.Controls.OptionSetControl).removeOption(bis_addresstype.Main);
            }
            else
            {
                debugger;

            }

        }


    }

    static async CreateNewOnChange(executionContext: Xrm.Events.EventContext): Promise<void> {

        let formContext = executionContext.getFormContext();

        let bis_createnewValue: boolean = formContext.getAttribute(bis_addressbookAttributes.bis_createnew).getValue();

        BIS_Generic.setSectionVisible(formContext, "tab_create", "section_addnewaddress", bis_createnewValue);
        (formContext.getControl(bis_addressbookAttributes.bis_address) as Xrm.Controls.LookupControl).setVisible(!bis_createnewValue);

        if (bis_createnewValue) {
            formContext.getAttribute(bis_addressbookAttributes.bis_address).setValue(null);
        }
        else {
            formContext.getAttribute(bis_addressbookAttributes.bis_country).setValue(null);
            formContext.getAttribute(bis_addressbookAttributes.bis_state).setValue(null);
            formContext.getAttribute(bis_addressbookAttributes.bis_zipcode).setValue("");
            formContext.getAttribute(bis_addressbookAttributes.bis_city).setValue(null);
            formContext.getAttribute(bis_addressbookAttributes.bis_addressline1).setValue("");
            formContext.getAttribute(bis_addressbookAttributes.bis_addressline2).setValue("");
        }

    }
}
