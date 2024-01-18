import * as v from 'valibot'

export const GetCharacterSchema = v.array(
    v.object({
        id: v.nonNullish(v.string([v.minLength(1), v.uuid()])),
        name: v.nonNullish(v.string([v.minLength(1)])),
        planetOrigin: v.nonNullish(v.string([v.minLength(1), v.uuid()])),
    })
)

export type Character = v.Input<typeof GetCharacterSchema>[number]