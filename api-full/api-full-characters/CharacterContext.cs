using api_full_characters.Models;
using Microsoft.EntityFrameworkCore;

namespace api_full_characters
{
    public class CharacterContext(DbContextOptions<CharacterContext> options) : DbContext(options)
    {
        public DbSet<Character> Characters { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Character>().HasKey(c => c.Id);

            modelBuilder.Entity<Character>().Property(c => c.Id)
                .ValueGeneratedOnAdd();
        }
    }
}
