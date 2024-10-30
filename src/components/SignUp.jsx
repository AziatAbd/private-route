import Modal from './UI/Modal.jsx'
import Input from './UI/Input.jsx'
import Button from './UI/Button.jsx'
import { styled } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { signUpRequest } from '../redux/auth/auth.thunk.js'
import Spinner from './UI/Spinner.jsx'

const inputArr = [
   {
      name: 'name',
      type: 'string',
      label: 'Name',
   },
   {
      name: 'email',
      type: 'email',
      label: 'Email',
   },
   {
      name: 'password',
      type: 'password',
      label: 'Password',
   },
]

const schema = yup.object().shape({
   name: yup.string().required(),
   email: yup.string().email().required(),
   password: yup.string().min(8).max(32).required(),
})

const SignUp = ({ open, onClose }) => {
   const dispatch = useDispatch()
   const { isLoading } = useSelector((state) => state.auth)

   const {
      handleSubmit,
      register,
      formState: { errors },
   } = useForm({
      defaultValues: {
         name: '',
         email: '',
         password: '',
      },
      resolver: yupResolver(schema),
   })

   const submitHandler = (values) => {
      dispatch(signUpRequest({ userData: values, onClose }))
   }

   return (
      <Modal open={open} onClose={onClose}>
         <h1>Sign Up</h1>
         <Form action="" onSubmit={handleSubmit(submitHandler)}>
            {inputArr.map((input) => (
               <Input
                  key={input.name}
                  label={input.label}
                  error={!!errors[input.name]?.message}
                  helperText={errors[input.name]?.message}
                  {...register(input.name)}
               />
            ))}

            <BtnContainer>
               <Button variant={'outline'} onClick={onClose}>
                  Close
               </Button>
               <Button type="submit" disabled={isLoading}>
                  {isLoading ? <Spinner /> : 'Sign Up'}
               </Button>
            </BtnContainer>
         </Form>
      </Modal>
   )
}

export default SignUp

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
