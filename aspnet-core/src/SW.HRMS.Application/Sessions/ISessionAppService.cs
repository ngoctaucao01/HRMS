using System.Threading.Tasks;
using Abp.Application.Services;
using SW.HRMS.Sessions.Dto;

namespace SW.HRMS.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
