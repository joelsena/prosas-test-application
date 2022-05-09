import { ChakraProvider, Box, Text, theme } from "@chakra-ui/react";
import { AppRouter } from "../router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Text>Começo</Text>
    </Box>
    <AppRouter />
  </ChakraProvider>
);
