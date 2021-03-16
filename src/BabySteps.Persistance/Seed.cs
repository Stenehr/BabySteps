using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using src.BabySteps.Domain;

namespace src.BabySteps.Persistance
{
    public class Seed
    {
        public static async Task SeedDataAsync(DataContext context)
        {
            if (context.Posts.Any())
                return;

            var posts = new List<Post>
            {
                new Post
                {
                    Content = "First post content",
                    Date = DateTime.Now.AddDays(-1),
                    InsertDate = DateTime.Now.AddDays(-1),
                    Title = "First post"
                },
                new Post
                {
                    Content = "Second post content",
                    Date = DateTime.Now.AddDays(-2),
                    InsertDate = DateTime.Now.AddDays(-2),
                    Title = "Second post"
                },
                new Post
                {
                    Content = "Third post content",
                    Date = DateTime.Now.AddDays(-2),
                    InsertDate = DateTime.Now.AddDays(-2),
                    Title = "Third post"
                },
                new Post
                {
                    Content = "Fourth post content",
                    Date = DateTime.Now.AddDays(-2),
                    InsertDate = DateTime.Now.AddDays(-2),
                    Title = "Fourth post"
                }
            };

            await context.Posts.AddRangeAsync(posts);
            await context.SaveChangesAsync();
        }
    }
}