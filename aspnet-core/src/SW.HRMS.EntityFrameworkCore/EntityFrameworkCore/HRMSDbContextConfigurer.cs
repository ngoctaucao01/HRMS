using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace SW.HRMS.EntityFrameworkCore
{
    public static class HRMSDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<HRMSDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<HRMSDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
