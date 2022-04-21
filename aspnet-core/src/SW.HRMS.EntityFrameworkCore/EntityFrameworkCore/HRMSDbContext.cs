using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using SW.HRMS.Authorization.Roles;
using SW.HRMS.Authorization.Users;
using SW.HRMS.MultiTenancy;

namespace SW.HRMS.EntityFrameworkCore
{
    public class HRMSDbContext : AbpZeroDbContext<Tenant, Role, User, HRMSDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public HRMSDbContext(DbContextOptions<HRMSDbContext> options)
            : base(options)
        {
        }
    }
}
