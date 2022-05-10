import {
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
} from "@chakra-ui/react";

type thType = {
    isNumeric?: boolean;
    content: string;
};

type tdType = {
    isNumeric?: boolean;
    content: string;
};

interface CustomTableProps {
    caption: string;
    heads: thType[];
    body: { tds: tdType[] }[];
}

export function CustomTable({ caption, heads, body }: CustomTableProps) {
    return (
        <TableContainer>
            <Table size="md">
                <TableCaption mt={0}>{caption}</TableCaption>
                <Thead>
                    <Tr>
                        {heads.map((head, i) => (
                            <Th key={i} isNumeric={head.isNumeric || false}>
                                {head.content}
                            </Th>
                        ))}
                    </Tr>
                </Thead>

                <Tbody>
                    {body.map((row, i) => (
                        <Tr key={i}>
                            {row.tds.map((td, c) => (
                                <Td key={c} isNumeric={td.isNumeric || false}>
                                    {td.content}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}
