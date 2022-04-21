using Abp.Application.Services;
using SW.HRMS.MultiTenancy.Dto;

namespace SW.HRMS.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

