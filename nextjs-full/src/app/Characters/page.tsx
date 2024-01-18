import { Character, GetCharacterSchema } from './lib/charactersSchema';
import CharacterTable from './components/charactersTable';
import env from '@/env';
import { GetPlanetSchema, Planet } from './lib/planetsSchema';
import { CharacterDto } from './lib/characterDto';
import { getCharacters, getPlanets } from './lib/getData';

async function getCharactersData(): Promise<CharacterDto[]> {
  const characters = await getCharacters();
  const planets = await getPlanets();

  return characters.map<CharacterDto>(c => {

    const planet = planets.find(p => p.id === c.planetOrigin);
    if (!planet) {
      throw new Error(`Can't find planet for ${c.name}`);
    }

    return {
      name: c.name,
      planet: planet.name
    }
  })
}

export default async function Characters() {
  const characters = await getCharactersData();

  return <CharacterTable characters={characters}></CharacterTable>
} 