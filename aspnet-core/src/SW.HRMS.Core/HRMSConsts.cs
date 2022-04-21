using SW.HRMS.Debugging;

namespace SW.HRMS
{
    public class HRMSConsts
    {
        public const string LocalizationSourceName = "HRMS";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "48e7b455c9a04a21b666a9431aff723c";
    }
}
