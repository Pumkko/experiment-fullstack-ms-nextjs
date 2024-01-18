import { DataTable } from "@/app/components/dataTable";
import { Character } from "../lib/charactersSchema";
import CharactersTableColumns from "./charactersTableColumns";

interface CharacterTableProps {
    characters: Character[]
}

export default function CharacterTable(props: CharacterTableProps) {
    return <DataTable columns={CharactersTableColumns} data={props.characters}></DataTable>
}