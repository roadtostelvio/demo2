using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Abstractions.Enums;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using FakeXrmEasy.Middleware.Pipeline;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bis.Common.CRM.Plugins.Test
{
    public class FakeXrmEasyTestsBase
    {
        protected readonly IXrmFakedContext _context;
        protected readonly IOrganizationServiceAsync2 _service;

        public FakeXrmEasyTestsBase()
        {
            _context = MiddlewareBuilder
                        .New()

                        .AddCrud()
                        .AddFakeMessageExecutors()
                        .AddPipelineSimulation(new PipelineOptions() { UsePluginStepAudit = true })

                        .UsePipelineSimulation()
                        .UseCrud()
                        .UseMessages()

                        .SetLicense(FakeXrmEasyLicense.Commercial)

                        .Build();

            _service = _context.GetAsyncOrganizationService2();
        }
    }
}
