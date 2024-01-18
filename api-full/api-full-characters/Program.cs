using api_full_characters;
using EntityGraphQL.AspNet;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<CharacterContext>(options =>
  options.UseSqlServer(builder.Configuration.GetConnectionString("CharactersDb")));

builder.Services.AddGraphQLSchema<CharacterContext>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapGraphQL<CharacterContext>();

app.MapControllers();

app.Run();
