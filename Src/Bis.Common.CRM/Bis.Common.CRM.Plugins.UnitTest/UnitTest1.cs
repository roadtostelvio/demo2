using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Tooling.Connector;
using System;

namespace Bis.Common.CRM.Plugins.UnitTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            var serviceOrg = new CrmServiceClient(new Uri(OrganizationData.D365Uri), OrganizationData.ClientId, OrganizationData.ClientSecret, true, null);

        }
    }
}
