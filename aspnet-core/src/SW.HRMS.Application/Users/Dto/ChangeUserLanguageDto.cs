using System.ComponentModel.DataAnnotations;

namespace SW.HRMS.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}