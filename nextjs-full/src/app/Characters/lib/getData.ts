import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { safeParse } from "valibot";
import { Character, GetCharacterSchema } from './charactersSchema'
import env from "@/env";
import { GetPlanetSchema, Planet } from "./planetsSchema";

export async function getCharacters(): Promise<Character[]> {
    const client = new ApolloClient({
        uri: env.CHARACTERS_API_URL_ROOT,
        cache: new InMemoryCache(),
    });

    const graphQlResult = await client
        .query({
            query: gql`
            query getCharacters {
                characters {
                    name,
                    planetOrigin
                }
            }
    `,
        });
        
    const result = safeParse(GetCharacterSchema, graphQlResult.data);

    if (!result.success) {
        throw result.issues.map(i => i.message).join(',');
    }

    return result.output.characters;
}

export async function getPlanets(): Promise<Planet[]> {
    const client = new ApolloClient({
        uri: env.PLANETS_API_URL_ROOT,
        cache: new InMemoryCache(),
    });

    const graphQlResult = await client
        .query({
            query: gql`
            query getPlanets {
                planets{
                 name,
                     id
               }
             }
    `,
        });
        

    const result = safeParse(GetPlanetSchema, graphQlResult.data);

    if (!result.success) {
        throw result.issues.map(i => i.message).join(',');
    }

    return result.output.planets;
}