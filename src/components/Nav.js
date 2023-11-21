

function Nav(props) {
    return (
        <nav>
            <img src={props.logo} alt="little_lemon_logo"></img>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Menu</a></li>
            <li><a href=''>Reservations</a></li>
            <li><a href=''>Order Online</a></li>
            <li><a href=''>Login</a></li>
        </nav>
    )
}


export default Nav;