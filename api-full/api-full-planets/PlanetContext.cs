using api_full_planets.Models;
using Microsoft.EntityFrameworkCore;

namespace api_full_planets
{
    public class PlanetContext(DbContextOptions<PlanetContext> options) : DbContext(options)
    {
        public DbSet<Planet> Planets { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Planet>().HasKey(c => c.Id);

            modelBuilder.Entity<Planet>().Property(c => c.Id)
                .ValueGeneratedOnAdd();
        }
    }
}
