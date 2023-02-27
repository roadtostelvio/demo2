/* eslint-disable*/
import { IEntity } from "dataverse-ify";

// Entity bis_validation FormContext
export interface bis_validationFormContext extends Xrm.FormContext {
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
    getAttribute(name: 'bis_duplicateexists'): Xrm.Attributes.BooleanAttribute;
    /*
    
    */
    getControl(name: 'bis_duplicateexists'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'bis_institutionname'): Xrm.Attributes.StringAttribute;
    /*
    
    */
    getControl(name: 'bis_institutionname'): Xrm.Controls.StringControl;
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
    getAttribute(name: 'bis_relatedentity'): Xrm.Attributes.OptionSetAttribute;
    /*
    
    */
    getControl(name: 'bis_relatedentity'): Xrm.Controls.OptionSetControl;
    /*
    
    */
    getAttribute(name: 'bis_relatedevent'): Xrm.Attributes.OptionSetAttribute;
    /*
    
    */
    getControl(name: 'bis_relatedevent'): Xrm.Controls.OptionSetControl;
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
// Entity bis_validation
export const bis_validationMetadata = {
  typeName: "mscrm.bis_validation",
  logicalName: "bis_validation",
  collectionName: "bis_validations",
  primaryIdAttribute: "bis_validationid",
  attributeTypes: {
    // Numeric Types
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    bis_relatedentity: "Optionset",
    bis_relatedevent: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    bis_institutiontype: ["mscrm.bis_institutiontype"],
    bis_relatedcontact: ["mscrm.contact"],
    bis_relatedinstitution: ["mscrm.account"],
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
export const enum bis_validationAttributes {
  bis_duplicateexists = "bis_duplicateexists",
  bis_institutionname = "bis_institutionname",
  bis_institutiontype = "bis_institutiontype",
  bis_institutiontypeName = "bis_institutiontypename",
  bis_name = "bis_name",
  bis_relatedcontact = "bis_relatedcontact",
  bis_relatedcontactName = "bis_relatedcontactname",
  bis_relatedcontactYomiName = "bis_relatedcontactyominame",
  bis_relatedentity = "bis_relatedentity",
  bis_relatedevent = "bis_relatedevent",
  bis_relatedinstitution = "bis_relatedinstitution",
  bis_relatedinstitutionName = "bis_relatedinstitutionname",
  bis_relatedinstitutionYomiName = "bis_relatedinstitutionyominame",
  bis_validationId = "bis_validationid",
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
export interface bis_validation extends IEntity {
  /*
  Duplicate Exists BooleanType
  */
  bis_duplicateexists?: boolean | null;
  /*
  Institution Name StringType
  */
  bis_institutionname?: string | null;
  /*
  Institution Type LookupType
  */
  bis_institutiontype?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  bis_institutiontypename?: string | null;
  /*
  ID [Required] StringType The name of the custom entity.
  */
  bis_name?: string;
  /*
  Related Contact LookupType
  */
  bis_relatedcontact?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  bis_relatedcontactname?: string | null;
  /*
   StringType
  */
  bis_relatedcontactyominame?: string | null;
  /*
  Related Entity bis_validationrelatedentity
  */
  bis_relatedentity?: import("../enums/bis_validationrelatedentity").bis_validationrelatedentity | null;
  /*
  Related Event bis_validationrelatedevent
  */
  bis_relatedevent?: import("../enums/bis_validationrelatedevent").bis_validationrelatedevent | null;
  /*
  Related Institution LookupType
  */
  bis_relatedinstitution?: import("dataverse-ify").EntityReference | null;
  /*
   StringType
  */
  bis_relatedinstitutionname?: string | null;
  /*
   StringType
  */
  bis_relatedinstitutionyominame?: string | null;
  /*
  Validation UniqueidentifierType Unique identifier for entity instances
  */
  bis_validationid?: import("dataverse-ify").Guid | null;
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
  Status bis_validation_bis_validation_statecode Status of the Validation
  */
  statecode?: import("../enums/bis_validation_bis_validation_statecode").bis_validation_bis_validation_statecode | null;
  /*
  Status Reason bis_validation_bis_validation_statuscode Reason for the status of the Validation
  */
  statuscode?: import("../enums/bis_validation_bis_validation_statuscode").bis_validation_bis_validation_statuscode | null;
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
