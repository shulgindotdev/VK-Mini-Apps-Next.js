import bridge from '@vkontakte/vk-bridge';

bridge.send('VKWebAppInit');
bridge.subscribe(e => console.log(e));

const Index = () => (
  <div className="container">
    <h1>Hello, World!</h1>
  </div>
)

export default Index
