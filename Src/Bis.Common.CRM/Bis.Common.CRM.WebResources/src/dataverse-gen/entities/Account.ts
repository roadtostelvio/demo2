/* eslint-disable*/
import { IEntity } from "dataverse-ify";

// Entity Account FormContext
export interface AccountFormContext extends Xrm.FormContext {
    getAttribute(): Xrm.Attributes.Attribute[];
    getAttribute<T extends Xrm.Attributes.Attribute>(attributeName: string): T;
    getAttribute(attributeName: string): Xrm.Attributes.Attribute;
    getAttribute(index: number): Xrm.Attributes.Attribute;

    getControl(): Xrm.Controls.Control[];
    getControl<T extends Xrm.Controls.Control>(controlName: string): T;
    getControl(controlName: string): Xrm.Controls.Control;
    getControl(index: number): Xrm.Controls.Control;

    /*
    Select a category to indicate whether the customer account is standard or preferred.
    */
    getAttribute(name: 'accountcategorycode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select a category to indicate whether the customer account is standard or preferred.
    */
    getControl(name: 'accountcategorycode'): Xrm.Controls.OptionSetControl;
    /*
    Select a classification code to indicate the potential value of the customer account based on the projected return on investment, cooperation level, sales cycle length or other criteria.
    */
    getAttribute(name: 'accountclassificationcode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select a classification code to indicate the potential value of the customer account based on the projected return on investment, cooperation level, sales cycle length or other criteria.
    */
    getControl(name: 'accountclassificationcode'): Xrm.Controls.OptionSetControl;
    /*
    Type an ID number or code for the account to quickly search and identify the account in system views.
    */
    getAttribute(name: 'accountnumber'): Xrm.Attributes.StringAttribute;
    /*
    Type an ID number or code for the account to quickly search and identify the account in system views.
    */
    getControl(name: 'accountnumber'): Xrm.Controls.StringControl;
    /*
    Select a rating to indicate the value of the customer account.
    */
    getAttribute(name: 'accountratingcode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select a rating to indicate the value of the customer account.
    */
    getControl(name: 'accountratingcode'): Xrm.Controls.OptionSetControl;
    /*
    Select the primary address type.
    */
    getAttribute(name: 'address1_addresstypecode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the primary address type.
    */
    getControl(name: 'address1_addresstypecode'): Xrm.Controls.OptionSetControl;
    /*
    Type the city for the primary address.
    */
    getAttribute(name: 'address1_city'): Xrm.Attributes.StringAttribute;
    /*
    Type the city for the primary address.
    */
    getControl(name: 'address1_city'): Xrm.Controls.StringControl;
    /*
    Type the country or region for the primary address.
    */
    getAttribute(name: 'address1_country'): Xrm.Attributes.StringAttribute;
    /*
    Type the country or region for the primary address.
    */
    getControl(name: 'address1_country'): Xrm.Controls.StringControl;
    /*
    Type the county for the primary address.
    */
    getAttribute(name: 'address1_county'): Xrm.Attributes.StringAttribute;
    /*
    Type the county for the primary address.
    */
    getControl(name: 'address1_county'): Xrm.Controls.StringControl;
    /*
    Type the fax number associated with the primary address.
    */
    getAttribute(name: 'address1_fax'): Xrm.Attributes.StringAttribute;
    /*
    Type the fax number associated with the primary address.
    */
    getControl(name: 'address1_fax'): Xrm.Controls.StringControl;
    /*
    Select the freight terms for the primary address to make sure shipping orders are processed correctly.
    */
    getAttribute(name: 'address1_freighttermscode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the freight terms for the primary address to make sure shipping orders are processed correctly.
    */
    getControl(name: 'address1_freighttermscode'): Xrm.Controls.OptionSetControl;
    /*
    Type the first line of the primary address.
    */
    getAttribute(name: 'address1_line1'): Xrm.Attributes.StringAttribute;
    /*
    Type the first line of the primary address.
    */
    getControl(name: 'address1_line1'): Xrm.Controls.StringControl;
    /*
    Type the second line of the primary address.
    */
    getAttribute(name: 'address1_line2'): Xrm.Attributes.StringAttribute;
    /*
    Type the second line of the primary address.
    */
    getControl(name: 'address1_line2'): Xrm.Controls.StringControl;
    /*
    Type the third line of the primary address.
    */
    getAttribute(name: 'address1_line3'): Xrm.Attributes.StringAttribute;
    /*
    Type the third line of the primary address.
    */
    getControl(name: 'address1_line3'): Xrm.Controls.StringControl;
    /*
    Type a descriptive name for the primary address, such as Corporate Headquarters.
    */
    getAttribute(name: 'address1_name'): Xrm.Attributes.StringAttribute;
    /*
    Type a descriptive name for the primary address, such as Corporate Headquarters.
    */
    getControl(name: 'address1_name'): Xrm.Controls.StringControl;
    /*
    Type the ZIP Code or postal code for the primary address.
    */
    getAttribute(name: 'address1_postalcode'): Xrm.Attributes.StringAttribute;
    /*
    Type the ZIP Code or postal code for the primary address.
    */
    getControl(name: 'address1_postalcode'): Xrm.Controls.StringControl;
    /*
    Type the post office box number of the primary address.
    */
    getAttribute(name: 'address1_postofficebox'): Xrm.Attributes.StringAttribute;
    /*
    Type the post office box number of the primary address.
    */
    getControl(name: 'address1_postofficebox'): Xrm.Controls.StringControl;
    /*
    Type the name of the main contact at the account's primary address.
    */
    getAttribute(name: 'address1_primarycontactname'): Xrm.Attributes.StringAttribute;
    /*
    Type the name of the main contact at the account's primary address.
    */
    getControl(name: 'address1_primarycontactname'): Xrm.Controls.StringControl;
    /*
    Select a shipping method for deliveries sent to this address.
    */
    getAttribute(name: 'address1_shippingmethodcode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select a shipping method for deliveries sent to this address.
    */
    getControl(name: 'address1_shippingmethodcode'): Xrm.Controls.OptionSetControl;
    /*
    Type the state or province of the primary address.
    */
    getAttribute(name: 'address1_stateorprovince'): Xrm.Attributes.StringAttribute;
    /*
    Type the state or province of the primary address.
    */
    getControl(name: 'address1_stateorprovince'): Xrm.Controls.StringControl;
    /*
    Type the main phone number associated with the primary address.
    */
    getAttribute(name: 'address1_telephone1'): Xrm.Attributes.StringAttribute;
    /*
    Type the main phone number associated with the primary address.
    */
    getControl(name: 'address1_telephone1'): Xrm.Controls.StringControl;
    /*
    Type a second phone number associated with the primary address.
    */
    getAttribute(name: 'address1_telephone2'): Xrm.Attributes.StringAttribute;
    /*
    Type a second phone number associated with the primary address.
    */
    getControl(name: 'address1_telephone2'): Xrm.Controls.StringControl;
    /*
    Type a third phone number associated with the primary address.
    */
    getAttribute(name: 'address1_telephone3'): Xrm.Attributes.StringAttribute;
    /*
    Type a third phone number associated with the primary address.
    */
    getControl(name: 'address1_telephone3'): Xrm.Controls.StringControl;
    /*
    Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
    */
    getAttribute(name: 'address1_upszone'): Xrm.Attributes.StringAttribute;
    /*
    Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
    */
    getControl(name: 'address1_upszone'): Xrm.Controls.StringControl;
    /*
    Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
    */
    getAttribute(name: 'address1_utcoffset'): Xrm.Attributes.NumberAttribute;
    /*
    Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
    */
    getControl(name: 'address1_utcoffset'): Xrm.Controls.NumberControl;
    /*
    Select the secondary address type.
    */
    getAttribute(name: 'address2_addresstypecode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the secondary address type.
    */
    getControl(name: 'address2_addresstypecode'): Xrm.Controls.OptionSetControl;
    /*
    Type the city for the secondary address.
    */
    getAttribute(name: 'address2_city'): Xrm.Attributes.StringAttribute;
    /*
    Type the city for the secondary address.
    */
    getControl(name: 'address2_city'): Xrm.Controls.StringControl;
    /*
    Type the country or region for the secondary address.
    */
    getAttribute(name: 'address2_country'): Xrm.Attributes.StringAttribute;
    /*
    Type the country or region for the secondary address.
    */
    getControl(name: 'address2_country'): Xrm.Controls.StringControl;
    /*
    Type the county for the secondary address.
    */
    getAttribute(name: 'address2_county'): Xrm.Attributes.StringAttribute;
    /*
    Type the county for the secondary address.
    */
    getControl(name: 'address2_county'): Xrm.Controls.StringControl;
    /*
    Type the fax number associated with the secondary address.
    */
    getAttribute(name: 'address2_fax'): Xrm.Attributes.StringAttribute;
    /*
    Type the fax number associated with the secondary address.
    */
    getControl(name: 'address2_fax'): Xrm.Controls.StringControl;
    /*
    Select the freight terms for the secondary address to make sure shipping orders are processed correctly.
    */
    getAttribute(name: 'address2_freighttermscode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the freight terms for the secondary address to make sure shipping orders are processed correctly.
    */
    getControl(name: 'address2_freighttermscode'): Xrm.Controls.OptionSetControl;
    /*
    Type the first line of the secondary address.
    */
    getAttribute(name: 'address2_line1'): Xrm.Attributes.StringAttribute;
    /*
    Type the first line of the secondary address.
    */
    getControl(name: 'address2_line1'): Xrm.Controls.StringControl;
    /*
    Type the second line of the secondary address.
    */
    getAttribute(name: 'address2_line2'): Xrm.Attributes.StringAttribute;
    /*
    Type the second line of the secondary address.
    */
    getControl(name: 'address2_line2'): Xrm.Controls.StringControl;
    /*
    Type the third line of the secondary address.
    */
    getAttribute(name: 'address2_line3'): Xrm.Attributes.StringAttribute;
    /*
    Type the third line of the secondary address.
    */
    getControl(name: 'address2_line3'): Xrm.Controls.StringControl;
    /*
    Type a descriptive name for the secondary address, such as Corporate Headquarters.
    */
    getAttribute(name: 'address2_name'): Xrm.Attributes.StringAttribute;
    /*
    Type a descriptive name for the secondary address, such as Corporate Headquarters.
    */
    getControl(name: 'address2_name'): Xrm.Controls.StringControl;
    /*
    Type the ZIP Code or postal code for the secondary address.
    */
    getAttribute(name: 'address2_postalcode'): Xrm.Attributes.StringAttribute;
    /*
    Type the ZIP Code or postal code for the secondary address.
    */
    getControl(name: 'address2_postalcode'): Xrm.Controls.StringControl;
    /*
    Type the post office box number of the secondary address.
    */
    getAttribute(name: 'address2_postofficebox'): Xrm.Attributes.StringAttribute;
    /*
    Type the post office box number of the secondary address.
    */
    getControl(name: 'address2_postofficebox'): Xrm.Controls.StringControl;
    /*
    Type the name of the main contact at the account's secondary address.
    */
    getAttribute(name: 'address2_primarycontactname'): Xrm.Attributes.StringAttribute;
    /*
    Type the name of the main contact at the account's secondary address.
    */
    getControl(name: 'address2_primarycontactname'): Xrm.Controls.StringControl;
    /*
    Select a shipping method for deliveries sent to this address.
    */
    getAttribute(name: 'address2_shippingmethodcode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select a shipping method for deliveries sent to this address.
    */
    getControl(name: 'address2_shippingmethodcode'): Xrm.Controls.OptionSetControl;
    /*
    Type the state or province of the secondary address.
    */
    getAttribute(name: 'address2_stateorprovince'): Xrm.Attributes.StringAttribute;
    /*
    Type the state or province of the secondary address.
    */
    getControl(name: 'address2_stateorprovince'): Xrm.Controls.StringControl;
    /*
    Type the main phone number associated with the secondary address.
    */
    getAttribute(name: 'address2_telephone1'): Xrm.Attributes.StringAttribute;
    /*
    Type the main phone number associated with the secondary address.
    */
    getControl(name: 'address2_telephone1'): Xrm.Controls.StringControl;
    /*
    Type a second phone number associated with the secondary address.
    */
    getAttribute(name: 'address2_telephone2'): Xrm.Attributes.StringAttribute;
    /*
    Type a second phone number associated with the secondary address.
    */
    getControl(name: 'address2_telephone2'): Xrm.Controls.StringControl;
    /*
    Type a third phone number associated with the secondary address.
    */
    getAttribute(name: 'address2_telephone3'): Xrm.Attributes.StringAttribute;
    /*
    Type a third phone number associated with the secondary address.
    */
    getControl(name: 'address2_telephone3'): Xrm.Controls.StringControl;
    /*
    Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
    */
    getAttribute(name: 'address2_upszone'): Xrm.Attributes.StringAttribute;
    /*
    Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
    */
    getControl(name: 'address2_upszone'): Xrm.Controls.StringControl;
    /*
    Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
    */
    getAttribute(name: 'address2_utcoffset'): Xrm.Attributes.NumberAttribute;
    /*
    Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
    */
    getControl(name: 'address2_utcoffset'): Xrm.Controls.NumberControl;
    /*
    For system use only.
    */
    getAttribute(name: 'aging30'): Xrm.Attributes.NumberAttribute;
    /*
    For system use only.
    */
    getControl(name: 'aging30'): Xrm.Controls.NumberControl;
    /*
    The base currency equivalent of the aging 30 field.
    */
    getAttribute(name: 'aging30_base'): Xrm.Attributes.NumberAttribute;
    /*
    The base currency equivalent of the aging 30 field.
    */
    getControl(name: 'aging30_base'): Xrm.Controls.NumberControl;
    /*
    For system use only.
    */
    getAttribute(name: 'aging60'): Xrm.Attributes.NumberAttribute;
    /*
    For system use only.
    */
    getControl(name: 'aging60'): Xrm.Controls.NumberControl;
    /*
    The base currency equivalent of the aging 60 field.
    */
    getAttribute(name: 'aging60_base'): Xrm.Attributes.NumberAttribute;
    /*
    The base currency equivalent of the aging 60 field.
    */
    getControl(name: 'aging60_base'): Xrm.Controls.NumberControl;
    /*
    For system use only.
    */
    getAttribute(name: 'aging90'): Xrm.Attributes.NumberAttribute;
    /*
    For system use only.
    */
    getControl(name: 'aging90'): Xrm.Controls.NumberControl;
    /*
    The base currency equivalent of the aging 90 field.
    */
    getAttribute(name: 'aging90_base'): Xrm.Attributes.NumberAttribute;
    /*
    The base currency equivalent of the aging 90 field.
    */
    getControl(name: 'aging90_base'): Xrm.Controls.NumberControl;
    /*
    
    */
    getAttribute(name: 'bis_baam'): Xrm.Attributes.BooleanAttribute;
    /*
    
    */
    getControl(name: 'bis_baam'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'bis_bisofficephone'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'bis_bisofficephone'): Xrm.Controls.StringControl;
    /*
    
    */
    getAttribute(name: 'bis_bloomberg'): Xrm.Attributes.BooleanAttribute;
    /*
    
    */
    getControl(name: 'bis_bloomberg'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'bis_boardmember'): Xrm.Attributes.BooleanAttribute;
    /*
    
    */
    getControl(name: 'bis_boardmember'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'bis_cisid'): Xrm.Attributes.NumberAttribute;
    /*
    
    */
    getControl(name: 'bis_cisid'): Xrm.Controls.NumberControl;
    /*
    
    */
    getAttribute(name: 'bis_creationsource'): Xrm.Attributes.OptionSetAttribute;
    /*
    
    */
    getControl(name: 'bis_creationsource'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'bis_crmid'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'bis_crmid'): Xrm.Controls.StringControl;
    /*
    
    */
    getAttribute(name: 'bis_dealing'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'bis_dealing'): Xrm.Controls.StringControl;
    /*
    
    */
    getAttribute(name: 'bis_dwhid'): Xrm.Attributes.NumberAttribute;
    /*
    
    */
    getControl(name: 'bis_dwhid'): Xrm.Controls.NumberControl;
    /*
    
    */
    getAttribute(name: 'bis_ebis'): Xrm.Attributes.BooleanAttribute;
    /*
    
    */
    getControl(name: 'bis_ebis'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'bis_emsid'): Xrm.Attributes.NumberAttribute;
    /*
    
    */
    getControl(name: 'bis_emsid'): Xrm.Controls.NumberControl;
    /*
    
    */
    getAttribute(name: 'bis_faxbanking'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'bis_faxbanking'): Xrm.Controls.StringControl;
    /*
    
    */
    getAttribute(name: 'bis_findurcodemain'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'bis_findurcodemain'): Xrm.Controls.StringControl;
    /*
    
    */
    getAttribute(name: 'bis_headquarter'): Xrm.Attributes.BooleanAttribute;
    /*
    
    */
    getControl(name: 'bis_headquarter'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'bis_institutionnameabbr'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'bis_institutionnameabbr'): Xrm.Controls.StringControl;
    /*
    
    */
    getAttribute(name: 'bis_institutionnamelocal'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'bis_institutionnamelocal'): Xrm.Controls.StringControl;
    /*
    
    */
    getAttribute(name: 'bis_internationalprintaddress'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'bis_internationalprintaddress'): Xrm.Controls.StringControl;
    /*
    
    */
    getAttribute(name: 'bis_isrlastevaluationdate'): Xrm.Attributes.DateAttribute;
    /*
    
    */
    getControl(name: 'bis_isrlastevaluationdate'): Xrm.Controls.DateControl;
    /*
    
    */
    getAttribute(name: 'bis_isrstatus'): Xrm.Attributes.OptionSetAttribute;
    /*
    
    */
    getControl(name: 'bis_isrstatus'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'bis_operationalhours'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'bis_operationalhours'): Xrm.Controls.StringControl;
    /*
    
    */
    getAttribute(name: 'bis_partyfunction'): Xrm.Attributes.OptionSetAttribute;
    /*
    
    */
    getControl(name: 'bis_partyfunction'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'bis_reuters'): Xrm.Attributes.BooleanAttribute;
    /*
    
    */
    getControl(name: 'bis_reuters'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'bis_sal'): Xrm.Attributes.BooleanAttribute;
    /*
    
    */
    getControl(name: 'bis_sal'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'bis_sanc'): Xrm.Attributes.BooleanAttribute;
    /*
    
    */
    getControl(name: 'bis_sanc'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'bis_shareholder'): Xrm.Attributes.BooleanAttribute;
    /*
    
    */
    getControl(name: 'bis_shareholder'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'bis_swiftcode'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'bis_swiftcode'): Xrm.Controls.StringControl;
    /*
    
    */
    getAttribute(name: 'bis_testchoice'): Xrm.Attributes.BooleanAttribute;
    /*
    
    */
    getControl(name: 'bis_testchoice'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'bis_twitter'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'bis_twitter'): Xrm.Controls.StringControl;
    /*
    Select the legal designation or other business type of the account for contracts or reporting purposes.
    */
    getAttribute(name: 'businesstypecode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the legal designation or other business type of the account for contracts or reporting purposes.
    */
    getControl(name: 'businesstypecode'): Xrm.Controls.OptionSetControl;
    /*
    Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.
    */
    getAttribute(name: 'createdon'): Xrm.Attributes.DateAttribute;
    /*
    Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.
    */
    getControl(name: 'createdon'): Xrm.Controls.DateControl;
    /*
    Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer.
    */
    getAttribute(name: 'creditlimit'): Xrm.Attributes.NumberAttribute;
    /*
    Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer.
    */
    getControl(name: 'creditlimit'): Xrm.Controls.NumberControl;
    /*
    Shows the credit limit converted to the system's default base currency for reporting purposes.
    */
    getAttribute(name: 'creditlimit_base'): Xrm.Attributes.NumberAttribute;
    /*
    Shows the credit limit converted to the system's default base currency for reporting purposes.
    */
    getControl(name: 'creditlimit_base'): Xrm.Controls.NumberControl;
    /*
    Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer.
    */
    getAttribute(name: 'creditonhold'): Xrm.Attributes.BooleanAttribute;
    /*
    Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer.
    */
    getControl(name: 'creditonhold'): Xrm.Controls.OptionSetControl;
    /*
    Select the size category or range of the account for segmentation and reporting purposes.
    */
    getAttribute(name: 'customersizecode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the size category or range of the account for segmentation and reporting purposes.
    */
    getControl(name: 'customersizecode'): Xrm.Controls.OptionSetControl;
    /*
    Select the category that best describes the relationship between the account and your organization.
    */
    getAttribute(name: 'customertypecode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the category that best describes the relationship between the account and your organization.
    */
    getControl(name: 'customertypecode'): Xrm.Controls.OptionSetControl;
    /*
    Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email.
    */
    getAttribute(name: 'donotbulkemail'): Xrm.Attributes.BooleanAttribute;
    /*
    Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email.
    */
    getControl(name: 'donotbulkemail'): Xrm.Controls.OptionSetControl;
    /*
    Select whether the account allows bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but will be excluded from the postal mail.
    */
    getAttribute(name: 'donotbulkpostalmail'): Xrm.Attributes.BooleanAttribute;
    /*
    Select whether the account allows bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but will be excluded from the postal mail.
    */
    getControl(name: 'donotbulkpostalmail'): Xrm.Controls.OptionSetControl;
    /*
    Select whether the account allows direct email sent from Microsoft Dynamics 365.
    */
    getAttribute(name: 'donotemail'): Xrm.Attributes.BooleanAttribute;
    /*
    Select whether the account allows direct email sent from Microsoft Dynamics 365.
    */
    getControl(name: 'donotemail'): Xrm.Controls.OptionSetControl;
    /*
    Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns.
    */
    getAttribute(name: 'donotfax'): Xrm.Attributes.BooleanAttribute;
    /*
    Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns.
    */
    getControl(name: 'donotfax'): Xrm.Controls.OptionSetControl;
    /*
    Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns.
    */
    getAttribute(name: 'donotphone'): Xrm.Attributes.BooleanAttribute;
    /*
    Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns.
    */
    getControl(name: 'donotphone'): Xrm.Controls.OptionSetControl;
    /*
    Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns.
    */
    getAttribute(name: 'donotpostalmail'): Xrm.Attributes.BooleanAttribute;
    /*
    Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns.
    */
    getControl(name: 'donotpostalmail'): Xrm.Controls.OptionSetControl;
    /*
    Select whether the account accepts marketing materials, such as brochures or catalogs.
    */
    getAttribute(name: 'donotsendmm'): Xrm.Attributes.BooleanAttribute;
    /*
    Select whether the account accepts marketing materials, such as brochures or catalogs.
    */
    getControl(name: 'donotsendmm'): Xrm.Controls.OptionSetControl;
    /*
    Type the primary email address for the account.
    */
    getAttribute(name: 'emailaddress1'): Xrm.Attributes.StringAttribute;
    /*
    Type the primary email address for the account.
    */
    getControl(name: 'emailaddress1'): Xrm.Controls.StringControl;
    /*
    Type the secondary email address for the account.
    */
    getAttribute(name: 'emailaddress2'): Xrm.Attributes.StringAttribute;
    /*
    Type the secondary email address for the account.
    */
    getControl(name: 'emailaddress2'): Xrm.Controls.StringControl;
    /*
    Type an alternate email address for the account.
    */
    getAttribute(name: 'emailaddress3'): Xrm.Attributes.StringAttribute;
    /*
    Type an alternate email address for the account.
    */
    getControl(name: 'emailaddress3'): Xrm.Controls.StringControl;
    /*
    Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
    */
    getAttribute(name: 'exchangerate'): Xrm.Attributes.NumberAttribute;
    /*
    Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
    */
    getControl(name: 'exchangerate'): Xrm.Controls.NumberControl;
    /*
    Type the fax number for the account.
    */
    getAttribute(name: 'fax'): Xrm.Attributes.StringAttribute;
    /*
    Type the fax number for the account.
    */
    getControl(name: 'fax'): Xrm.Controls.StringControl;
    /*
    Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account.
    */
    getAttribute(name: 'followemail'): Xrm.Attributes.BooleanAttribute;
    /*
    Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account.
    */
    getControl(name: 'followemail'): Xrm.Controls.OptionSetControl;
    /*
    Type the URL for the account's FTP site to enable users to access data and share documents.
    */
    getAttribute(name: 'ftpsiteurl'): Xrm.Attributes.StringAttribute;
    /*
    Type the URL for the account's FTP site to enable users to access data and share documents.
    */
    getControl(name: 'ftpsiteurl'): Xrm.Controls.StringControl;
    /*
    Unique identifier of the data import or data migration that created this record.
    */
    getAttribute(name: 'importsequencenumber'): Xrm.Attributes.NumberAttribute;
    /*
    Unique identifier of the data import or data migration that created this record.
    */
    getControl(name: 'importsequencenumber'): Xrm.Controls.NumberControl;
    /*
    Select the account's primary industry for use in marketing segmentation and demographic analysis.
    */
    getAttribute(name: 'industrycode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the account's primary industry for use in marketing segmentation and demographic analysis.
    */
    getControl(name: 'industrycode'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'isprivate'): Xrm.Attributes.BooleanAttribute;
    /*
    
    */
    getControl(name: 'isprivate'): Xrm.Controls.OptionSetControl;
    /*
    Contains the date and time stamp of the last on hold time.
    */
    getAttribute(name: 'lastonholdtime'): Xrm.Attributes.DateAttribute;
    /*
    Contains the date and time stamp of the last on hold time.
    */
    getControl(name: 'lastonholdtime'): Xrm.Controls.DateControl;
    /*
    Shows the date when the account was last included in a marketing campaign or quick campaign.
    */
    getAttribute(name: 'lastusedincampaign'): Xrm.Attributes.DateAttribute;
    /*
    Shows the date when the account was last included in a marketing campaign or quick campaign.
    */
    getControl(name: 'lastusedincampaign'): Xrm.Controls.DateControl;
    /*
    Type the market capitalization of the account to identify the company's equity, used as an indicator in financial performance analysis.
    */
    getAttribute(name: 'marketcap'): Xrm.Attributes.NumberAttribute;
    /*
    Type the market capitalization of the account to identify the company's equity, used as an indicator in financial performance analysis.
    */
    getControl(name: 'marketcap'): Xrm.Controls.NumberControl;
    /*
    Shows the market capitalization converted to the system's default base currency.
    */
    getAttribute(name: 'marketcap_base'): Xrm.Attributes.NumberAttribute;
    /*
    Shows the market capitalization converted to the system's default base currency.
    */
    getControl(name: 'marketcap_base'): Xrm.Controls.NumberControl;
    /*
    Whether is only for marketing
    */
    getAttribute(name: 'marketingonly'): Xrm.Attributes.BooleanAttribute;
    /*
    Whether is only for marketing
    */
    getControl(name: 'marketingonly'): Xrm.Controls.OptionSetControl;
    /*
    Shows whether the account has been merged with another account.
    */
    getAttribute(name: 'merged'): Xrm.Attributes.BooleanAttribute;
    /*
    Shows whether the account has been merged with another account.
    */
    getControl(name: 'merged'): Xrm.Controls.OptionSetControl;
    /*
    Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.
    */
    getAttribute(name: 'modifiedon'): Xrm.Attributes.DateAttribute;
    /*
    Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.
    */
    getControl(name: 'modifiedon'): Xrm.Controls.DateControl;
    /*
    Describes whether account is opted out or not
    */
    getAttribute(name: 'msdyn_gdproptout'): Xrm.Attributes.BooleanAttribute;
    /*
    Describes whether account is opted out or not
    */
    getControl(name: 'msdyn_gdproptout'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'msdyncrm_insights_placeholder'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'msdyncrm_insights_placeholder'): Xrm.Controls.StringControl;
    /*
    Indicates whether this account belongs to hotel group
    */
    getAttribute(name: 'msevtmgt_hotelgroup'): Xrm.Attributes.OptionSetAttribute;
    /*
    Indicates whether this account belongs to hotel group
    */
    getControl(name: 'msevtmgt_hotelgroup'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'msevtmgt_rentalcarprovider'): Xrm.Attributes.OptionSetAttribute;
    /*
    
    */
    getControl(name: 'msevtmgt_rentalcarprovider'): Xrm.Controls.OptionSetControl;
    /*
    Type the company or business name.
    */
    getAttribute(name: 'name'): Xrm.Attributes.StringAttribute;
    /*
    Type the company or business name.
    */
    getControl(name: 'name'): Xrm.Controls.StringControl;
    /*
    Type the number of employees that work at the account for use in marketing segmentation and demographic analysis.
    */
    getAttribute(name: 'numberofemployees'): Xrm.Attributes.NumberAttribute;
    /*
    Type the number of employees that work at the account for use in marketing segmentation and demographic analysis.
    */
    getControl(name: 'numberofemployees'): Xrm.Controls.NumberControl;
    /*
    Shows how long, in minutes, that the record was on hold.
    */
    getAttribute(name: 'onholdtime'): Xrm.Attributes.NumberAttribute;
    /*
    Shows how long, in minutes, that the record was on hold.
    */
    getControl(name: 'onholdtime'): Xrm.Controls.NumberControl;
    /*
    Last Updated time of rollup field Open Deals.
    */
    getAttribute(name: 'opendeals_date'): Xrm.Attributes.DateAttribute;
    /*
    Last Updated time of rollup field Open Deals.
    */
    getControl(name: 'opendeals_date'): Xrm.Controls.DateControl;
    /*
    State of rollup field Open Deals.
    */
    getAttribute(name: 'opendeals_state'): Xrm.Attributes.NumberAttribute;
    /*
    State of rollup field Open Deals.
    */
    getControl(name: 'opendeals_state'): Xrm.Controls.NumberControl;
    /*
    Last Updated time of rollup field Open Revenue.
    */
    getAttribute(name: 'openrevenue_date'): Xrm.Attributes.DateAttribute;
    /*
    Last Updated time of rollup field Open Revenue.
    */
    getControl(name: 'openrevenue_date'): Xrm.Controls.DateControl;
    /*
    State of rollup field Open Revenue.
    */
    getAttribute(name: 'openrevenue_state'): Xrm.Attributes.NumberAttribute;
    /*
    State of rollup field Open Revenue.
    */
    getControl(name: 'openrevenue_state'): Xrm.Controls.NumberControl;
    /*
    Date and time that the record was migrated.
    */
    getAttribute(name: 'overriddencreatedon'): Xrm.Attributes.DateAttribute;
    /*
    Date and time that the record was migrated.
    */
    getControl(name: 'overriddencreatedon'): Xrm.Controls.DateControl;
    /*
    Select the account's ownership structure, such as public or private.
    */
    getAttribute(name: 'ownershipcode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the account's ownership structure, such as public or private.
    */
    getControl(name: 'ownershipcode'): Xrm.Controls.OptionSetControl;
    /*
    For system use only. Legacy Microsoft Dynamics CRM 3.0 workflow data.
    */
    getAttribute(name: 'participatesinworkflow'): Xrm.Attributes.BooleanAttribute;
    /*
    For system use only. Legacy Microsoft Dynamics CRM 3.0 workflow data.
    */
    getControl(name: 'participatesinworkflow'): Xrm.Controls.OptionSetControl;
    /*
    Select the payment terms to indicate when the customer needs to pay the total amount.
    */
    getAttribute(name: 'paymenttermscode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the payment terms to indicate when the customer needs to pay the total amount.
    */
    getControl(name: 'paymenttermscode'): Xrm.Controls.OptionSetControl;
    /*
    Select the preferred day of the week for service appointments.
    */
    getAttribute(name: 'preferredappointmentdaycode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the preferred day of the week for service appointments.
    */
    getControl(name: 'preferredappointmentdaycode'): Xrm.Controls.OptionSetControl;
    /*
    Select the preferred time of day for service appointments.
    */
    getAttribute(name: 'preferredappointmenttimecode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the preferred time of day for service appointments.
    */
    getControl(name: 'preferredappointmenttimecode'): Xrm.Controls.OptionSetControl;
    /*
    Select the preferred method of contact.
    */
    getAttribute(name: 'preferredcontactmethodcode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the preferred method of contact.
    */
    getControl(name: 'preferredcontactmethodcode'): Xrm.Controls.OptionSetControl;
    /*
    Primary Satori ID for Account
    */
    getAttribute(name: 'primarysatoriid'): Xrm.Attributes.StringAttribute;
    /*
    Primary Satori ID for Account
    */
    getControl(name: 'primarysatoriid'): Xrm.Controls.StringControl;
    /*
    Primary Twitter ID for Account
    */
    getAttribute(name: 'primarytwitterid'): Xrm.Attributes.StringAttribute;
    /*
    Primary Twitter ID for Account
    */
    getControl(name: 'primarytwitterid'): Xrm.Controls.StringControl;
    /*
    Type the annual revenue for the account, used as an indicator in financial performance analysis.
    */
    getAttribute(name: 'revenue'): Xrm.Attributes.NumberAttribute;
    /*
    Type the annual revenue for the account, used as an indicator in financial performance analysis.
    */
    getControl(name: 'revenue'): Xrm.Controls.NumberControl;
    /*
    Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
    */
    getAttribute(name: 'revenue_base'): Xrm.Attributes.NumberAttribute;
    /*
    Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
    */
    getControl(name: 'revenue_base'): Xrm.Controls.NumberControl;
    /*
    Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis.
    */
    getAttribute(name: 'sharesoutstanding'): Xrm.Attributes.NumberAttribute;
    /*
    Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis.
    */
    getControl(name: 'sharesoutstanding'): Xrm.Controls.NumberControl;
    /*
    Select a shipping method for deliveries sent to the account's address to designate the preferred carrier or other delivery option.
    */
    getAttribute(name: 'shippingmethodcode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select a shipping method for deliveries sent to the account's address to designate the preferred carrier or other delivery option.
    */
    getControl(name: 'shippingmethodcode'): Xrm.Controls.OptionSetControl;
    /*
    Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis.
    */
    getAttribute(name: 'sic'): Xrm.Attributes.StringAttribute;
    /*
    Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis.
    */
    getControl(name: 'sic'): Xrm.Controls.StringControl;
    /*
    Type the stock exchange at which the account is listed to track their stock and financial performance of the company.
    */
    getAttribute(name: 'stockexchange'): Xrm.Attributes.StringAttribute;
    /*
    Type the stock exchange at which the account is listed to track their stock and financial performance of the company.
    */
    getControl(name: 'stockexchange'): Xrm.Controls.StringControl;
    /*
    Number of users or conversations followed the record
    */
    getAttribute(name: 'teamsfollowed'): Xrm.Attributes.NumberAttribute;
    /*
    Number of users or conversations followed the record
    */
    getControl(name: 'teamsfollowed'): Xrm.Controls.NumberControl;
    /*
    Type the main phone number for this account.
    */
    getAttribute(name: 'telephone1'): Xrm.Attributes.StringAttribute;
    /*
    Type the main phone number for this account.
    */
    getControl(name: 'telephone1'): Xrm.Controls.StringControl;
    /*
    Type a second phone number for this account.
    */
    getAttribute(name: 'telephone2'): Xrm.Attributes.StringAttribute;
    /*
    Type a second phone number for this account.
    */
    getControl(name: 'telephone2'): Xrm.Controls.StringControl;
    /*
    Type a third phone number for this account.
    */
    getAttribute(name: 'telephone3'): Xrm.Attributes.StringAttribute;
    /*
    Type a third phone number for this account.
    */
    getControl(name: 'telephone3'): Xrm.Controls.StringControl;
    /*
    Select a region or territory for the account for use in segmentation and analysis.
    */
    getAttribute(name: 'territorycode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select a region or territory for the account for use in segmentation and analysis.
    */
    getControl(name: 'territorycode'): Xrm.Controls.OptionSetControl;
    /*
    Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money.
    */
    getAttribute(name: 'tickersymbol'): Xrm.Attributes.StringAttribute;
    /*
    Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money.
    */
    getControl(name: 'tickersymbol'): Xrm.Controls.StringControl;
    /*
    Total time spent for emails (read and write) and meetings by me in relation to account record.
    */
    getAttribute(name: 'timespentbymeonemailandmeetings'): Xrm.Attributes.StringAttribute;
    /*
    Total time spent for emails (read and write) and meetings by me in relation to account record.
    */
    getControl(name: 'timespentbymeonemailandmeetings'): Xrm.Controls.StringControl;
    /*
    For internal use only.
    */
    getAttribute(name: 'timezoneruleversionnumber'): Xrm.Attributes.NumberAttribute;
    /*
    For internal use only.
    */
    getControl(name: 'timezoneruleversionnumber'): Xrm.Controls.NumberControl;
    /*
    For internal use only.
    */
    getAttribute(name: 'traversedpath'): Xrm.Attributes.StringAttribute;
    /*
    For internal use only.
    */
    getControl(name: 'traversedpath'): Xrm.Controls.StringControl;
    /*
    Time zone code that was in use when the record was created.
    */
    getAttribute(name: 'utcconversiontimezonecode'): Xrm.Attributes.NumberAttribute;
    /*
    Time zone code that was in use when the record was created.
    */
    getControl(name: 'utcconversiontimezonecode'): Xrm.Controls.NumberControl;
    /*
    Type the account's website URL to get quick details about the company profile.
    */
    getAttribute(name: 'websiteurl'): Xrm.Attributes.StringAttribute;
    /*
    Type the account's website URL to get quick details about the company profile.
    */
    getControl(name: 'websiteurl'): Xrm.Controls.StringControl;
    /*
    Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications.
    */
    getAttribute(name: 'yominame'): Xrm.Attributes.StringAttribute;
    /*
    Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications.
    */
    getControl(name: 'yominame'): Xrm.Controls.StringControl;
}
// Entity Account
export const accountMetadata = {
  typeName: "mscrm.account",
  logicalName: "account",
  collectionName: "accounts",
  primaryIdAttribute: "accountid",
  attributeTypes: {
    // Numeric Types
    address1_latitude: "Double",
    address1_longitude: "Double",
    address1_utcoffset: "Integer",
    address2_latitude: "Double",
    address2_longitude: "Double",
    address2_utcoffset: "Integer",
    aging30: "Money",
    aging30_base: "Money",
    aging60: "Money",
    aging60_base: "Money",
    aging90: "Money",
    aging90_base: "Money",
    bis_cisid: "Integer",
    bis_dwhid: "Integer",
    bis_emsid: "Integer",
    creditlimit: "Money",
    creditlimit_base: "Money",
    entityimage_timestamp: "BigInt",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    marketcap: "Money",
    marketcap_base: "Money",
    numberofemployees: "Integer",
    onholdtime: "Integer",
    opendeals: "Integer",
    opendeals_state: "Integer",
    openrevenue: "Money",
    openrevenue_base: "Money",
    openrevenue_state: "Integer",
    revenue: "Money",
    revenue_base: "Money",
    sharesoutstanding: "Integer",
    teamsfollowed: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    accountcategorycode: "Optionset",
    accountclassificationcode: "Optionset",
    accountratingcode: "Optionset",
    address1_addresstypecode: "Optionset",
    address1_freighttermscode: "Optionset",
    address1_shippingmethodcode: "Optionset",
    address2_addresstypecode: "Optionset",
    address2_freighttermscode: "Optionset",
    address2_shippingmethodcode: "Optionset",
    bis_creationsource: "Optionset",
    bis_isrstatus: "Optionset",
    bis_partyfunction: "Optionset",
    businesstypecode: "Optionset",
    customersizecode: "Optionset",
    customertypecode: "Optionset",
    industrycode: "Optionset",
    msevtmgt_hotelgroup: "Optionset",
    msevtmgt_rentalcarprovider: "Optionset",
    ownershipcode: "Optionset",
    paymenttermscode: "Optionset",
    preferredappointmentdaycode: "Optionset",
    preferredappointmenttimecode: "Optionset",
    preferredcontactmethodcode: "Optionset",
    shippingmethodcode: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    territorycode: "Optionset",
    // Date Formats
    bis_isrlastevaluationdate: "DateOnly:UserLocal",
    createdon: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    lastusedincampaign: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    opendeals_date: "DateAndTime:UserLocal",
    openrevenue_date: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    bis_area: ["mscrm.bis_area"],
    bis_backuprelationshipmanager: ["mscrm.systemuser"],
    bis_domain: ["mscrm.bis_domain"],
    bis_institutiontype: ["mscrm.bis_institutiontype"],
    bis_relationshipmanager1: ["mscrm.systemuser"],
    bis_relationshipmanager2: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    defaultpricelevelid: ["mscrm.pricelevel"],
    masterid: ["mscrm.account"],
    modifiedby: ["mscrm.systemuser"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    msdyn_salesaccelerationinsightid: ["mscrm.msdyn_salesaccelerationinsight"],
    msdyn_segmentid: ["mscrm.msdyn_segment"],
    originatingleadid: ["mscrm.lead"],
    ownerid: ["mscrm.principal"],
    owningbusinessunit: ["mscrm.businessunit"],
    owningteam: ["mscrm.team"],
    owninguser: ["mscrm.systemuser"],
    parentaccountid: ["mscrm.account"],
    preferredequipmentid: ["mscrm.equipment"],
    preferredserviceid: ["mscrm.service"],
    preferredsystemuserid: ["mscrm.systemuser"],
    primarycontactid: ["mscrm.contact"],
    sla_account_sla: ["mscrm.sla"],
    stageid_processstage: ["mscrm.processstage"],
    territoryid: ["mscrm.territory"],
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    slainvokedid: ["sla"],
  },
};

// Attribute constants
export const enum AccountAttributes {
  AccountCategoryCode = "accountcategorycode",
  AccountClassificationCode = "accountclassificationcode",
  AccountId = "accountid",
  AccountNumber = "accountnumber",
  AccountRatingCode = "accountratingcode",
  Address1_AddressId = "address1_addressid",
  Address1_AddressTypeCode = "address1_addresstypecode",
  Address1_City = "address1_city",
  Address1_Composite = "address1_composite",
  Address1_Country = "address1_country",
  Address1_County = "address1_county",
  Address1_Fax = "address1_fax",
  Address1_FreightTermsCode = "address1_freighttermscode",
  Address1_Latitude = "address1_latitude",
  Address1_Line1 = "address1_line1",
  Address1_Line2 = "address1_line2",
  Address1_Line3 = "address1_line3",
  Address1_Longitude = "address1_longitude",
  Address1_Name = "address1_name",
  Address1_PostalCode = "address1_postalcode",
  Address1_PostOfficeBox = "address1_postofficebox",
  Address1_PrimaryContactName = "address1_primarycontactname",
  Address1_ShippingMethodCode = "address1_shippingmethodcode",
  Address1_StateOrProvince = "address1_stateorprovince",
  Address1_Telephone1 = "address1_telephone1",
  Address1_Telephone2 = "address1_telephone2",
  Address1_Telephone3 = "address1_telephone3",
  Address1_UPSZone = "address1_upszone",
  Address1_UTCOffset = "address1_utcoffset",
  Address2_AddressId = "address2_addressid",
  Address2_AddressTypeCode = "address2_addresstypecode",
  Address2_City = "address2_city",
  Address2_Composite = "address2_composite",
  Address2_Country = "address2_country",
  Address2_County = "address2_county",
  Address2_Fax = "address2_fax",
  Address2_FreightTermsCode = "address2_freighttermscode",
  Address2_Latitude = "address2_latitude",
  Address2_Line1 = "address2_line1",
  Address2_Line2 = "address2_line2",
  Address2_Line3 = "address2_line3",
  Address2_Longitude = "address2_longitude",
  Address2_Name = "address2_name",
  Address2_PostalCode = "address2_postalcode",
  Address2_PostOfficeBox = "address2_postofficebox",
  Address2_PrimaryContactName = "address2_primarycontactname",
  Address2_ShippingMethodCode = "address2_shippingmethodcode",
  Address2_StateOrProvince = "address2_stateorprovince",
  Address2_Telephone1 = "address2_telephone1",
  Address2_Telephone2 = "address2_telephone2",
  Address2_Telephone3 = "address2_telephone3",
  Address2_UPSZone = "address2_upszone",
  Address2_UTCOffset = "address2_utcoffset",
  Aging30 = "aging30",
  Aging30_Base = "aging30_base",
  Aging60 = "aging60",
  Aging60_Base = "aging60_base",
  Aging90 = "aging90",
  Aging90_Base = "aging90_base",
  bis_area = "bis_area",
  bis_areaName = "bis_areaname",
  bis_baam = "bis_baam",
  bis_backuprelationshipmanager = "bis_backuprelationshipmanager",
  bis_backuprelationshipmanagerName = "bis_backuprelationshipmanagername",
  bis_backuprelationshipmanagerYomiName = "bis_backuprelationshipmanageryominame",
  bis_bisofficephone = "bis_bisofficephone",
  bis_bloomberg = "bis_bloomberg",
  bis_boardmember = "bis_boardmember",
  bis_cisid = "bis_cisid",
  bis_compliancenotes = "bis_compliancenotes",
  bis_creationsource = "bis_creationsource",
  bis_crmid = "bis_crmid",
  bis_dealing = "bis_dealing",
  bis_domain = "bis_domain",
  bis_domainName = "bis_domainname",
  bis_dwhid = "bis_dwhid",
  bis_ebis = "bis_ebis",
  bis_emsid = "bis_emsid",
  bis_faxbanking = "bis_faxbanking",
  bis_findurcodemain = "bis_findurcodemain",
  bis_headquarter = "bis_headquarter",
  bis_institutionnameabbr = "bis_institutionnameabbr",
  bis_institutionnamelocal = "bis_institutionnamelocal",
  bis_institutiontype = "bis_institutiontype",
  bis_institutiontypeName = "bis_institutiontypename",
  bis_internationalprintaddress = "bis_internationalprintaddress",
  bis_isr1plusdetails = "bis_isr1plusdetails",
  bis_isrlastevaluationdate = "bis_isrlastevaluationdate",
  bis_isrstatus = "bis_isrstatus",
  bis_note = "bis_note",
  bis_operationalhours = "bis_operationalhours",
  bis_partyfunction = "bis_partyfunction",
  bis_relationshipmanager1 = "bis_relationshipmanager1",
  bis_relationshipmanager1Name = "bis_relationshipmanager1name",
  bis_relationshipmanager1YomiName = "bis_relationshipmanager1yominame",
  bis_relationshipmanager2 = "bis_relationshipmanager2",
  bis_relationshipmanager2Name = "bis_relationshipmanager2name",
  bis_relationshipmanager2YomiName = "bis_relationshipmanager2yominame",
  bis_reuters = "bis_reuters",
  bis_sal = "bis_sal",
  bis_sanc = "bis_sanc",
  bis_shareholder = "bis_shareholder",
  bis_swiftcode = "bis_swiftcode",
  bis_testchoice = "bis_testchoice",
  bis_twitter = "bis_twitter",
  BusinessTypeCode = "businesstypecode",
  CreatedBy = "createdby",
  CreatedByExternalParty = "createdbyexternalparty",
  CreatedByExternalPartyName = "createdbyexternalpartyname",
  CreatedByExternalPartyYomiName = "createdbyexternalpartyyominame",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  CreditLimit = "creditlimit",
  CreditLimit_Base = "creditlimit_base",
  CreditOnHold = "creditonhold",
  CustomerSizeCode = "customersizecode",
  CustomerTypeCode = "customertypecode",
  DefaultPriceLevelId = "defaultpricelevelid",
  DefaultPriceLevelIdName = "defaultpricelevelidname",
  Description = "description",
  DoNotBulkEMail = "donotbulkemail",
  DoNotBulkPostalMail = "donotbulkpostalmail",
  DoNotEMail = "donotemail",
  DoNotFax = "donotfax",
  DoNotPhone = "donotphone",
  DoNotPostalMail = "donotpostalmail",
  DoNotSendMM = "donotsendmm",
  EMailAddress1 = "emailaddress1",
  EMailAddress2 = "emailaddress2",
  EMailAddress3 = "emailaddress3",
  EntityImage = "entityimage",
  EntityImage_Timestamp = "entityimage_timestamp",
  EntityImage_URL = "entityimage_url",
  EntityImageId = "entityimageid",
  ExchangeRate = "exchangerate",
  Fax = "fax",
  FollowEmail = "followemail",
  FtpSiteURL = "ftpsiteurl",
  ImportSequenceNumber = "importsequencenumber",
  IndustryCode = "industrycode",
  IsPrivate = "isprivate",
  LastOnHoldTime = "lastonholdtime",
  LastUsedInCampaign = "lastusedincampaign",
  MarketCap = "marketcap",
  MarketCap_Base = "marketcap_base",
  MarketingOnly = "marketingonly",
  MasterAccountIdName = "masteraccountidname",
  MasterAccountIdYomiName = "masteraccountidyominame",
  MasterId = "masterid",
  Merged = "merged",
  ModifiedBy = "modifiedby",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  ModifiedByExternalPartyName = "modifiedbyexternalpartyname",
  ModifiedByExternalPartyYomiName = "modifiedbyexternalpartyyominame",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  msdyn_gdproptout = "msdyn_gdproptout",
  msdyn_salesaccelerationinsightid = "msdyn_salesaccelerationinsightid",
  msdyn_salesaccelerationinsightidName = "msdyn_salesaccelerationinsightidname",
  msdyn_segmentid = "msdyn_segmentid",
  msdyn_segmentidName = "msdyn_segmentidname",
  msdyncrm_insights_placeholder = "msdyncrm_insights_placeholder",
  msevtmgt_HotelGroup = "msevtmgt_hotelgroup",
  msevtmgt_RentalCarProvider = "msevtmgt_rentalcarprovider",
  Name = "name",
  NumberOfEmployees = "numberofemployees",
  OnHoldTime = "onholdtime",
  OpenDeals = "opendeals",
  OpenDeals_Date = "opendeals_date",
  OpenDeals_State = "opendeals_state",
  OpenRevenue = "openrevenue",
  OpenRevenue_Base = "openrevenue_base",
  OpenRevenue_Date = "openrevenue_date",
  OpenRevenue_State = "openrevenue_state",
  OriginatingLeadId = "originatingleadid",
  OriginatingLeadIdName = "originatingleadidname",
  OriginatingLeadIdYomiName = "originatingleadidyominame",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwnershipCode = "ownershipcode",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  ParentAccountId = "parentaccountid",
  ParentAccountIdName = "parentaccountidname",
  ParentAccountIdYomiName = "parentaccountidyominame",
  ParticipatesInWorkflow = "participatesinworkflow",
  PaymentTermsCode = "paymenttermscode",
  PreferredAppointmentDayCode = "preferredappointmentdaycode",
  PreferredAppointmentTimeCode = "preferredappointmenttimecode",
  PreferredContactMethodCode = "preferredcontactmethodcode",
  PreferredEquipmentId = "preferredequipmentid",
  PreferredEquipmentIdName = "preferredequipmentidname",
  PreferredServiceId = "preferredserviceid",
  PreferredServiceIdName = "preferredserviceidname",
  PreferredSystemUserId = "preferredsystemuserid",
  PreferredSystemUserIdName = "preferredsystemuseridname",
  PreferredSystemUserIdYomiName = "preferredsystemuseridyominame",
  PrimaryContactId = "primarycontactid",
  PrimaryContactIdName = "primarycontactidname",
  PrimaryContactIdYomiName = "primarycontactidyominame",
  PrimarySatoriId = "primarysatoriid",
  PrimaryTwitterId = "primarytwitterid",
  ProcessId = "processid",
  Revenue = "revenue",
  Revenue_Base = "revenue_base",
  SharesOutstanding = "sharesoutstanding",
  ShippingMethodCode = "shippingmethodcode",
  SIC = "sic",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
  SLAInvokedIdName = "slainvokedidname",
  SLAName = "slaname",
  StageId = "stageid",
  StateCode = "statecode",
  StatusCode = "statuscode",
  StockExchange = "stockexchange",
  TeamsFollowed = "teamsfollowed",
  Telephone1 = "telephone1",
  Telephone2 = "telephone2",
  Telephone3 = "telephone3",
  TerritoryCode = "territorycode",
  TerritoryId = "territoryid",
  TerritoryIdName = "territoryidname",
  TickerSymbol = "tickersymbol",
  TimeSpentByMeOnEmailAndMeetings = "timespentbymeonemailandmeetings",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
  WebSiteURL = "websiteurl",
  YomiName = "yominame",
}
// Early Bound Interface
export interface Account extends IEntity {
  /*
  Category account_account_accountcategorycode Select a category to indicate whether the customer account is standard or preferred.
  */
  accountcategorycode?: import("../enums/account_account_accountcategorycode").account_account_accountcategorycode | null;
  /*
  Classification account_account_accountclassificationcode Select a classification code to indicate the potential value of the customer account based on the projected return on investment, cooperation level, sales cycle length or other criteria.
  */
  accountclassificationcode?: import("../enums/account_account_accountclassificationcode").account_account_accountclassificationcode | null;
  /*
  Account UniqueidentifierType Unique identifier of the account.
  */
  accountid?: import("dataverse-ify").Guid | null;
  /*
  Account Number StringType Type an ID number or code for the account to quickly search and identify the account in system views.
  */
  accountnumber?: string | null;
  /*
  Account Rating account_account_accountratingcode Select a rating to indicate the value of the customer account.
  */
  accountratingcode?: import("../enums/account_account_accountratingcode").account_account_accountratingcode | null;
  /*
  Address 1: ID UniqueidentifierType Unique identifier for address 1.
  */
  address1_addressid?: import("dataverse-ify").Guid | null;
  /*
  Address 1: Address Type account_account_address1_addresstypecode Select the primary address type.
  */
  address1_addresstypecode?: import("../enums/account_account_address1_addresstypecode").account_account_address1_addresstypecode | null;
  /*
  Address 1: City StringType Type the city for the primary address.
  */
  address1_city?: string | null;
  /*
  Address 1 MemoType Shows the complete primary address.
  */
  address1_composite?: string | null;
  /*
  Address 1: Country/Region StringType Type the country or region for the primary address.
  */
  address1_country?: string | null;
  /*
  Address 1: County StringType Type the county for the primary address.
  */
  address1_county?: string | null;
  /*
  Address 1: Fax StringType Type the fax number associated with the primary address.
  */
  address1_fax?: string | null;
  /*
  Address 1: Freight Terms account_account_address1_freighttermscode Select the freight terms for the primary address to make sure shipping orders are processed correctly.
  */
  address1_freighttermscode?: import("../enums/account_account_address1_freighttermscode").account_account_address1_freighttermscode | null;
  /*
  Address 1: Latitude DoubleType Type the latitude value for the primary address for use in mapping and other applications.
  */
  address1_latitude?: number | null;
  /*
  Address 1: Street 1 StringType Type the first line of the primary address.
  */
  address1_line1?: string | null;
  /*
  Address 1: Street 2 StringType Type the second line of the primary address.
  */
  address1_line2?: string | null;
  /*
  Address 1: Street 3 StringType Type the third line of the primary address.
  */
  address1_line3?: string | null;
  /*
  Address 1: Longitude DoubleType Type the longitude value for the primary address for use in mapping and other applications.
  */
  address1_longitude?: number | null;
  /*
  Address 1: Name StringType Type a descriptive name for the primary address, such as Corporate Headquarters.
  */
  address1_name?: string | null;
  /*
  Address 1: ZIP/Postal Code StringType Type the ZIP Code or postal code for the primary address.
  */
  address1_postalcode?: string | null;
  /*
  Address 1: Post Office Box StringType Type the post office box number of the primary address.
  */
  address1_postofficebox?: string | null;
  /*
  Address 1: Primary Contact Name StringType Type the name of the main contact at the account's primary address.
  */
  address1_primarycontactname?: string | null;
  /*
  Address 1: Shipping Method account_account_address1_shippingmethodcode Select a shipping method for deliveries sent to this address.
  */
  address1_shippingmethodcode?: import("../enums/account_account_address1_shippingmethodcode").account_account_address1_shippingmethodcode | null;
  /*
  Address 1: State/Province StringType Type the state or province of the primary address.
  */
  address1_stateorprovince?: string | null;
  /*
  Address Phone StringType Type the main phone number associated with the primary address.
  */
  address1_telephone1?: string | null;
  /*
  Address 1: Telephone 2 StringType Type a second phone number associated with the primary address.
  */
  address1_telephone2?: string | null;
  /*
  Address 1: Telephone 3 StringType Type a third phone number associated with the primary address.
  */
  address1_telephone3?: string | null;
  /*
  Address 1: UPS Zone StringType Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  */
  address1_upszone?: string | null;
  /*
  Address 1: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  */
  address1_utcoffset?: number | null;
  /*
  Address 2: ID UniqueidentifierType Unique identifier for address 2.
  */
  address2_addressid?: import("dataverse-ify").Guid | null;
  /*
  Address 2: Address Type account_account_address2_addresstypecode Select the secondary address type.
  */
  address2_addresstypecode?: import("../enums/account_account_address2_addresstypecode").account_account_address2_addresstypecode | null;
  /*
  Address 2: City StringType Type the city for the secondary address.
  */
  address2_city?: string | null;
  /*
  Address 2 MemoType Shows the complete secondary address.
  */
  address2_composite?: string | null;
  /*
  Address 2: Country/Region StringType Type the country or region for the secondary address.
  */
  address2_country?: string | null;
  /*
  Address 2: County StringType Type the county for the secondary address.
  */
  address2_county?: string | null;
  /*
  Address 2: Fax StringType Type the fax number associated with the secondary address.
  */
  address2_fax?: string | null;
  /*
  Address 2: Freight Terms account_account_address2_freighttermscode Select the freight terms for the secondary address to make sure shipping orders are processed correctly.
  */
  address2_freighttermscode?: import("../enums/account_account_address2_freighttermscode").account_account_address2_freighttermscode | null;
  /*
  Address 2: Latitude DoubleType Type the latitude value for the secondary address for use in mapping and other applications.
  */
  address2_latitude?: number | null;
  /*
  Address 2: Street 1 StringType Type the first line of the secondary address.
  */
  address2_line1?: string | null;
  /*
  Address 2: Street 2 StringType Type the second line of the secondary address.
  */
  address2_line2?: string | null;
  /*
  Address 2: Street 3 StringType Type the third line of the secondary address.
  */
  address2_line3?: string | null;
  /*
  Address 2: Longitude DoubleType Type the longitude value for the secondary address for use in mapping and other applications.
  */
  address2_longitude?: number | null;
  /*
  Address 2: Name StringType Type a descriptive name for the secondary address, such as Corporate Headquarters.
  */
  address2_name?: string | null;
  /*
  Address 2: ZIP/Postal Code StringType Type the ZIP Code or postal code for the secondary address.
  */
  address2_postalcode?: string | null;
  /*
  Address 2: Post Office Box StringType Type the post office box number of the secondary address.
  */
  address2_postofficebox?: string | null;
  /*
  Address 2: Primary Contact Name StringType Type the name of the main contact at the account's secondary address.
  */
  address2_primarycontactname?: string | null;
  /*
  Address 2: Shipping Method account_account_address2_shippingmethodcode Select a shipping method for deliveries sent to this address.
  */
  address2_shippingmethodcode?: import("../enums/account_account_address2_shippingmethodcode").account_account_address2_shippingmethodcode | null;
  /*
  Address 2: State/Province StringType Type the state or province of the secondary address.
  */
  address2_stateorprovince?: string | null;
  /*
  Address 2: Telephone 1 StringType Type the main phone number associated with the secondary address.
  */
  address2_telephone1?: string | null;
  /*
  Address 2: Telephone 2 StringType Type a second phone number associated with the secondary address.
  */
  address2_telephone2?: string | null;
  /*
  Address 2: Telephone 3 StringType Type a third phone number associated with the secondary address.
  */
  address2_telephone3?: string | null;
  /*
  Address 2: UPS Zone StringType Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  */
  address2_upszone?: string | null;
  /*
  Address 2: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  */
  address2_utcoffset?: number | null;
  /*
  Aging 30 MoneyType For system use only.
  */
  aging30?: number | null;
  /*
  Aging 30 (Base) MoneyType The base currency equivalent of the aging 30 field.
  */
  aging30_base?: number | null;
  /*
  Aging 60 MoneyType For system use only.
  */
  aging60?: number | null;
  /*
  Aging 60 (Base) MoneyType The base currency equivalent of the aging 60 field.
  */
  aging60_base?: number | null;
  /*
  Aging 90 MoneyType For system use only.
  */
  aging90?: number | null;
  /*
  Aging 90 (Base) MoneyType The base currency equivalent of the aging 90 field.
  */
  aging90_base?: number | null;
  /*
  Area LookupType
  */
  bis_area?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  bis_areaname?: string | null;
  /*
  BAAM BooleanType
  */
  bis_baam?: boolean | null;
  /*
  Backup Relationship Manager LookupType
  */
  bis_backuprelationshipmanager?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  bis_backuprelationshipmanagername?: string | null;
  /*
   StringType
  */
  bis_backuprelationshipmanageryominame?: string | null;
  /*
  BIS Office / Phone StringType
  */
  bis_bisofficephone?: string | null;
  /*
  Bloomberg BooleanType
  */
  bis_bloomberg?: boolean | null;
  /*
  Board Member BooleanType
  */
  bis_boardmember?: boolean | null;
  /*
  CIS ID IntegerType
  */
  bis_cisid?: number | null;
  /*
  Compliance Notes MemoType
  */
  bis_compliancenotes?: string | null;
  /*
  Creation Source bis_creationsource
  */
  bis_creationsource?: import("../enums/bis_creationsource").bis_creationsource | null;
  /*
  CRM ID StringType
  */
  bis_crmid?: string | null;
  /*
  Dealing StringType
  */
  bis_dealing?: string | null;
  /*
  Domain LookupType
  */
  bis_domain?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  bis_domainname?: string | null;
  /*
  DWH-ID IntegerType
  */
  bis_dwhid?: number | null;
  /*
  eBIS BooleanType
  */
  bis_ebis?: boolean | null;
  /*
  EMS ID IntegerType
  */
  bis_emsid?: number | null;
  /*
  Fax (Banking) StringType
  */
  bis_faxbanking?: string | null;
  /*
  FINDUR Code (Main) StringType
  */
  bis_findurcodemain?: string | null;
  /*
  Headquarter BooleanType
  */
  bis_headquarter?: boolean | null;
  /*
  Institution Name (Abbr) StringType
  */
  bis_institutionnameabbr?: string | null;
  /*
  Institution Name (Local) StringType
  */
  bis_institutionnamelocal?: string | null;
  /*
  Institution Type [Required] LookupType
  */
  bis_institutiontype?: import("dataverse-ify").EntityReference;
  /*
   StringType
  */
  bis_institutiontypename?: string | null;
  /*
  International Print Address StringType
  */
  bis_internationalprintaddress?: string | null;
  /*
  ISR 1+ details MemoType
  */
  bis_isr1plusdetails?: string | null;
  /*
  ISR Last Evaluation Date DateTimeType DateOnly:UserLocal
  */
  bis_isrlastevaluationdate?: Date | null;
  /*
  ISR Status bis_isrstatus
  */
  bis_isrstatus?: import("../enums/bis_isrstatus").bis_isrstatus | null;
  /*
  Note MemoType
  */
  bis_note?: string | null;
  /*
  Operational Hours StringType
  */
  bis_operationalhours?: string | null;
  /*
  Party Function bis_institutionpartyfunction
  */
  bis_partyfunction?: import("../enums/bis_institutionpartyfunction").bis_institutionpartyfunction | null;
  /*
  Relationship Manager 1 LookupType
  */
  bis_relationshipmanager1?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  bis_relationshipmanager1name?: string | null;
  /*
   StringType
  */
  bis_relationshipmanager1yominame?: string | null;
  /*
  Relationship Manager 2 LookupType
  */
  bis_relationshipmanager2?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  bis_relationshipmanager2name?: string | null;
  /*
   StringType
  */
  bis_relationshipmanager2yominame?: string | null;
  /*
  Reuters BooleanType
  */
  bis_reuters?: boolean | null;
  /*
  SAL BooleanType
  */
  bis_sal?: boolean | null;
  /*
  SANC BooleanType
  */
  bis_sanc?: boolean | null;
  /*
  Shareholder BooleanType
  */
  bis_shareholder?: boolean | null;
  /*
  SWIFT Code (main) StringType
  */
  bis_swiftcode?: string | null;
  /*
  test choice BooleanType
  */
  bis_testchoice?: boolean | null;
  /*
  Twitter StringType
  */
  bis_twitter?: string | null;
  /*
  Business Type account_account_businesstypecode Select the legal designation or other business type of the account for contracts or reporting purposes.
  */
  businesstypecode?: import("../enums/account_account_businesstypecode").account_account_businesstypecode | null;
  /*
  Created By LookupType Shows who created the record.
  */
  createdby?: import("dataverse-ify").EntityReference | null;
  /*
  Created By (External Party) LookupType Shows the external party who created the record.
  */
  createdbyexternalparty?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  createdbyexternalpartyname?: string | null;
  /*
   StringType
  */
  createdbyexternalpartyyominame?: string | null;
  /*
   StringType
  */
  createdbyname?: string | null;
  /*
   StringType
  */
  createdbyyominame?: string | null;
  /*
  Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  */
  createdon?: Date | null;
  /*
  Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  */
  createdonbehalfby?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  createdonbehalfbyname?: string | null;
  /*
   StringType
  */
  createdonbehalfbyyominame?: string | null;
  /*
  Credit Limit MoneyType Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer.
  */
  creditlimit?: number | null;
  /*
  Credit Limit (Base) MoneyType Shows the credit limit converted to the system's default base currency for reporting purposes.
  */
  creditlimit_base?: number | null;
  /*
  Credit Hold BooleanType Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer.
  */
  creditonhold?: boolean | null;
  /*
  Customer Size account_account_customersizecode Select the size category or range of the account for segmentation and reporting purposes.
  */
  customersizecode?: import("../enums/account_account_customersizecode").account_account_customersizecode | null;
  /*
  Relationship Type account_account_customertypecode Select the category that best describes the relationship between the account and your organization.
  */
  customertypecode?: import("../enums/account_account_customertypecode").account_account_customertypecode | null;
  /*
  Price List LookupType Choose the default price list associated with the account to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders.
  */
  defaultpricelevelid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  defaultpricelevelidname?: string | null;
  /*
  Description MemoType Type additional information to describe the account, such as an excerpt from the company's website.
  */
  description?: string | null;
  /*
  Do not allow Bulk Emails BooleanType Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email.
  */
  donotbulkemail?: boolean | null;
  /*
  Do not allow Bulk Mails BooleanType Select whether the account allows bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but will be excluded from the postal mail.
  */
  donotbulkpostalmail?: boolean | null;
  /*
  Do not allow Emails BooleanType Select whether the account allows direct email sent from Microsoft Dynamics 365.
  */
  donotemail?: boolean | null;
  /*
  Do not allow Faxes BooleanType Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns.
  */
  donotfax?: boolean | null;
  /*
  Do not allow Phone Calls BooleanType Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns.
  */
  donotphone?: boolean | null;
  /*
  Do not allow Mails BooleanType Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns.
  */
  donotpostalmail?: boolean | null;
  /*
  Send Marketing Materials BooleanType Select whether the account accepts marketing materials, such as brochures or catalogs.
  */
  donotsendmm?: boolean | null;
  /*
  Email StringType Type the primary email address for the account.
  */
  emailaddress1?: string | null;
  /*
  Email Address 2 StringType Type the secondary email address for the account.
  */
  emailaddress2?: string | null;
  /*
  Email Address 3 StringType Type an alternate email address for the account.
  */
  emailaddress3?: string | null;
  /*
  Default Image ImageType Shows the default image for the record.
  */
  entityimage?: string | null;
  /*
   BigIntType
  */
  entityimage_timestamp?: number | null;
  /*
   StringType
  */
  entityimage_url?: string | null;
  /*
  Entity Image Id UniqueidentifierType For internal use only.
  */
  entityimageid?: import("dataverse-ify").Guid | null;
  /*
  Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  */
  exchangerate?: number | null;
  /*
  Fax StringType Type the fax number for the account.
  */
  fax?: string | null;
  /*
  Follow Email Activity BooleanType Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account.
  */
  followemail?: boolean | null;
  /*
  FTP Site StringType Type the URL for the account's FTP site to enable users to access data and share documents.
  */
  ftpsiteurl?: string | null;
  /*
  Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  */
  importsequencenumber?: number | null;
  /*
  Industry account_account_industrycode Select the account's primary industry for use in marketing segmentation and demographic analysis.
  */
  industrycode?: import("../enums/account_account_industrycode").account_account_industrycode | null;
  /*
   BooleanType
  */
  isprivate?: boolean | null;
  /*
  Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  */
  lastonholdtime?: Date | null;
  /*
  Last Date Included in Campaign DateTimeType Shows the date when the account was last included in a marketing campaign or quick campaign. DateOnly:UserLocal
  */
  lastusedincampaign?: Date | null;
  /*
  Market Capitalization MoneyType Type the market capitalization of the account to identify the company's equity, used as an indicator in financial performance analysis.
  */
  marketcap?: number | null;
  /*
  Market Capitalization (Base) MoneyType Shows the market capitalization converted to the system's default base currency.
  */
  marketcap_base?: number | null;
  /*
  Marketing Only BooleanType Whether is only for marketing
  */
  marketingonly?: boolean | null;
  /*
   StringType
  */
  masteraccountidname?: string | null;
  /*
   StringType
  */
  masteraccountidyominame?: string | null;
  /*
  Master ID LookupType Shows the master account that the account was merged with.
  */
  masterid?: import("dataverse-ify").EntityReference | null;
  /*
  Merged BooleanType Shows whether the account has been merged with another account.
  */
  merged?: boolean | null;
  /*
  Modified By LookupType Shows who last updated the record.
  */
  modifiedby?: import("dataverse-ify").EntityReference | null;
  /*
  Modified By (External Party) LookupType Shows the external party who modified the record.
  */
  modifiedbyexternalparty?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  modifiedbyexternalpartyname?: string | null;
  /*
   StringType
  */
  modifiedbyexternalpartyyominame?: string | null;
  /*
   StringType
  */
  modifiedbyname?: string | null;
  /*
   StringType
  */
  modifiedbyyominame?: string | null;
  /*
  Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  */
  modifiedon?: Date | null;
  /*
  Modified By (Delegate) LookupType Shows who created the record on behalf of another user.
  */
  modifiedonbehalfby?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  modifiedonbehalfbyname?: string | null;
  /*
   StringType
  */
  modifiedonbehalfbyyominame?: string | null;
  /*
  GDPR Optout BooleanType Describes whether account is opted out or not
  */
  msdyn_gdproptout?: boolean | null;
  /*
  Sales Acceleration Insights ID LookupType Sales Acceleration Insights ID
  */
  msdyn_salesaccelerationinsightid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  msdyn_salesaccelerationinsightidname?: string | null;
  /*
  Segment Id LookupType Unique identifier for Segment associated with account.
  */
  msdyn_segmentid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  msdyn_segmentidname?: string | null;
  /*
  Insights StringType
  */
  msdyncrm_insights_placeholder?: string | null;
  /*
  Hotel group msevtmgt_nooryes Indicates whether this account belongs to hotel group
  */
  msevtmgt_hotelgroup?: import("../enums/msevtmgt_nooryes").msevtmgt_nooryes | null;
  /*
  Rental car provider msevtmgt_nooryes
  */
  msevtmgt_rentalcarprovider?: import("../enums/msevtmgt_nooryes").msevtmgt_nooryes | null;
  /*
  Institution Name [Required] StringType Type the company or business name.
  */
  name?: string;
  /*
  Number of Employees IntegerType Type the number of employees that work at the account for use in marketing segmentation and demographic analysis.
  */
  numberofemployees?: number | null;
  /*
  On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  */
  onholdtime?: number | null;
  /*
  Open Deals IntegerType Number of open opportunities against an account and its child accounts.
  */
  opendeals?: number | null;
  /*
  Open Deals (Last Updated On) DateTimeType Last Updated time of rollup field Open Deals. DateAndTime:UserLocal
  */
  opendeals_date?: Date | null;
  /*
  Open Deals (State) IntegerType State of rollup field Open Deals.
  */
  opendeals_state?: number | null;
  /*
  Open Revenue MoneyType Sum of open revenue against an account and its child accounts.
  */
  openrevenue?: number | null;
  /*
  Open Revenue (Base) MoneyType Value of the Open Revenue in base currency.
  */
  openrevenue_base?: number | null;
  /*
  Open Revenue (Last Updated On) DateTimeType Last Updated time of rollup field Open Revenue. DateAndTime:UserLocal
  */
  openrevenue_date?: Date | null;
  /*
  Open Revenue (State) IntegerType State of rollup field Open Revenue.
  */
  openrevenue_state?: number | null;
  /*
  Originating Lead LookupType Shows the lead that the account was created from if the account was created by converting a lead in Microsoft Dynamics 365. This is used to relate the account to data on the originating lead for use in reporting and analytics.
  */
  originatingleadid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  originatingleadidname?: string | null;
  /*
   StringType
  */
  originatingleadidyominame?: string | null;
  /*
  Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  */
  overriddencreatedon?: Date | null;
  /*
  Owner OwnerType Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
  */
  ownerid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  owneridname?: string | null;
  /*
   EntityNameType
  */
  owneridtype?: string | null;
  /*
   StringType
  */
  owneridyominame?: string | null;
  /*
  Ownership account_account_ownershipcode Select the account's ownership structure, such as public or private.
  */
  ownershipcode?: import("../enums/account_account_ownershipcode").account_account_ownershipcode | null;
  /*
  Owning Business Unit LookupType Shows the business unit that the record owner belongs to.
  */
  owningbusinessunit?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  owningbusinessunitname?: string | null;
  /*
  Owning Team LookupType Unique identifier of the team who owns the account.
  */
  owningteam?: import("dataverse-ify").EntityReference | null;
  /*
  Owning User LookupType Unique identifier of the user who owns the account.
  */
  owninguser?: import("dataverse-ify").EntityReference | null;
  /*
  Parent Account LookupType Choose the parent account associated with this account to show parent and child businesses in reporting and analytics.
  */
  parentaccountid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  parentaccountidname?: string | null;
  /*
   StringType
  */
  parentaccountidyominame?: string | null;
  /*
  Participates in Workflow BooleanType For system use only. Legacy Microsoft Dynamics CRM 3.0 workflow data.
  */
  participatesinworkflow?: boolean | null;
  /*
  Payment Terms account_account_paymenttermscode Select the payment terms to indicate when the customer needs to pay the total amount.
  */
  paymenttermscode?: import("../enums/account_account_paymenttermscode").account_account_paymenttermscode | null;
  /*
  Preferred Day account_account_preferredappointmentdaycode Select the preferred day of the week for service appointments.
  */
  preferredappointmentdaycode?: import("../enums/account_account_preferredappointmentdaycode").account_account_preferredappointmentdaycode | null;
  /*
  Preferred Time account_account_preferredappointmenttimecode Select the preferred time of day for service appointments.
  */
  preferredappointmenttimecode?: import("../enums/account_account_preferredappointmenttimecode").account_account_preferredappointmenttimecode | null;
  /*
  Preferred Method of Contact account_account_preferredcontactmethodcode Select the preferred method of contact.
  */
  preferredcontactmethodcode?: import("../enums/account_account_preferredcontactmethodcode").account_account_preferredcontactmethodcode | null;
  /*
  Preferred Facility/Equipment LookupType Choose the account's preferred service facility or equipment to make sure services are scheduled correctly for the customer.
  */
  preferredequipmentid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  preferredequipmentidname?: string | null;
  /*
  Preferred Service LookupType Choose the account's preferred service for reference when you schedule service activities.
  */
  preferredserviceid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  preferredserviceidname?: string | null;
  /*
  Preferred User LookupType Choose the preferred service representative for reference when you schedule service activities for the account.
  */
  preferredsystemuserid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  preferredsystemuseridname?: string | null;
  /*
   StringType
  */
  preferredsystemuseridyominame?: string | null;
  /*
  Primary Contact LookupType Choose the primary contact for the account to provide quick access to contact details.
  */
  primarycontactid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  primarycontactidname?: string | null;
  /*
   StringType
  */
  primarycontactidyominame?: string | null;
  /*
  Primary Satori ID StringType Primary Satori ID for Account
  */
  primarysatoriid?: string | null;
  /*
  Primary Twitter ID StringType Primary Twitter ID for Account
  */
  primarytwitterid?: string | null;
  /*
  Process UniqueidentifierType Shows the ID of the process.
  */
  processid?: import("dataverse-ify").Guid | null;
  /*
  Annual Revenue MoneyType Type the annual revenue for the account, used as an indicator in financial performance analysis.
  */
  revenue?: number | null;
  /*
  Annual Revenue (Base) MoneyType Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
  */
  revenue_base?: number | null;
  /*
  Shares Outstanding IntegerType Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis.
  */
  sharesoutstanding?: number | null;
  /*
  Shipping Method account_account_shippingmethodcode Select a shipping method for deliveries sent to the account's address to designate the preferred carrier or other delivery option.
  */
  shippingmethodcode?: import("../enums/account_account_shippingmethodcode").account_account_shippingmethodcode | null;
  /*
  SIC Code StringType Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis.
  */
  sic?: string | null;
  /*
  SLA LookupType Choose the service level agreement (SLA) that you want to apply to the Account record.
  */
  slaid?: import("dataverse-ify").EntityReference | null;
  /*
  Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  */
  slainvokedid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  slainvokedidname?: string | null;
  /*
   StringType
  */
  slaname?: string | null;
  /*
  (Deprecated) Process Stage UniqueidentifierType Shows the ID of the stage.
  */
  stageid?: import("dataverse-ify").Guid | null;
  /*
  Status account_account_statecode Shows whether the account is active or inactive. Inactive accounts are read-only and can't be edited unless they are reactivated.
  */
  statecode?: import("../enums/account_account_statecode").account_account_statecode | null;
  /*
  Status Reason account_account_statuscode Select the account's status.
  */
  statuscode?: import("../enums/account_account_statuscode").account_account_statuscode | null;
  /*
  Stock Exchange StringType Type the stock exchange at which the account is listed to track their stock and financial performance of the company.
  */
  stockexchange?: string | null;
  /*
  TeamsFollowed IntegerType Number of users or conversations followed the record
  */
  teamsfollowed?: number | null;
  /*
  Main Phone StringType Type the main phone number for this account.
  */
  telephone1?: string | null;
  /*
  Other Phone StringType Type a second phone number for this account.
  */
  telephone2?: string | null;
  /*
  Telephone 3 StringType Type a third phone number for this account.
  */
  telephone3?: string | null;
  /*
  Territory Code account_account_territorycode Select a region or territory for the account for use in segmentation and analysis.
  */
  territorycode?: import("../enums/account_account_territorycode").account_account_territorycode | null;
  /*
  Territory LookupType Choose the sales region or territory for the account to make sure the account is assigned to the correct representative and for use in segmentation and analysis.
  */
  territoryid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  territoryidname?: string | null;
  /*
  Ticker Symbol StringType Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money.
  */
  tickersymbol?: string | null;
  /*
  Time Spent by me StringType Total time spent for emails (read and write) and meetings by me in relation to account record.
  */
  timespentbymeonemailandmeetings?: string | null;
  /*
  Time Zone Rule Version Number IntegerType For internal use only.
  */
  timezoneruleversionnumber?: number | null;
  /*
  Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  */
  transactioncurrencyid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  transactioncurrencyidname?: string | null;
  /*
  (Deprecated) Traversed Path StringType For internal use only.
  */
  traversedpath?: string | null;
  /*
  UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  */
  utcconversiontimezonecode?: number | null;
  /*
  Version Number BigIntType Version number of the account.
  */
  versionnumber?: number | null;
  /*
  Website StringType Type the account's website URL to get quick details about the company profile.
  */
  websiteurl?: string | null;
  /*
  Yomi Account Name StringType Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications.
  */
  yominame?: string | null;
}
