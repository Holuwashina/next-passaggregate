import { GetStaticProps, GetStaticPaths } from 'next'
import SlugHero from '../components/SlugHero'
import { PlatformsDfn } from '../utils/types';

const Home = ({platform}) => {
    console.log(platform.platformList)
    return (
        <div>
            <SlugHero />
        </div>
    )
}


//http://json-db-passa.herokuapp.com/platforms
export const getStaticProps: GetStaticProps = async ({params: {slug}}) => {
    console.log(slug)
    //Fetch the platform 
    const platform_res = await fetch(`http://localhost:4000/platforms/?slug=${slug}`)
    const found = await platform_res.json()

    //Return the platform as props
    return {
        props: {
            platform: found[0]
        }
    }
}


export async function getStaticPaths() {
    const platform_res = await fetch('http://localhost:4000/platforms')
    const platforms = await platform_res.json()
    console.log(platforms.platformList)


    //Return the platform as props
    return {
        paths: platforms[0].platformList.map(value => ({
            params: { slug: String(value.name) }
        })),
        fallback: false
    }
}       

export default Home