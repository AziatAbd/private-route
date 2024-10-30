import Button from './UI/Button.jsx'
import { styled } from '@mui/material'
import { useState } from 'react'
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../redux/auth/auth.slice.js'

const Header = () => {
   const dispatch = useDispatch()
   const { userData } = useSelector((state) => state.auth)

   const [signIn, setSignIn] = useState(false)
   const [signUp, setSignUp] = useState(false)

   const toggleSignIn = () => {
      setSignIn((prevState) => !prevState)
   }

   const toggleSignUp = () => {
      setSignUp((prevState) => !prevState)
   }

   const logoutHandler = () => {
      dispatch(authActions.logOut())
   }

   return (
      <>
         <StyledHeader>
            <h1>LOGO</h1>
            <List>
               <ListItem>
                  <StyledNavLink to={'/'}>Main</StyledNavLink>
               </ListItem>
               <ListItem>
                  <StyledNavLink to={'/about'}>About</StyledNavLink>
               </ListItem>
               {userData.isAuth ? (
                  <>
                     <ListItem>
                        <StyledNavLink to={'/profile'}>Profile</StyledNavLink>
                     </ListItem>
                     <Button onClick={logoutHandler}>Log out</Button>{' '}
                  </>
               ) : (
                  <>
                     <ListItem>
                        <Button onClick={toggleSignIn}>Sign in</Button>
                     </ListItem>
                     <ListItem>
                        <Button onClick={toggleSignUp}>Sign up</Button>
                     </ListItem>
                  </>
               )}
            </List>
         </StyledHeader>

         {signIn && <SignIn open={signIn} onClose={toggleSignIn} />}
         {signUp && <SignUp open={signUp} onClose={toggleSignUp} />}
      </>
   )
}

export default Header

const StyledHeader = styled('header')(() => ({
   padding: '0 50px',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   background: '#1c3a63',
   color: '#fff',
   margin: '0 0 100px 0',
}))

const List = styled('ul')(() => ({
   display: 'flex',
   alignItems: 'center',
   listStyle: 'none',
   gap: '20px',
   padding: '0',
}))

const ListItem = styled('li')(() => ({}))

const StyledNavLink = styled(NavLink)(() => ({
   cursor: 'pointer',
   fontSize: '1.1rem',
   transition: 'color 0.3s ease',
   textDecoration: 'none',
   color: '#fff',
   '&:hover': {
      color: '#ffd700',
   },

   '&.active': {
      color: '#ffd700',
   },
}))
