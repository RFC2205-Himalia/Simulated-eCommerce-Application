import { createSlice } from "@reduxjs/toolkit";

export const addReviewsSlice = createSlice({
  name: "addReviews",
  initialState: { 
      product:"",
      page: 0,
      count: 0,
      reviews: [],
    },
  reducers: {
    addReviews: (state, action) => {
      state.reviews = action.payload.results;
      state.product = action.payload.product;
      state.page = action.payload.page;
      state.count = action.payload.count;
      console.log(state);
    }
  }
})

export const {addReviews} = addReviewsSlice.actions

export default addReviewsSlice.reducer;