import * as v from 'valibot'

export const GetPlanetSchema = v.object({
    planets: v.array(
        v.object({
            id: v.nonNullish(v.string([v.minLength(1), v.uuid()])),
            name: v.nonNullish(v.string([v.minLength(1)])),
        })
    )
})

export type Planet = v.Input<typeof GetPlanetSchema>['planets'][number]