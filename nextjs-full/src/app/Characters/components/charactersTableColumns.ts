import { ColumnDef } from "@tanstack/react-table";
import { CharacterDto } from "../lib/characterDto";

const CharactersTableColumns: ColumnDef<CharacterDto>[] = [
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'planet',
        header: 'Origin'
    }
]

export default CharactersTableColumns;