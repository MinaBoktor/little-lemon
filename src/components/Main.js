import {Routes, Route} from 'react-router-dom'
import HomePage from './HomePage'
import BookingPage from './BookingPage';


function Main(props) {
    return(
        <main>
            <Routes>
                <Route path="/" element={<HomePage cardimg1={props.cardimg1} cardimg2={props.cardimg2} cardimg3={props.cardimg3}></HomePage>}></Route>
                <Route path="/booking" element={<BookingPage></BookingPage>}></Route>
            </Routes>
        </main>
    )
}

export default Main;