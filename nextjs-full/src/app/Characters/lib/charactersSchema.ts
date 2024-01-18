import * as v from 'valibot'

export const GetCharacterSchema = v.object({
    characters: v.array(
        v.object({
            name: v.nonNullish(v.string([v.minLength(1)])),
            planetOrigin: v.nonNullish(v.string([v.minLength(1), v.uuid()])),
        }), 'Characters schema is Wrong'
    )
})

export type Character = v.Input<typeof GetCharacterSchema>['characters'][number]