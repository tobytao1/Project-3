import { createSlice } from '@reduxjs/toolkit'

export const contentSlice = createSlice({
  name: 'content',
  initialState: {
    content: ""
  },
  reducers: {
     contentSave: (state, action) => {
      state.content = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { contentSave } = contentSlice.actions

export default contentSlice.reducer