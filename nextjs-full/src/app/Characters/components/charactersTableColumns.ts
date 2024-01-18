import { ColumnDef } from "@tanstack/react-table";
import { Character } from "../lib/charactersSchema";

const CharactersTableColumns: ColumnDef<Character>[] = [
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'planetOrigin',
        header: 'Origin'
    }
]

export default CharactersTableColumns;