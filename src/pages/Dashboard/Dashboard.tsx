import { Box, HStack, Tag, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { CustomTable } from "../../components/CustomTable";
import { editalType, proposalType } from "../../features/data";
import { StoreStateType } from "../../store";
import { toBRCurrency } from "../../utils/toBRCurrency";

export function Dashboard() {
    const editals = useSelector<StoreStateType, editalType[]>(
        (state) => state.data.editals
    );
    const proposals = useSelector<StoreStateType, proposalType[]>(
        (state) => state.data.proposals
    );

    const TableHeads = [
        { content: "id" },
        { content: "Nome" },
        { isNumeric: true, content: "Valor" },
    ];

    return (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                Dashboard
            </Text>

            {editals.length === 0 && <Text mb={2}>Sem Editais</Text>}
            {proposals.length === 0 && <Text mb={2}>Sem Propostas</Text>}

            {editals.map((ed) => {
                const aboveValue = proposals.filter(
                    (pro) => pro.requestedValue > ed.proposalLimitValue
                );

                const belowValue = proposals.filter(
                    (pro) => pro.requestedValue < ed.proposalLimitValue
                );

                return (
                    <Box mt={8}>
                        <HStack mb={2}>
                            <Text fontSize="xl" fontWeight="bold">
                                {ed.name} -{" "}
                                {toBRCurrency(ed.proposalLimitValue)}
                            </Text>
                            <Tag colorScheme="teal">NEW</Tag>
                        </HStack>
                        {aboveValue.length === 0 ? (
                            <Text mb={4}>Sem propostas Acima do valor</Text>
                        ) : (
                            <CustomTable
                                caption="Propostas acima do valor limite"
                                heads={TableHeads}
                                body={aboveValue.map((abv) => ({
                                    tds: [
                                        { content: String(abv.id) },
                                        { content: abv.name },
                                        {
                                            isNumeric: true,
                                            content: toBRCurrency(
                                                abv.requestedValue
                                            ),
                                        },
                                    ],
                                }))}
                            />
                        )}
                        {belowValue.length === 0 ? (
                            <Text mb={4}>Sem propostas Abaixo do valor</Text>
                        ) : (
                            <CustomTable
                                caption="Propostas abaixo do valor limite"
                                heads={TableHeads}
                                body={belowValue.map((blw) => ({
                                    tds: [
                                        { content: String(blw.id) },
                                        { content: blw.name },
                                        {
                                            isNumeric: true,
                                            content: toBRCurrency(
                                                blw.requestedValue
                                            ),
                                        },
                                    ],
                                }))}
                            />
                        )}
                    </Box>
                );
            })}
        </Box>
    );
}
