import { createSlice } from '@reduxjs/toolkit';

export const styleSlice = createSlice({
  name: "stylesList",
  initialState: {styles: [], currentStyle: 0, currentSkus: {}},
  reducers: {
    getStyles: (state, action) => {
      state.styles = action.payload
    },
    setCurrentStyle: (state, action) => {
      state.currentStyle = action.payload
    },
    setCurrentSkus: (state, action) => {
      state.currentSkus = action.payload
    }
  }
})

export const { getStyles, setCurrentStyle, setCurrentSkus } = styleSlice.actions;

export default styleSlice.reducer;