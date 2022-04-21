using System.Threading.Tasks;
using Abp.Application.Services;
using SW.HRMS.Authorization.Accounts.Dto;

namespace SW.HRMS.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
