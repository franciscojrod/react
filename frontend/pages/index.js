import Link from 'next/link'


const Home = props => (
  <div class="my-class">
    <p>this is my prop with a link to sell</p>
    <Link href="/sell">
      <a>link to sell</a>
    </Link>
  </div>
)

export default Home;