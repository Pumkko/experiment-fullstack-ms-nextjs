import { BaseSchema, Output, safeParse } from "valibot";

export async function getData<TSchema extends BaseSchema>(url: string | URL, schema: TSchema): Promise<Output<TSchema>> {
    const res = await fetch(url);
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    const jsonResult = await res.json();

    const result = safeParse(schema, jsonResult);

    if (!result.success) {
        throw new Error("Get Data returns an object that does not match the schema");
    }

    return result.output;

}