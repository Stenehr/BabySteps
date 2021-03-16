using Microsoft.EntityFrameworkCore;
using src.BabySteps.Domain;

namespace src.BabySteps.Persistance
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> opt) : base(opt)
        { }

        public DbSet<Post> Posts { get; set; }
    }
}