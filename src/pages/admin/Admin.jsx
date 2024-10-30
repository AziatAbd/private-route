import Button from '../../components/UI/Button.jsx'
import { useDispatch } from 'react-redux'
import { authActions } from '../../redux/auth/auth.slice.js'

const Admin = () => {
   const dispatch = useDispatch()

   const logOutHandler = () => {
      dispatch(authActions.logOut())
   }

   return (
      <div>
         <h1 style={{ color: '#fff' }}>Admin page</h1>
         <Button onClick={logOutHandler}>Log out</Button>
      </div>
   )
}

export default Admin
