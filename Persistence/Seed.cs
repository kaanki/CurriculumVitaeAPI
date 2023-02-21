using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            
            System.Console.WriteLine("seed çalıştı");   
            if (context.Users.Any()) return;
            User testUser = new User();
            System.Console.WriteLine("seed çalıştı 2");  
            try
            {
                
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
                }
            };
            
           
            // await context.Activities.AddRangeAsync(activities);
            // await context.Companies.AddRangeAsync(companies);
            
            System.Console.WriteLine("seed çalıştı 3"); 
            await context.Users.AddRangeAsync(users);
            
            System.Console.WriteLine("seed çalıştı 4"); 
            await context.SaveChangesAsync();
            
            System.Console.WriteLine("seed çalıştı 5");
             }
            catch (System.Exception ex)
            {
                
            System.Console.WriteLine(ex.Message); 
            } 
        }
    }
}