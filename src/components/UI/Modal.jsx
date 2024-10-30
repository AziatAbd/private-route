import { Modal as MuiModal, styled } from '@mui/material'

const Modal = ({ open, onClose, children }) => {
   return (
      <MuiModal open={open} onClose={onClose}>
         <Content>{children}</Content>
      </MuiModal>
   )
}

export default Modal

const Content = styled('div')(() => ({
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   minWidth: 400,
   background: '#2a2a2a',
   border: '2px solid #000',
   boxShadow: 24,
   padding: '16px',
   color: 'white',
   textAlign: 'center',
}))
