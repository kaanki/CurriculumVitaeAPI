using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {

            if (context.Users.Any()) return;
            User testUser = new User();

            var users = new List<User>
            {
                new User
                {
                    Name = "Ali Yorulmaz",
                    Username = "Aliyrlmz",
                    Password = PasswordHelper.HashPasword("ali1234", out byte[] salt),
                    PasswordSalt = System.Text.Encoding.UTF8.GetString(salt, 0, salt.Length) ,
                    Email = "aliyrlmz@gmail.com",
                    Role = 1,
                    Status = 1,
                    createDate = DateTime.Now,
                    updateDate = DateTime.Now
                },
                new User
                {
                    Name = "Kaan",
                    Username = "Kaanki",
                    Password = PasswordHelper.HashPasword("kaan1234", out salt),
                    PasswordSalt = System.Text.Encoding.UTF8.GetString(salt, 0, salt.Length) ,
                    Email = "kaan.keles@gmail.com",
                    Role = Convert.ToInt32( Domain.Enums.UserEnums.UserRole.Default),
                    Status = Convert.ToInt32(Domain.Enums.UserEnums.UserStatus.Active),
                    createDate = DateTime.Now,
                    updateDate = DateTime.Now
                }
            };


            // await context.Activities.AddRangeAsync(activities);
            // await context.Companies.AddRangeAsync(companies);

            await context.Users.AddRangeAsync(users);

            await context.SaveChangesAsync();

        }
    }
}