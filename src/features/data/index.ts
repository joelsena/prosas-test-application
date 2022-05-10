import { createSlice } from "@reduxjs/toolkit";

type editalType = {
  id: string | number;
  name: string;
  proposalLimitValue: number;
};
type proposalType = {
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
    dataEditalAdd(state, { payload }) {
      state.editals.push({
        id: payload.id,
        name: payload.name,
        proposalLimitValue: payload.proposalLimitValue,
      });
    },
    dataProposalAdd(state, { payload }) {
      state.proposals.push({
        id: payload.id,
        name: payload.name,
        requestedValue: payload.requestedValue,
      });
    },
  },
});

export const { dataEditalAdd, dataProposalAdd } = dataSlice.actions;
export default dataSlice.reducer;
