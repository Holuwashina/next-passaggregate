import { GetStaticProps } from 'next'
import Hero from '../components/Hero'
import HeroNote from '../components/HeroNote'
import Platform from '../components/Platform'
import { PlatformsDfn } from '../utils/types'


const Home = ({ platforms }: PlatformsDfn) => {
  // platforms[0].platformList.map((e) => {
  //   console.log(e.name)
  // })
  return (
    <div>
      <Hero />
      <HeroNote />
      <Platform platforms={platforms} />
    </div>
  )
}

//http://json-db-passa.herokuapp.com/platforms
export const getStaticProps: GetStaticProps = async () => {
  //Fetch the platform 
  const platform_res = await fetch('http://json-db-passa.herokuapp.com/platforms')
  const platforms = await platform_res.json()

  //Return the platform as props
  return {
    props: {
      platforms
    }
  }
}

export default Home
