import { createSlice } from "@reduxjs/toolkit";

export const questionData = createSlice({
  name: "questions",
  initialState: {
    count: 4,
    questions: [],
    sortedAnswers: [],
    renderList: [],
    renderAnswers: [],
    reported: [],
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
    answerRender: (state, action) => {
      state.renderAnswers = action.payload
    },
    incrementCount: (state) => {
      state.count = state.count + 2
    },
    resetCount: (state) => {
      state.count = 4;
    },
    reportedTracker: (state, action) => {
      console.log('payload: ', action.payload);
      return {
        ...state,
        renderList: state.renderList.map((question) => {
          //console.log(question)
          question.question_id === action.payload ?
           { ...question, reported: true } : question
        })
      }
    }
  }
})

export const {questionList, sorted, addRender, incrementCount, resetCount, renderAnswers, answerRender, reportedTracker} = questionData.actions

export default questionData.reducer;