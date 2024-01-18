using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api_full_characters.Migrations
{
    /// <inheritdoc />
    public partial class TurnToPlanetId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Origin",
                table: "Characters");

            migrationBuilder.AddColumn<Guid>(
                name: "PlanetOrigin",
                table: "Characters",
                type: "uniqueidentifier",
                nullable: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PlanetOrigin",
                table: "Characters");

            migrationBuilder.AddColumn<string>(
                name: "Origin",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
