import { createSlice } from '@reduxjs/toolkit';

export const styleSlice = createSlice({
  name: "stylesList",
  initialState: {styles: [], currentStyle: 0},
  reducers: {
    getStyles: (state, action) => {
      state.styles = action.payload
    },
    setCurrentStyle: (state, action) => {
      state.currentStyle = action.payload
    }
  }
})

export const { getStyles, setCurrentStyle } = styleSlice.actions;

export default styleSlice.reducer;