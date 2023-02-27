using Bis.Common.CRM.Generic.Dataverse;
using Bis.Common.CRM.ObjectModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bis.Common.CRM.BusinessLogic
{
    public class bis_addressFactory
    {
        private CrmServiceContext Service { get; set; }

        public bis_addressFactory(CrmServiceContext service)
        {
            Service = service;
        }

        public string GetConcatenatedAddress(bis_address currentAddress)
        {
            Service.TracingService?.Trace("GetConcatenatedAddress Start");

            var addressPartList = new List<string>();

            if (currentAddress.Contains(bis_address.Fields.bis_addressline1))
            {
                Service.TracingService?.Trace("1");
                addressPartList.Add(currentAddress.bis_addressline1);
            }
            if (currentAddress.Contains(bis_address.Fields.bis_addressline2))
            {
                Service.TracingService?.Trace("2");
                addressPartList.Add(currentAddress.bis_addressline2);
            }
            if (currentAddress.Contains(bis_address.Fields.bis_zipcode) && currentAddress.bis_zipcode != null)
            {
                Service.TracingService?.Trace("3");
                addressPartList.Add(currentAddress.bis_name);
            }
            if (currentAddress.Contains(bis_address.Fields.bis_city) && currentAddress.bis_city != null)
            {
                Service.TracingService?.Trace("4");
                var city = Service.bis_citySet.Where(x => x.Id == currentAddress.bis_city.Id).FirstOrDefault();
                addressPartList.Add(city.bis_name);
            }
            if (currentAddress.Contains(bis_address.Fields.bis_state) && currentAddress.bis_state != null)
            {
                Service.TracingService?.Trace("5");
                var state = Service.bis_stateSet.Where(x => x.Id == currentAddress.bis_state.Id).FirstOrDefault();
                addressPartList.Add(state.bis_name);
            }
            if (currentAddress.Contains(bis_address.Fields.bis_country) && currentAddress.bis_country != null)
            {
                Service.TracingService?.Trace("6");
                var country = Service.bis_countrySet.Where(x => x.Id == currentAddress.bis_country.Id).FirstOrDefault();
                addressPartList.Add(country.bis_name);
            }

            Service.TracingService?.Trace("7");

            var concatenatedAddress = string.Join(" ", addressPartList);


            Service.TracingService?.Trace("GetConcatenatedAddress End");

            return concatenatedAddress;
        }

    }
}
