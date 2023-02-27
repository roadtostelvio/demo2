using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bis.Common.CRM.Generic.Dataverse.Extensions
{
    public static class PluginExecutionContextExtensions
    {
        public static Entity GetPreImage(this PluginExecutionContext context)
        {
            Entity preImage = null;
            if (context.PluginContext.PreEntityImages.Count > 0)
            {
                context.Trace("PreEntityImage found!");
                var entityImage = context.PluginContext.PreEntityImages.FirstOrDefault();
                preImage = entityImage.Value;
            }
            else
            {
                context.Trace("PreEntityImage not found!");
            }

            return preImage;
        }

        public static Entity GetPostImage(this PluginExecutionContext context)
        {
            Entity postImage = null;
            if (context.PluginContext.PostEntityImages.Count > 0)
            {
                context.Trace("PostEntityImage found!");
                var entityImage = context.PluginContext.PostEntityImages.FirstOrDefault();
                postImage = entityImage.Value;
            }
            else
            {
                context.Trace("PostEntityImages not found!");
            }

            return postImage;
        }
    }
}
