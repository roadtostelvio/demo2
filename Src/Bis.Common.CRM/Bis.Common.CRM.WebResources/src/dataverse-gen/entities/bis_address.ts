/* eslint-disable*/
import { IEntity } from "dataverse-ify";

// Entity bis_address FormContext
export interface bis_addressFormContext extends Xrm.FormContext {
    getAttribute(): Xrm.Attributes.Attribute[];
    getAttribute<T extends Xrm.Attributes.Attribute>(attributeName: string): T;
    getAttribute(attributeName: string): Xrm.Attributes.Attribute;
    getAttribute(index: number): Xrm.Attributes.Attribute;

    getControl(): Xrm.Controls.Control[];
    getControl<T extends Xrm.Controls.Control>(controlName: string): T;
    getControl(controlName: string): Xrm.Controls.Control;
    getControl(index: number): Xrm.Controls.Control;

    /*
    
    */
    getAttribute(name: 'bis_addressline1'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'bis_addressline1'): Xrm.Controls.StringControl;
    /*
    
    */
    getAttribute(name: 'bis_addressline2'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'bis_addressline2'): Xrm.Controls.StringControl;
    /*
    The name of the custom entity.
    */
    getAttribute(name: 'bis_name'): Xrm.Attributes.StringAttribute;
    /*
    The name of the custom entity.
    */
    getControl(name: 'bis_name'): Xrm.Controls.StringControl;
    /*
    
    */
    getAttribute(name: 'bis_zipcode'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'bis_zipcode'): Xrm.Controls.StringControl;
    /*
    Date and time when the record was created.
    */
    getAttribute(name: 'createdon'): Xrm.Attributes.DateAttribute;
    /*
    Date and time when the record was created.
    */
    getControl(name: 'createdon'): Xrm.Controls.DateControl;
    /*
    Sequence number of the import that created this record.
    */
    getAttribute(name: 'importsequencenumber'): Xrm.Attributes.NumberAttribute;
    /*
    Sequence number of the import that created this record.
    */
    getControl(name: 'importsequencenumber'): Xrm.Controls.NumberControl;
    /*
    Date and time when the record was modified.
    */
    getAttribute(name: 'modifiedon'): Xrm.Attributes.DateAttribute;
    /*
    Date and time when the record was modified.
    */
    getControl(name: 'modifiedon'): Xrm.Controls.DateControl;
    /*
    Date and time that the record was migrated.
    */
    getAttribute(name: 'overriddencreatedon'): Xrm.Attributes.DateAttribute;
    /*
    Date and time that the record was migrated.
    */
    getControl(name: 'overriddencreatedon'): Xrm.Controls.DateControl;
    /*
    For internal use only.
    */
    getAttribute(name: 'timezoneruleversionnumber'): Xrm.Attributes.NumberAttribute;
    /*
    For internal use only.
    */
    getControl(name: 'timezoneruleversionnumber'): Xrm.Controls.NumberControl;
    /*
    Time zone code that was in use when the record was created.
    */
    getAttribute(name: 'utcconversiontimezonecode'): Xrm.Attributes.NumberAttribute;
    /*
    Time zone code that was in use when the record was created.
    */
    getControl(name: 'utcconversiontimezonecode'): Xrm.Controls.NumberControl;
}
// Entity bis_address
export const bis_addressMetadata = {
  typeName: "mscrm.bis_address",
  logicalName: "bis_address",
  collectionName: "bis_addresses",
  primaryIdAttribute: "bis_addressid",
  attributeTypes: {
    // Numeric Types
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    bis_area: ["mscrm.bis_area"],
    bis_city: ["mscrm.bis_city"],
    bis_country: ["mscrm.bis_country"],
    bis_state: ["mscrm.bis_state"],
    createdby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    ownerid: ["mscrm.principal"],
    owningbusinessunit: ["mscrm.businessunit"],
    owningteam: ["mscrm.team"],
    owninguser: ["mscrm.systemuser"],
  },
};

// Attribute constants
export const enum bis_addressAttributes {
  bis_addressId = "bis_addressid",
  bis_addressline1 = "bis_addressline1",
  bis_addressline2 = "bis_addressline2",
  bis_area = "bis_area",
  bis_areaName = "bis_areaname",
  bis_city = "bis_city",
  bis_cityName = "bis_cityname",
  bis_country = "bis_country",
  bis_countryName = "bis_countryname",
  bis_name = "bis_name",
  bis_state = "bis_state",
  bis_stateName = "bis_statename",
  bis_zipcode = "bis_zipcode",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  ImportSequenceNumber = "importsequencenumber",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  statecode = "statecode",
  statuscode = "statuscode",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}
// Early Bound Interface
export interface bis_address extends IEntity {
  /*
  Address UniqueidentifierType Unique identifier for entity instances
  */
  bis_addressid?: import("dataverse-ify").Guid | null;
  /*
  Address Line 1 StringType
  */
  bis_addressline1?: string | null;
  /*
  Address Line 2 StringType
  */
  bis_addressline2?: string | null;
  /*
  Area LookupType
  */
  bis_area?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  bis_areaname?: string | null;
  /*
  City LookupType
  */
  bis_city?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  bis_cityname?: string | null;
  /*
  Country LookupType
  */
  bis_country?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  bis_countryname?: string | null;
  /*
  International Print Address [Required] StringType The name of the custom entity.
  */
  bis_name?: string;
  /*
  State LookupType
  */
  bis_state?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  bis_statename?: string | null;
  /*
  ZIP Code StringType
  */
  bis_zipcode?: string | null;
  /*
  Created By LookupType Unique identifier of the user who created the record.
  */
  createdby?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  createdbyname?: string | null;
  /*
   StringType
  */
  createdbyyominame?: string | null;
  /*
  Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  */
  createdon?: Date | null;
  /*
  Created By (Delegate) LookupType Unique identifier of the delegate user who created the record.
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
  Import Sequence Number IntegerType Sequence number of the import that created this record.
  */
  importsequencenumber?: number | null;
  /*
  Modified By LookupType Unique identifier of the user who modified the record.
  */
  modifiedby?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  modifiedbyname?: string | null;
  /*
   StringType
  */
  modifiedbyyominame?: string | null;
  /*
  Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  */
  modifiedon?: Date | null;
  /*
  Modified By (Delegate) LookupType Unique identifier of the delegate user who modified the record.
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
  Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  */
  overriddencreatedon?: Date | null;
  /*
  Owner OwnerType Owner Id
  */
  ownerid?: import("dataverse-ify").EntityReference | null;
  /*
   StringType Name of the owner
  */
  owneridname?: string | null;
  /*
   EntityNameType Owner Id Type
  */
  owneridtype?: string | null;
  /*
   StringType Yomi name of the owner
  */
  owneridyominame?: string | null;
  /*
  Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  */
  owningbusinessunit?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  owningbusinessunitname?: string | null;
  /*
  Owning Team LookupType Unique identifier for the team that owns the record.
  */
  owningteam?: import("dataverse-ify").EntityReference | null;
  /*
  Owning User LookupType Unique identifier for the user that owns the record.
  */
  owninguser?: import("dataverse-ify").EntityReference | null;
  /*
  Status bis_address_bis_address_statecode Status of the Address
  */
  statecode?: import("../enums/bis_address_bis_address_statecode").bis_address_bis_address_statecode | null;
  /*
  Status Reason bis_address_bis_address_statuscode Reason for the status of the Address
  */
  statuscode?: import("../enums/bis_address_bis_address_statuscode").bis_address_bis_address_statuscode | null;
  /*
  Time Zone Rule Version Number IntegerType For internal use only.
  */
  timezoneruleversionnumber?: number | null;
  /*
  UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  */
  utcconversiontimezonecode?: number | null;
  /*
  Version Number BigIntType Version Number
  */
  versionnumber?: number | null;
}
