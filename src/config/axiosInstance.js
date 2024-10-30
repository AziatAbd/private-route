import axios from 'axios'
import log from 'eslint-plugin-react/lib/util/log.js'

export const axiosInstance = axios.create({
   baseURL: 'https://e5d21b8931c954ae.mokky.dev',
   headers: {
      'Content-Type': 'application/json',
   },
})

let store

export const injectStore = (_store) => {
   store = _store
}

axiosInstance.interceptors.request.use(function (config) {
   const updatedConfig = { ...config }

   const { userData } = store.getState().auth

   if (userData.token) {
      return (updatedConfig.headers.Authorization = `Bearer ${userData.token}`)
   }
   return config
})

axiosInstance.interceptors.response.use(
   function (response) {
      return response
   },
   function (error) {
      return Promise.reject(error)
   }
)
