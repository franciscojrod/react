import Link from 'next/link'


const Sell = props => (
  <div class="my-class">
    <p>prop link to home</p>
    <Link href="/">
      <a>link to home</a>
    </Link>
  </div>
)

export default Sell;