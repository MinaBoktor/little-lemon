import Button from "./Button.js"
import {Link, Outlet} from "react-router-dom";

function Header(props) {
    return (
        <header>
            <section>
                <article>
                    <h2>{props.title}</h2>
                    <h7>{props.subtitle}</h7>
                    <p>{props.text}</p>
                    <Link to="/booking" ><Button text="Reserve a table"></Button></Link>
                </article>
                <article>
                    <img width='375' height='435' style={{borderRadius:16}} src={props.image} alt="some person cooking"></img>
                </article>
            </section>
            <Outlet></Outlet>
        </header>
    )
}


export default Header;