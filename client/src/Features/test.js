import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "test",
  initialState: { value: 3},
  reducers: {
    test: (state, action) => {
      state.value = action.payload
      console.log(state);
    }
  }
})

export const {test} = testSlice.actions

export default testSlice.reducer;