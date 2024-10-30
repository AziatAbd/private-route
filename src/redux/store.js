import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice.js'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
   },
})
