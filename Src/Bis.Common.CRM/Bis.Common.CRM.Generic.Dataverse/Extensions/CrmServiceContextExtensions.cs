using Bis.Common.CRM.ObjectModel;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bis.Common.CRM.Generic.Dataverse.Extensions
{
    public static class CrmServiceContextExtensions
    {

        public static string GetSystemSettings(this CrmServiceContext serviceContext, string systemSettingsKey, bool acceptEmpty = true)
        {
            if (serviceContext == null) throw new ArgumentNullException("serviceContext");

            var settings = serviceContext.bis_systemsettingsSet.Where(x => x.bis_name == systemSettingsKey).FirstOrDefault();

            if (!acceptEmpty && (settings == null || (settings != null && string.IsNullOrWhiteSpace(settings.bis_value)))) throw new InvalidPluginExecutionException($"System settings key ({systemSettingsKey}) does not exists or value is empty!");

            return settings.bis_value;

        }

        public static T GetAttribute<T>(string attr, Entity e, Entity preImage = null)
        {
            if (e != null)
            {
                if (e.Attributes.ContainsKey(attr))
                {
                    return e.GetAttributeValue<T>(attr);
                }
            }

            if (preImage != null)
            {
                if (preImage.Attributes.ContainsKey(attr))
                {
                    return preImage.GetAttributeValue<T>(attr);
                }
            }

            return default(T);
        }
    }
}
