import { styled } from '@mui/material'
import Button from '../../components/UI/Button.jsx'

const About = () => {
   return (
      <PageContainer>
         <Section>
            <Title>About Our Project</Title>
            <Description>
               This application is designed to provide a streamlined experience
               for browsing and exploring shows. Each card highlights a show
               with a unique style, allowing users to discover new and popular
               series.
            </Description>
            <Button variant="primary">Learn More</Button>
         </Section>

         <Section>
            <SubTitle>Features</SubTitle>
            <FeatureList>
               <Feature>Interactive and responsive card designs.</Feature>
               <Feature>High-quality visuals with hover effects.</Feature>
               <Feature>Dark theme for a modern viewing experience.</Feature>
               <Feature>Styled components for customizable design.</Feature>
            </FeatureList>
         </Section>

         <Section>
            <SubTitle>Our Team</SubTitle>
            <Description>
               Our dedicated team of developers and designers work together to
               bring you the best user experience. We are passionate about
               technology, design, and storytelling, ensuring that each feature
               is crafted to enhance your experience.
            </Description>
         </Section>
      </PageContainer>
   )
}

export default About

// Styled Components
const PageContainer = styled('div')(() => ({
   maxWidth: '800px',
   margin: '0 auto',
   padding: '20px',
   color: '#f5f5f5',
}))

const Section = styled('section')(() => ({
   marginBottom: '40px',
   padding: '20px',
   borderRadius: '8px',
   backgroundColor: '#1f1f2e',
}))

const Title = styled('h1')(() => ({
   fontSize: '2rem',
   marginBottom: '10px',
}))

const SubTitle = styled('h2')(() => ({
   fontSize: '1.5rem',
   marginBottom: '10px',
}))

const Description = styled('p')(() => ({
   fontSize: '1rem',
   marginBottom: '20px',
   lineHeight: '1.6',
}))

const FeatureList = styled('ul')(() => ({
   padding: '0',
   listStyleType: 'none',
}))

const Feature = styled('li')(() => ({
   fontSize: '1rem',
   lineHeight: '1.6',
   paddingLeft: '20px',
   position: 'relative',

   '&::before': {
      content: '"•"',
      color: '#03dac5',
      fontWeight: 'bold',
      display: 'inline-block',
      width: '20px',
      marginLeft: '-20px',
   },
}))
