import Button from '../../components/UI/Button.jsx'
import Input from '../../components/UI/Input.jsx'
import { styled } from '@mui/material'

const Profile = () => {
   return (
      <PageContainer>
         <Header>
            <h1>User Profile</h1>
            <Button variant="secondary">Edit Profile</Button>
         </Header>

         <Section>
            <SectionTitle>Personal Information</SectionTitle>
            <ProfileItem>
               <Label>Full Name</Label>
               <Input defaultValue="John Doe" fullWidth />
            </ProfileItem>

            <ProfileItem>
               <Label>Email Address</Label>
               <Input defaultValue="johndoe@example.com" />
            </ProfileItem>

            <ProfileItem>
               <Label>Phone Number</Label>
               <Input defaultValue="+1234567890" />
            </ProfileItem>
         </Section>

         <Section>
            <SectionTitle>Account Settings</SectionTitle>
            <ProfileItem>
               <Label>Password</Label>
               <Input
                  variant="outlined"
                  size="small"
                  type="password"
                  defaultValue="********"
                  fullWidth
               />
            </ProfileItem>

            <ProfileItem>
               <Button variant="primary">Change Password</Button>
            </ProfileItem>
         </Section>
      </PageContainer>
   )
}

export default Profile

const PageContainer = styled('div')(() => ({
   maxWidth: '800px',
   margin: '0 auto',
   padding: '20px',
   color: '#f5f5f5',
   display: 'flex',
   flexDirection: 'column',
   gap: '30px',
}))

const Header = styled('header')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   paddingBottom: '20px',
   borderBottom: '2px solid #3f3f4f',
}))

const Section = styled('section')(() => ({
   padding: '20px',
   borderRadius: '8px',
   backgroundColor: '#1f1f2e',
}))

const SectionTitle = styled('h2')(() => ({
   fontSize: '1.5rem',
   marginBottom: '10px',
}))

const ProfileItem = styled('div')(() => ({
   marginBottom: '15px',
}))

const Label = styled('label')(() => ({
   display: 'block',
   fontSize: '0.9rem',
   marginBottom: '5px',
   color: '#bbbbbb',
}))
