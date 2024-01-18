import { Character, GetCharacterSchema } from './lib/charactersSchema';
import CharacterTable from './components/charactersTable';
import env from '@/env';
import { getData } from './lib/getData';
import { GetPlanetSchema, Planet } from './lib/planetsSchema';
import { CharacterDto } from './lib/characterDto';

async function getCharacters(): Promise<CharacterDto[]> {
  const characters = getData(new URL('Characters', env.CHARACTERS_API_URL_ROOT), GetCharacterSchema);
  const planets = getData(new URL('Planets', env.PLANETS_API_URL_ROOT), GetPlanetSchema);

  const models = await Promise.allSettled([characters, planets]);
  if (models.some(p => p.status === "rejected")) {
    throw new Error("Failed to fetch characters or planets");
  }

  const successModels = models as [PromiseFulfilledResult<Character[]>, PromiseFulfilledResult<Planet[]>];

  const characterDto: CharacterDto[] = [];

  for (const character of successModels[0].value) {

    const planet = successModels[1].value.find(p => p.id === character.planetOrigin);
    if (!planet) {
      throw new Error("Failed to match planet with planetId");
    }

    characterDto.push({
      name: character.name,
      planet: planet.name
    })

  }

  return characterDto;
}

export default async function Characters() {
  const characters = await getCharacters();

  return <CharacterTable characters={characters}></CharacterTable>
} 