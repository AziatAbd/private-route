import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Footer = () => {
   return (
      <StyledFooter>
         <FooterContent>
            <FooterLinks>
               <li>
                  <StyledNavLink to="/">Home</StyledNavLink>
               </li>
               <li>
                  <StyledNavLink to="/about">About</StyledNavLink>
               </li>
            </FooterLinks>
            <Copyright>© 2024 Your Company. All rights reserved.</Copyright>
         </FooterContent>
      </StyledFooter>
   )
}

export default Footer

const StyledFooter = styled('footer')(() => ({
   background: '#1c3a63',
   color: '#fff',
   padding: '20px 0',
   textAlign: 'center',
}))

const FooterContent = styled('div')(() => ({
   maxWidth: '1200px',
   margin: '0 auto',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   flexDirection: 'column',
   gap: '10px',

   '@media (min-width: 600px)': {
      flexDirection: 'row',
   },
}))

const FooterLinks = styled('ul')(() => ({
   display: 'flex',
   listStyle: 'none',
   gap: '15px',
   padding: '0',

   '& li': {
      '& a': {
         color: '#fff',
         textDecoration: 'none',
         transition: 'color 0.3s ease',
         fontSize: '0.9rem',
      },
      '& a:hover': {
         color: '#00bfa6', // Match button color for hover effect
      },
   },
}))

const Copyright = styled('p')(() => ({
   fontSize: '0.8rem',
   opacity: '0.7',
}))

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
