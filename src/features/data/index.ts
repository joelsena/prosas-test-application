import { createSlice } from "@reduxjs/toolkit";

export type editalType = {
    id: string | number;
    name: string;
    proposalLimitValue: number;
};
export type proposalType = {
    id: string | number;
    name: string;
    requestedValue: number;
};

const dataSlice = createSlice({
    name: "data",
    initialState: {
        editals: [] as editalType[],
        proposals: [] as proposalType[],
    },
    reducers: {
        dataAddEdital(state, { payload }) {
            state.editals.push({
                id: payload.id,
                name: payload.name,
                proposalLimitValue: payload.proposalLimitValue,
            });
        },
        dataAddProposal(state, { payload }) {
            state.proposals.push({
                id: payload.id,
                name: payload.name,
                requestedValue: payload.requestedValue,
            });
        },
    },
});

export const { dataAddEdital, dataAddProposal } = dataSlice.actions;
export default dataSlice.reducer;
