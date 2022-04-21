using System.Threading.Tasks;
using SW.HRMS.Models.TokenAuth;
using SW.HRMS.Web.Controllers;
using Shouldly;
using Xunit;

namespace SW.HRMS.Web.Tests.Controllers
{
    public class HomeController_Tests: HRMSWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}