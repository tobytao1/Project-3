import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userName',
  initialState: {
    value: ""
  },
  reducers: {
     userNameSave: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { userNameSave } = userSlice.actions

export default userSlice.reducer