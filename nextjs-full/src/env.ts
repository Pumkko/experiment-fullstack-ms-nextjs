import * as v from 'valibot'

const envSchema = v.object({
    CHARACTERS_API_URL_ROOT: v.nonNullish(v.string([v.url()])),
    PLANETS_API_URL_ROOT: v.nonNullish(v.string([v.url()])),
})

console.log('validating');

const env = v.safeParse(envSchema, {
    CHARACTERS_API_URL_ROOT: process.env.CHARACTERS_API_URL_ROOT,
    PLANETS_API_URL_ROOT: process.env.PLANETS_API_URL_ROOT
});

if (!env.success) {
    throw new Error("Wrong ENV format")
}

export default env.output;