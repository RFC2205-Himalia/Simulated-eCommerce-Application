import { createSlice } from "@reduxjs/toolkit";

export const questionData = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    sortedAnswers: [],
    renderList: [],
  },
  reducers: {
    questionList: (state, action) => {
      state.questions = action.payload
    },
    sorted: (state, action) => {
      state.sortedAnswers = action.payload
    },
    addRender: (state, action) => {
      state.renderList = action.payload
    },
  }
})

export const {questionList, sorted, addRender} = questionData.actions

export default questionData.reducer;