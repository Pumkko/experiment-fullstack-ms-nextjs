using api_full_planets;
using EntityGraphQL.AspNet;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<PlanetContext>(options =>
  options.UseSqlServer(builder.Configuration.GetConnectionString("PlanetDb")));

builder.Services.AddGraphQLSchema<PlanetContext>();


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

app.MapGraphQL<PlanetContext>();


app.MapControllers();

app.Run();
