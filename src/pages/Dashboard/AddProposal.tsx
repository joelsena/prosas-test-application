import {
  Box,
  FormControl,
  Input,
  FormLabel,
  Text,
  Container,
  VStack,
  Button,
} from "@chakra-ui/react";

export function AddProposal() {
  return (
    <Container mt={8}>
      <Box>
        <Text fontSize="2xl" fontWeight="bold">
          Adicionar Proposta
        </Text>
        <form>
          <VStack spacing={2}>
            <FormControl>
              <FormLabel>Nome da proposta</FormLabel>
              <Input name="proposalName" placeholder="Nome" />
            </FormControl>
            <FormControl>
              <FormLabel>Valor solicitado</FormLabel>
              <Input name="requestedValue" placeholder="R$ 999,99" />
            </FormControl>
          </VStack>
          <Button mt={4}>Enviar</Button>
        </form>
      </Box>
    </Container>
  );
}
