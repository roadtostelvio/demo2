import { Entity, setMetadataCache, AttributeTypes } from "dataverse-ify";
import { bis_prefix } from "../dataverse-gen";
import { ContactAttributes } from "../dataverse-gen/entities/Contact";

//import { ConfigurationReader } from '../Common/Configuration/ConfigurationReader';


export class ContactForm {

    static async onLoad(executionContext: Xrm.Events.EventContext): Promise<void>{
        let formContext = executionContext.getFormContext();
        // this.formContext.getAttribute(ContactAttributes.FullName).setRequiredLevel(XrmEnum.AttributeRequirementLevel.Required);
        formContext.ui.setFormNotification("TEST", XrmEnum.FormNotificationLevel.Info, "TEST");

        debugger;

        

        var attribute_prefix = formContext.data.entity.attributes.get(ContactAttributes.bis_prefix);
        if (attribute_prefix && attribute_prefix.addOnChange) {
            attribute_prefix.addOnChange(this.Prefix_OnChange);
        }
    }

    /**
     * This is a comment for the function
     * @param context event args
     * 
     * 
     */


    
    static async Prefix_OnChange(context: Xrm.Events.EventContext): Promise<void> {
        debugger;
        let formContext = context.getFormContext();
        let attribute_prefix_value: bis_prefix = formContext.data.entity.attributes.get(ContactAttributes.bis_prefix).getValue();
        formContext.ui.setFormNotification(`Prefix: ${attribute_prefix_value}`, XrmEnum.FormNotificationLevel.Info, ContactAttributes.bis_prefix);

        switch (attribute_prefix_value) {
            case bis_prefix.Baron:
                Xrm.Navigation.openAlertDialog({ text: "This is Baron", title: "This is a Title", confirmButtonLabel: "All right" });
                break;
        }
    }
}
