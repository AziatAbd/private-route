import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material'

const StyledButton = styled(MuiButton)(({ variant }) => ({
   borderRadius: '8px',
   transition: 'background-color 0.3s, color 0.3s',

   '&.Mui-disabled': {
      backgroundColor: '#cfcfcf',
      color: '#909090',
      pointerEvents: 'none',
   },

   ...(variant === 'primary' && {
      backgroundColor: '#6200ea',
      color: '#ffffff',
      '&:hover': {
         backgroundColor: '#3700b3',
      },
   }),

   ...(variant === 'secondary' && {
      backgroundColor: '#03dac5',
      color: '#000000',
      '&:hover': {
         backgroundColor: '#018786',
      },
   }),

   ...(variant === 'outline' && {
      border: '2px solid #6200ea',
      backgroundColor: 'transparent',
      color: '#6200ea',
      '&:hover': {
         backgroundColor: '#f5f5f5',
      },
   }),

   ...(variant === 'disabled' && {
      backgroundColor: '#cfcfcf',
      color: '#909090',
      pointerEvents: 'none',
   }),
}))

const Button = ({ children, variant = 'primary', ...props }) => {
   return (
      <StyledButton variant={variant} {...props}>
         {children}
      </StyledButton>
   )
}

export default Button
