import { HStack, Flex, Link, Container } from "@chakra-ui/react";
import { Link as RouterLink, Outlet } from "react-router-dom";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

export function DashboardLayout() {
    return (
        <Container centerContent={false}>
            <Flex justify="flex-end" p={2}>
                <HStack spacing={4}>
                    <ColorModeSwitcher />
                    <Link as={RouterLink} to="add-edital">
                        Cadastrar Edital
                    </Link>
                    <Link as={RouterLink} to="add-proposta">
                        Adicionar Proposta
                    </Link>
                    <Link as={RouterLink} to="dashboard">
                        Dashboard
                    </Link>
                </HStack>
            </Flex>
            <Outlet />
        </Container>
    );
}
