import { editalType, proposalType } from "./features/data/index";
import { configureStore } from "@reduxjs/toolkit";

import DataReducer from "./features/data";

export type StoreStateType = {
    data: {
        editals: editalType[];
        proposals: proposalType[];
    };
};

// Nova forma de implementar o redux recomendado pela própria documentação
// Utilizando o @reduxjs/toolkit => https://redux.js.org/introduction/why-rtk-is-redux-today
export const store = configureStore({
    reducer: {
        data: DataReducer,
    },
});
