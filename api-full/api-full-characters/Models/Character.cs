namespace api_full_characters.Models
{
    public class Character
    {
        public Guid Id { get; set; }

        public required string Name { get; set; }

        public required Guid PlanetOrigin { get; set; }
    }
}
