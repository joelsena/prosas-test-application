import { ChakraProvider, theme } from "@chakra-ui/react";
import { Provider } from "react-redux";

import { AppRouter } from "../router";
import { store } from "../store";

// Teste ssh

export const App = () => (
    <ChakraProvider theme={theme}>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </ChakraProvider>
);
