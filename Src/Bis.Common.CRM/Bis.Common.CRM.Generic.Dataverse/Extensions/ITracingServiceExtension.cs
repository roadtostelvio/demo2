using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bis.Common.CRM.Generic.Dataverse.Extensions
{
    public static class ITracingServiceExtension
    {
        public static void TraceEntity(this ITracingService tracingService, Entity entity)
        {

            if (entity == null || tracingService == null)
            {
                if (tracingService != null)
                {
                    tracingService.Trace("TraceEntity::Entity is null");
                }
                return;
            }


            tracingService.Trace("");
            tracingService.Trace($"Attribute values of the entity: {entity.Id} - {entity.LogicalName}");

            foreach (var item in entity.Attributes)
            {
                if (item.Value != null && item.Value is OptionSetValue)
                {
                    try
                    {
                        tracingService.Trace($"Attribute {item.Key} - {((OptionSetValue)item.Value).Value}");
                    }
                    catch (Exception)
                    {
                    }

                }
                else if (item.Value != null && item.Value is OptionSetValueCollection)
                {
                    try
                    {
                        tracingService.Trace($"Attribute {item.Key}");
                        foreach (var item2 in ((OptionSetValueCollection)item.Value))
                        {
                            tracingService.Trace($"   {item2.Value}");
                        }
                    }
                    catch (Exception)
                    {
                    }

                }
                else if (item.Value != null && item.Value is EntityCollection)
                {
                    try
                    {
                        tracingService.Trace($"Attribute {item.Key}");
                        foreach (var item2 in (((EntityCollection)item.Value)).Entities)
                        {
                            tracingService.Trace($"   {item2.LogicalName}, {item2.Id}");
                        }
                    }
                    catch (Exception)
                    {
                    }

                }
                else if (item.Value != null && item.Value is EntityReference)
                {
                    try
                    {
                        tracingService.Trace($"Attribute {item.Key} - {((EntityReference)item.Value).LogicalName} {((EntityReference)item.Value).Id} {((EntityReference)item.Value).Name}");
                    }
                    catch (Exception)
                    {
                    }

                }
                else if (item.Value != null && item.Value is Money)
                {
                    try
                    {
                        tracingService.Trace($"Attribute {item.Key} - {((Money)item.Value).Value}");
                    }
                    catch (Exception)
                    {
                    }
                }
                else
                {
                    tracingService.Trace($"Attribute {item.Key} - {item.Value}");
                }
            }
        }

        public static void TraceEntityId(this ITracingService tracingSevice)
        {

        }
    }
}
