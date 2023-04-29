import { createSlice } from '@reduxjs/toolkit'

export const loggedSlice = createSlice({
  name: 'logged',
  initialState: {
    status: false
  },
  reducers: {
     loggedChange: (state, action) => {
      state.status = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { loggedChange } = loggedSlice.actions

export default loggedSlice.reducer