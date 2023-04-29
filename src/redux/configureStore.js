import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './user'
import imageSlice  from './image'
import loggedStatus from './loggedStatus'
import contentSlice  from './content'
export default configureStore({
  reducer: {
    user: userSlice,
    image:imageSlice,
    logged: loggedStatus,
    content:contentSlice
  }
})