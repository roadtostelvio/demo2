using Bis.Common.CRM.ObjectModel;
using FakeXrmEasy.Abstractions.Plugins.Enums;
using FakeXrmEasy.Pipeline;
using FakeXrmEasy.Plugins;
using FakeXrmEasy.Plugins.PluginSteps;
using Microsoft.Xrm.Sdk;
using System.Reflection;

namespace Bis.Common.CRM.Plugins.Test
{
    public class bis_city_test : FakeXrmEasyTestsBase
    {
        private readonly bis_city _city;
        private readonly bis_country _country;

        public bis_city_test()
        {
            _country = new bis_country()
            {
                Id = Guid.NewGuid(),
                bis_name = "Hungary"
            };

            _city = new bis_city()
            {
                Id = Guid.NewGuid(),
                bis_name = "Budapest",
                bis_country = new EntityReference(bis_country.EntityLogicalName, _country.Id),
                overriddencreatedon = DateTime.Now.AddDays(10)
            };
        }

        [Fact]
        public void pre_bis_city_update_test()
        {

            //_context.EnableProxyTypes(Assembly.GetExecutingAssembly());
            var pluginContext = _context.GetDefaultPluginContext();

            _context.RegisterPluginStep<pre_bis_city_update>(new PluginStepDefinition()
            {
                MessageName = "Update",
                EntityLogicalName = bis_city.EntityLogicalName,
                Mode = ProcessingStepMode.Synchronous,
                Stage = ProcessingStepStage.Preoperation
            });

            _context.RegisterPluginStep<pre_bis_city_update>(new PluginStepDefinition()
            {
                MessageName = "Update",
                EntityLogicalName = bis_city.EntityLogicalName,
                Mode = ProcessingStepMode.Synchronous,
                Stage = ProcessingStepStage.Postoperation
            });

            _context.Initialize(new List<Entity>()
            {
                _country,
                _city
            });

            //ParameterCollection inputParameters = new ParameterCollection();
            //inputParameters.Add("Target", _city);
            //pluginContext.InputParameters = inputParameters;

            //_context.ExecutePluginWith<pre_bis_city_update>(pluginContext);
            _context.ExecutePluginWithTarget<pre_bis_city_update>(
                new bis_city()
                {
                    Id = _city.Id,
                    bis_name = "NameChanged"
                },
                "Update",
                (int)ProcessingStepStage.Preoperation
            );

            _context.ExecutePluginWithTarget<post_bis_city_update>(
                new bis_city()
                {
                    Id = _city.Id,
                    bis_country = _city.bis_country,
                    bis_name = "NameChanged"
                },
                "Update",
                (int)ProcessingStepStage.Postoperation
            );
            
            var updatedCities = _context.CreateQuery<bis_city>().ToList();
            var updatedCountries = _context.CreateQuery<bis_country>().ToList();

        }

        [Fact]
        public void pre_bis_city_create_test()
        {
            _context.RegisterPluginStep<pre_bis_city_create>(new PluginStepDefinition()
            {
                MessageName = "Create",
                EntityLogicalName = bis_city.EntityLogicalName,
                Mode = ProcessingStepMode.Synchronous,
                Stage = ProcessingStepStage.Preoperation
            });

            _context.ExecutePluginWithTarget<pre_bis_city_create>(
                new bis_city()
                {
                    bis_name = "TEST"
                },
                "Create",
                (int)ProcessingStepStage.Preoperation
            );

            var newCity = _context.CreateQuery<bis_city>().FirstOrDefault();

        }
    }
}