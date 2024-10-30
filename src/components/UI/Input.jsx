import { TextField } from '@mui/material'
import { styled } from '@mui/material'
import { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ label, variant = 'outlined', ...props }, ref) => {
   return (
      <StyledTextField label={label} variant={variant} ref={ref} {...props} />
   )
})

export default Input

const StyledTextField = styled(TextField)(() => ({
   width: '100%',

   '& .MuiOutlinedInput-root': {
      borderRadius: '6px',
      '& fieldset': {
         borderColor: '#ccc', // Default border color
         transition: '300ms',
      },
      '&:hover fieldset': {
         transition: '300ms',
         borderColor: '#8a2be2', // Purple on hover
      },
      '& .Mui-focused fieldset': {
         borderColor: '#00bfa6', // Teal on focus
         boxShadow: '0px 0px 8px rgba(0, 191, 166, 0.3)',
      },
      '& .MuiInputBase-input': {
         padding: '10px',
         color: '#fff',
      },
   },

   '& .MuiInputLabel-root': {
      color: '#666',
      fontSize: '0.9rem',
      top: '-5px',
   },
   '& .MuiInputLabel-root.Mui-focused': {
      color: '#00bfa6', // Label color on focus
   },
}))
