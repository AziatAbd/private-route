import { styled } from '@mui/material'

const Card = ({ imageSrc, title }) => {
   return (
      <StyledCard>
         <Image src={imageSrc} alt={title} />
         <Title>{title}</Title>
      </StyledCard>
   )
}

export default Card

const StyledCard = styled('div')(() => ({
   width: '100%',
   maxWidth: '300px',
   borderRadius: '12px',
   overflow: 'hidden',
   backgroundColor: '#ffffff',
   boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
   transition:
      'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
   cursor: 'pointer',

   '&:hover': {
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
      transform: 'translateY(-5px)',
      backgroundColor: '#f0f0f0',
   },
}))

const Image = styled('img')(() => ({
   width: '100%',
   height: '400px',
   transition: 'transform 0.3s ease',
   objectFit: 'cover',

   '&:hover': {
      transform: 'scale(1.05)',
   },
}))

const Title = styled('h3')(() => ({
   margin: '10px 0',
   padding: '0 10px',
   color: '#333', // Darker color for title
   fontSize: '1.1rem',
   textAlign: 'center',
}))
