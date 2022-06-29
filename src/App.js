import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import SupportBlockChain from './components/supportBlockChain';
import OurTools from './components/ourTools';
import UnxUncl from './components/unx_uncl';
import Unicrypt_team from './components/unicrypt_team';
import Footer from './components/footer';

function App() {
  return (<>
    <Navbar/>
    <SupportBlockChain/>
    <OurTools/>
    <UnxUncl/>
    <Unicrypt_team/>
    <Footer/>
    </>
  );
}

export default App;
