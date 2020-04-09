import Link from 'next/link'
import bridge from '@vkontakte/vk-bridge';

bridge.send('VKWebAppInit');
bridge.subscribe(e => console.log(e));

const Index = () => (
  <div className="container">
    <h1>Hello, World! (Index)</h1>
    <Link href="/about">
      <a>About Us</a>
    </Link>
  </div>
)

export default Index
