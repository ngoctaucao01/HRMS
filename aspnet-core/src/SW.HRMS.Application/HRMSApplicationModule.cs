using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using SW.HRMS.Authorization;

namespace SW.HRMS
{
    [DependsOn(
        typeof(HRMSCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class HRMSApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<HRMSAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(HRMSApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
