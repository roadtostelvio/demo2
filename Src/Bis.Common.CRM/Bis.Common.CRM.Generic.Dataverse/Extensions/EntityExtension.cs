using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bis.Common.CRM.Generic.Dataverse.Extensions
{
    public static class EntityExtension
    {
        public static T GetAttribute<T>(this Entity e, string attr, Entity preImage = null)
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

        public static Entity SetAttribute(this Entity entity, string attr, object value)
        {
            if (entity.Attributes.ContainsKey(attr))
            {
                entity.Attributes[attr] = value;
            }
            else
            {
                entity.Attributes.Add(attr, value);
            }

            return entity;
        }
    }
}
