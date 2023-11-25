import {Link} from "react-router-dom";


function Nav(props) {
    return (
        <nav>
            <img src={props.logo} alt="little_lemon_logo"></img>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </nav>
    )
}


export default Nav;