import { createSlice } from '@reduxjs/toolkit'
import { signInRequest, signUpRequest } from './auth.thunk.js'

const getInitialState = () => {
   const json = localStorage.getItem('TEST_PROJECT')
   if (json) {
      const parsedData = JSON.parse(json)

      return {
         isLoading: false,
         error: null,

         userData: {
            token: parsedData.token,
            email: parsedData.email,
            role: parsedData.role,
            name: parsedData.name,
            isAuth: true,
         },
      }
   }

   return {
      isLoading: false,
      error: null,
      userData: {
         name: '',
         email: '',
         token: '',
         role: 'GUEST',
         isAuth: false,
      },
   }
}

const addAsyncCases = (builder, asyncThunk, dataField) => {
   builder
      .addCase(asyncThunk.fulfilled, (state, action) => {
         state[dataField] = action.payload
         state.isLoading = false
      })
      .addCase(asyncThunk.pending, (state) => {
         state.isLoading = true
      })
      .addCase(asyncThunk.rejected, (state, action) => {
         state.isLoading = false
         state.error = action.payload
      })
}

export const authSlice = createSlice({
   name: 'auth',
   initialState: getInitialState(),
   reducers: {
      logOut: (state) => {
         state.isLoading = false
         state.userData.role = 'GUEST'
         state.userData.email = ''
         state.userData.name = ''
         state.userData.token = ''
         state.userData.role = ''
         state.userData.isAuth = false

         localStorage.removeItem('TEST_PROJECT')
      },
      autoLogin: (state, { payload }) => {
         state.userData = payload
         state.userData.isAuth = true
      },
   },
   extraReducers: (builder) => {
      addAsyncCases(builder, signInRequest, 'userData')
      addAsyncCases(builder, signUpRequest, 'userData')
   },
})

export const authActions = authSlice.actions
