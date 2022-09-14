import { Home } from './components/home/Home';
import './components/Body.scss';
import { Header } from './components/header/Header';
import { About } from './components/about/About';
import { Main } from './components/Main';

function App() {
  return (
    <>
    <Header/>
    {/* <Home/>
    <About/> */}
    <Main/>
    </>
  );
}

export default App;
