using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace SW.HRMS.Controllers
{
    public abstract class HRMSControllerBase: AbpController
    {
        protected HRMSControllerBase()
        {
            LocalizationSourceName = HRMSConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
