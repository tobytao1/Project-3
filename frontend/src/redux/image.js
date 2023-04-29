import { createSlice } from '@reduxjs/toolkit'

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    img: ""
  },
  reducers: {
     ImageSave: (state, action) => {
      state.img = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { ImageSave } = imageSlice.actions

export default imageSlice.reducer