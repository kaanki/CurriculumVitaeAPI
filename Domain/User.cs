using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography;
using Domain.Enums;

namespace Domain
{
    public class User
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public string PasswordSalt { get; set; }
        public int Status { get; set; } = Convert.ToInt32( UserEnums.UserStatus.Active);
        public int Role { get; set; } = Convert.ToInt32( UserEnums.UserRole.Default);
        public DateTime createDate { get; set; } = DateTime.UtcNow.AddHours(3);
        public DateTime updateDate { get; set; }


    }
}