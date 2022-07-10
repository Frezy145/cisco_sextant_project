
import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';
import Fetch from './components/Fetch';
import Client from './components/Client';

function App() {
  return (
    <div className="App">
    
        <Banner />
        
        <div className="App-components">
          <Card title='IPv4 address'>
            <Fetch url='https://api.ipify.org?format=json' />
          </Card>
          
          <Card title='IPv6 address'>
            <Fetch url='https://api64.ipify.org?format=json'/>
          </Card>
          
          <Card title='Pylon latency'>
            <Client />
          </Card>
        </div>
    </div>
  );
}

export default App;
