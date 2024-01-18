import * as v from 'valibot'

const envSchema = v.object({
    API_URL: v.nonNullish(v.string([v.url()]))
})

console.log('validating');

const env = v.safeParse(envSchema, {
    API_URL: process.env.API_URL
});

if (!env.success) {
    throw new Error("Wrong ENV format")
}

export default env.output;