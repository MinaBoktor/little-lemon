import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import logo from './components/media/little_logo.svg'


function App() {
  return (
    <>
      <Header ></Header>
      <Nav logo={logo}></Nav>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
