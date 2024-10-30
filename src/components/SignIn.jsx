import Modal from './UI/Modal.jsx'
import Input from './UI/Input.jsx'
import Button from './UI/Button.jsx'
import { styled } from '@mui/material'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from './UI/Spinner.jsx'
import { signInRequest } from '../redux/auth/auth.thunk.js'
import { useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
   email: yup.string().email().required(),
   password: yup.string().min(6).max(32).required(),
})

const SignIn = ({ open, onClose }) => {
   const dispatch = useDispatch()
   const { isLoading, error } = useSelector((state) => state.auth)

   const navigate = useNavigate()

   const {
      handleSubmit,
      register,
      formState: { errors },
   } = useForm({
      defaultValues: {
         email: '',
         password: '',
      },
      resolver: yupResolver(schema),
   })

   const submitHandler = (values) => {
      dispatch(signInRequest({ userData: values, onClose, navigate }))
   }

   return (
      <Modal open={open} onClose={onClose}>
         <h1>Sign In</h1>
         <Form onSubmit={handleSubmit(submitHandler)}>
            <Input
               label={'Email'}
               error={!!errors.email?.message}
               helperText={errors.email?.message}
               type={'email'}
               {...register('email')}
            />
            <Input
               label={'Password'}
               error={!!errors.password?.message}
               helperText={errors.password?.message}
               type={'password'}
               {...register('password')}
            />

            {error && <p>{error}</p>}

            <BtnContainer>
               <Button variant={'outline'} onClick={onClose}>
                  Close
               </Button>
               <Button type="submit" disabled={isLoading}>
                  {isLoading ? <Spinner /> : 'Sign In'}
               </Button>
            </BtnContainer>
         </Form>
      </Modal>
   )
}

export default SignIn

const Form = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '30px',
   margin: '0 0 31px 0',
}))

const BtnContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '10px',
}))
