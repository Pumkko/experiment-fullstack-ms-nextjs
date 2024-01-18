import * as v from 'valibot'
import { GetCharacterSchema } from './lib/charactersSchema';
import { json } from 'stream/consumers';
import CharacterTable from './components/charactersTable';
import env from '@/env';

async function getCharacters() {
  const res = await fetch( new URL('Characters', env.API_URL));
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const jsonResult = await res.json();

  const result = v.safeParse(GetCharacterSchema, jsonResult);

  if (!result.success) {
    throw new Error("Get Character schema returns an object that does not match the schema");
  }

  return result.output;
}

export default async function Characters() {
  const characters = await getCharacters();

  return <CharacterTable characters={characters}></CharacterTable>
} 