import { AccountAttributes } from "../dataverse-gen/entities/Account";

export class AccountForm {

    private static formContext : Xrm.FormContext | null = null;

    static async onLoad(executionContext: Xrm.Events.EventContext): Promise<void>{
        this.formContext = executionContext.getFormContext();
        this.formContext.getAttribute(AccountAttributes.AccountNumber).setRequiredLevel(XrmEnum.AttributeRequirementLevel.Required);
    }

}
