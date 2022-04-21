using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using SW.HRMS.EntityFrameworkCore;
using SW.HRMS.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace SW.HRMS.Web.Tests
{
    [DependsOn(
        typeof(HRMSWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class HRMSWebTestModule : AbpModule
    {
        public HRMSWebTestModule(HRMSEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(HRMSWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(HRMSWebMvcModule).Assembly);
        }
    }
}