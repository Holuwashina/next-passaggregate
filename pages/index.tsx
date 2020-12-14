import { GetStaticProps } from 'next'
import Hero from '../components/Hero'
import HeroNote from '../components/HeroNote'
import Platform from '../components/Platform'
import { PlatformsDfn } from '../utils/types'


const Home = ({ platforms }: PlatformsDfn) => {
  return (
    <>
      <Hero />
      <HeroNote />
      <Platform platforms={platforms} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  //Fetch the platform 
  const platform_res = await fetch('http://localhost:4000/platforms/')
  const platforms = await platform_res.json()

  if (!platforms) {
    return {
      notFound: true,
    }
  }

  //Return the platform as props
  return {
    props: {
      platforms
    }
  }
}

export default Home
