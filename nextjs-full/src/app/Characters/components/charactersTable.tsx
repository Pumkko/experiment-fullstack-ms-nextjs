import { DataTable } from "@/app/components/dataTable";
import CharactersTableColumns from "./charactersTableColumns";
import { CharacterDto } from "../lib/characterDto";

interface CharacterTableProps {
    characters: CharacterDto[]
}

export default function CharacterTable(props: CharacterTableProps) {
    return <DataTable columns={CharactersTableColumns} data={props.characters}></DataTable>
}