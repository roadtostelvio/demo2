using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bis.Common.CRM.ObjectModel
{
    public partial class CrmServiceContext : Microsoft.Xrm.Sdk.Client.OrganizationServiceContext
    {
        public IOrganizationService OrganizationService { get; }
        private IServiceProvider ServiceProvider { get; }

        private ITracingService _tracingService = null;
        public ITracingService TracingService
        {
            get
            {
                if (_tracingService == null)
                {
                    _tracingService = (ITracingService)ServiceProvider.GetService(typeof(ITracingService));
                }

                return _tracingService;
            }
        }

        public CrmServiceContext(IOrganizationService service, IServiceProvider serviceProvider) : base(service)
        {
            OrganizationService = service;
            ServiceProvider = serviceProvider;
        }

        public CrmServiceContext(IOrganizationService service, ITracingService tracingService) : base(service)
        {
            OrganizationService = service;
            _tracingService = tracingService;
        }
    }
}
