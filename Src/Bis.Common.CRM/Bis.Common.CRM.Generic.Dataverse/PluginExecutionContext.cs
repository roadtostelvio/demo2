using Bis.Common.CRM.ObjectModel;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bis.Common.CRM.Generic.Dataverse
{
    public sealed class PluginExecutionContext : BaseExecutionContext, IDisposable, ITracingService
    {
        public PluginExecutionContext(IServiceProvider serviceProvider)
        {
            ServiceProvider = serviceProvider;
            TracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            Context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            Service = new CrmServiceContext(serviceFactory.CreateOrganizationService(Context.InitiatingUserId), serviceProvider);
            AdminService = new CrmServiceContext(serviceFactory.CreateOrganizationService(null), serviceProvider);
            Init();
        }

        public IPluginExecutionContext PluginContext => Context as IPluginExecutionContext;


        public void Dispose()
        {
        }
    }
}
