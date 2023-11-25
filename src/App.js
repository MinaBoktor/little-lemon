import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import logo from './components/media/little_logo.svg'
import cooker from './components/media/restauranfood.jpg'
import greek_salad from './components/media/greek salad.jpg'
import bruchetta from './components/media/bruchetta.svg'
import lemon_dessert from './components/media/lemon dessert.jpg'
import { BrowserRouter } from 'react-router-dom';


function App() {
  const description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
  return (
    <>
      <BrowserRouter>
        <Nav logo={logo}></Nav>
        <Header title={"Little Lemon"} subtitle={"Chicago"} text={description} image={cooker}></Header>
        <Main cardimg1={greek_salad} cardimg2={bruchetta} cardimg3={lemon_dessert}></Main>
        <Footer logo={logo}></Footer>
      </BrowserRouter>

    </>
  );
}

export default App;
