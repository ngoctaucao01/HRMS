using Abp.Authorization;
using SW.HRMS.Authorization.Roles;
using SW.HRMS.Authorization.Users;

namespace SW.HRMS.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
