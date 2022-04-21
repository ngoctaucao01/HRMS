using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using SW.HRMS.Configuration.Dto;

namespace SW.HRMS.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : HRMSAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
