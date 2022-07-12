import { createSlice } from "@reduxjs/toolkit";

export const questionData = createSlice({
  name: "questions",
  initialState: { questions: []},
  reducers: {
    questionList: (state, action) => {
      state.questions = action.payload
    }
  }
})

export const {questionList} = questionData.actions

export default questionData.reducer;