import type { NextPage } from 'next'

export async function getStaticProps(){
  const products = [1,2,3]
  return {
    props: {

    }
  }
}
const Home: NextPage = () => {
  return (
    <div>
      Hello khoubaib
    </div>
  )
}

export default Home
