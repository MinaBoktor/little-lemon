import Button from "./Button.js"

function Header(props) {
    return (
        <header>
            <section>
                <article>
                    <h2>{props.title}</h2>
                    <h7>{props.subtitle}</h7>
                    <p>{props.text}</p>
                    <Button text="Reserve a table" ></Button>
                </article>
                <article>
                    <img width='375' height='435' style={{borderRadius:16}} src={props.image} alt="some person cooking"></img>
                </article>
            </section>
        </header>
    )
}


export default Header;