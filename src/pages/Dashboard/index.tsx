import { HStack, Flex, Link, Container } from "@chakra-ui/react";
import { Link as RouterLink, Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <Container centerContent={false}>
      <Flex justify="flex-end" p={2}>
        <HStack>
          <Link as={RouterLink} to="add-edital">
            Edital
          </Link>
          <Link as={RouterLink} to="add-proposta">
            Proposta
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
