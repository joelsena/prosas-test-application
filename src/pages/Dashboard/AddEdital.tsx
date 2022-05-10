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

export function AddEdital() {
  return (
    <Container mt={8}>
      <Box>
        <Text fontSize="2xl" fontWeight="bold">
          Cadastrar Edital
        </Text>
        <form>
          <VStack spacing={2}>
            <FormControl>
              <FormLabel>Nome do edital</FormLabel>
              <Input name="editalName" placeholder="Nome" />
            </FormControl>
            <FormControl>
              <FormLabel>Valor limite por proposta</FormLabel>
              <Input name="proposalLimitValue" placeholder="R$ 999,99" />
            </FormControl>
          </VStack>
          <Button mt={4}>Enviar</Button>
        </form>
      </Box>
    </Container>
  );
}
