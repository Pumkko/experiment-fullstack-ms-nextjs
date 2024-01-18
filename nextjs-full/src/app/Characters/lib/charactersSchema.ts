import * as v from 'valibot'

const nonNullishNonEmpty = v.nonNullish(v.string([v.minLength(1)]));

export const GetCharacterSchema = v.array(
    v.object({
        id: v.nonNullish(v.string([v.minLength(1), v.uuid()])),
        name: nonNullishNonEmpty,
        origin: nonNullishNonEmpty
    })
)

export type Character = v.Input<typeof GetCharacterSchema>[number]