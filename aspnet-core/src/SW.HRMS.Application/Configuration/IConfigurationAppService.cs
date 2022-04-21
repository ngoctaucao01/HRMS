using System.Threading.Tasks;
using SW.HRMS.Configuration.Dto;

namespace SW.HRMS.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
