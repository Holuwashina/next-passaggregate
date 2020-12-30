import { GetStaticProps } from 'next'
import Hero from '../components/Hero'
import HeroNote from '../components/HeroNote'
import Platform from '../components/Platform'
import { Platforms } from '../utils/types'

type Props = {
  platforms: Platforms[];
};

const Home = ({ platforms }: Props ) => {
  return (
    <>
      <Hero />
      <HeroNote />
      <Platform platforms={platforms} />
    </>
  )
}

//http://json-db-passa.herokuapp.com/platforms
export const getStaticProps: GetStaticProps = async () => {
  //Fetch the platform 
  const platform_res = await fetch('http://json-db-passa.herokuapp.com/platforms')
  const platforms: Platforms[] = await platform_res.json()

  //Return the platform as props
  return {
    props: {
      platforms
    }
  }
}

export default Home
