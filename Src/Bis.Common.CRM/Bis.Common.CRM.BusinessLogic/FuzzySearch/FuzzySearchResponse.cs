using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bis.Common.CRM.BusinessLogic
{
    public class Document
    {
        [JsonProperty("@search.objectid")]
        public string objectId { get; set; }

        [JsonProperty("@search.entityname")]
        public string entityName { get; set; }
        public string ownerid { get; set; }
        public string owneridname { get; set; }

        [JsonProperty("@search.ownerid.logicalname")]
        public string searchowneridlogicalname { get; set; }

        [JsonProperty("@search.objecttypecode")]
        public int searchobjecttypecode { get; set; }
        public object entityimage_url { get; set; }
        public string createdon { get; set; }
        public string modifiedon { get; set; }

        [JsonProperty("@search.secondaryfield.logicalname")]
        public string searchsecondaryfieldlogicalname { get; set; }
        public string telephone1 { get; set; }
        public string name { get; set; }

        [JsonProperty("@search.primaryfield.logicalname")]
        public string searchprimaryfieldlogicalname { get; set; }

        [JsonProperty("@search.entitycollection.displayname")]
        public string searchentitycollectiondisplayname { get; set; }

        [JsonProperty("@search.secondaryfield.displayname")]
        public string searchsecondaryfielddisplayname { get; set; }
    }

    public class FuzzySearchResponse
    {
        public List<Response> value { get; set; }
        public object querycontext { get; set; }
    }

    public class Response
    {
        public string text { get; set; }
        public Document document { get; set; }
    }



}
