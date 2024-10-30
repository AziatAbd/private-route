import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance.js'
import { ROUTES } from '../../utils/routes.js'

export const signInRequest = createAsyncThunk(
   'auth/signIn',
   async ({ userData, onClose, navigate }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post('/auth', userData)

         const response = { ...data.data, token: data.token, isAuth: true }

         if (onClose) {
            onClose()
         }

         localStorage.setItem('TEST_PROJECT', JSON.stringify(response))

         return response
      } catch (error) {
         console.log(error)
         return rejectWithValue(
            error.response?.data?.message ||
               'Something went wrong during sign-in'
         )
      }
   }
)

export const signUpRequest = createAsyncThunk(
   'auth/signUp',
   async ({ userData, onClose }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post('/register', {
            ...userData,
            role: 'USER',
         })

         const response = { ...data.data, token: data.token, isAuth: true }

         if (onClose) {
            onClose()
         }

         localStorage.setItem('TEST_PROJECT', JSON.stringify(response))

         return response
      } catch (error) {
         return rejectWithValue(
            error.response?.data?.message ||
               'Something went wrong during sign-in'
         )
      }
   }
)

export const logOut = createAsyncThunk('auth/logOut', () => {})
