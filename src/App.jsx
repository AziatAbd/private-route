import AppRoutes from './routes/AppRoutes.jsx'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { authActions } from './redux/auth/auth.slice.js'

function App() {
   const dispatch = useDispatch()

   useEffect(() => {
      const data = localStorage.getItem('TEST_PROJECT')

      if (data) {
         const parsedData = JSON.parse(data)

         dispatch(authActions.autoLogin(parsedData))
      }
   }, [dispatch])

   return (
      <>
         <AppRoutes />
      </>
   )
}

export default App
