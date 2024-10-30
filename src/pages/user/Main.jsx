import { styled } from '@mui/material'
import Card from '../../components/UI/Card.jsx'

const cardData = [
   {
      imageSrc:
         'https://www.arthur-conan-doyle.com/images/0/01/1939_adventuresofsh_affiche_quad.jpg',
      title: 'The Adventures of Sherlock Holmes',
   },
   {
      imageSrc:
         'https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZHclp-1JynUWnj9GdlOIvdYHUxD_rBSmk_Q53L_xPrPHOrv9tobzVvkBJCOshIp4P0hDc_3Zus-1ACtLZjGd0GF682Bf46iZQXVIk4hwY1mWsSG_9enpVAi_qNn08Nr-kAT2A.jpg?r=c68',
      title: 'Stranger Things',
   },
   {
      imageSrc: 'https://static.hbo.com/game-of-thrones-1-1920x1080.jpg',
      title: 'Game of Thrones',
   },
   {
      imageSrc:
         'https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABT6-ilIJZPo41mx2cuziG5zyjn7BWGZZgBKTF7F8eheSGHPGzL8jiYiL9ie1lExbidAdcjqVmXZtCho0A8qMgY4UP5rJEbR6qtvNG5ZP3Ls_1FEqyPQTvTMNnybGFsb202NhmA.jpg?r=844',
      title: 'The Crown',
   },
   {
      imageSrc:
         'https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      title: 'Breaking Bad',
   },
   {
      imageSrc:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTER-GVZKnv6HT78Gkw9i5GQxJUzzgxPuhrOg&s',
      title: 'The Mandalorian',
   },
   {
      imageSrc:
         'https://m.media-amazon.com/images/M/MV5BMTQ5MDU5MTktMDZkMy00NDU1LWIxM2UtODg5OGFiNmRhNDBjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      title: 'The Witcher',
   },
   {
      imageSrc:
         'https://m.media-amazon.com/images/M/MV5BZjkxZWJiNTUtYjQwYS00MTBlLTgwODQtM2FkNWMyMjMwOGZiXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg',
      title: 'Money Heist',
   },
   {
      imageSrc:
         'https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_.jpg',
      title: 'The Office',
   },
   {
      imageSrc:
         'https://m.media-amazon.com/images/M/MV5BMWY3ZjgwMTctZTZmMS00ZTMwLTkwYWEtNTVkMDgwNjA5ODBiXkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281_.jpg',
      title: 'Black Mirror',
   },
   {
      imageSrc:
         'https://img4.hulu.com/user/v3/artwork/203cda1b-7919-40fb-ab36-1e45b3ed2a50?base_image_bucket_name=image_manager&base_image=e008a5ef-4f00-444c-a57e-ab5b2b998f10&region=US&format=webp&size=952x536',
      title: 'Fargo',
   },
   {
      imageSrc:
         'https://m.media-amazon.com/images/M/MV5BMjM2MTA5NjIwNV5BMl5BanBnXkFtZTgwNjI2OTMxNTM@._V1_QL75_UX190_CR0,0,190,281_.jpg',
      title: 'Westworld',
   },
   {
      imageSrc:
         'https://m.media-amazon.com/images/M/MV5BM2ZiNThlNzItNmY3Ny00NjA2LWJlMjItNTk1NDI3MDMyMTk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      title: 'Peaky Blinders',
   },
   {
      imageSrc:
         'https://m.media-amazon.com/images/M/MV5BNzQwOTcwMzIwN15BMl5BanBnXkFtZTgwMjYxMTA0NjE@._V1_.jpg',
      title: 'Narcos',
   },
   {
      imageSrc:
         'https://m.media-amazon.com/images/S/pv-target-images/c7fc75a423fc33698265a27fe446a41026f3c8642fd6c8706c43b897d2ffb3e6.jpg',
      title: 'Friends',
   },
]

const Main = () => {
   return (
      <Container>
         <CardContainer>
            {cardData.map((card, index) => (
               <Card key={index} imageSrc={card.imageSrc} title={card.title} />
            ))}
         </CardContainer>
      </Container>
   )
}

export default Main

const Container = styled('div')(() => ({
   height: 'auto',
   margin: '0 0 100px 0',
}))

const CardContainer = styled('div')(() => ({
   display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'center',
   gap: '20px',
}))
