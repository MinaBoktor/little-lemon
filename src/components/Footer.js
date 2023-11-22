

function Footer(props) {
    return (
        <footer>
            <section>
                <article>
                    <img src={props.logo} alt="little lemon logo"></img>
                </article>
                <article>
                    <nav>
                        <h3>Doormat Navigation</h3>
                        <ul><a href="">Home</a></ul>
                        <ul><a href="">About</a></ul>
                        <ul><a href="">menu</a></ul>
                        <ul><a href="">Reservations</a></ul>
                        <ul><a href="">Order Online</a></ul>
                        <ul><a href="">Login</a></ul>
                    </nav>
                </article>
                <article>
                    <nav>
                        <h3>Social Media Links</h3>
                        <ul><a href="">Adress</a></ul>
                        <ul><a href="">phone number</a></ul>
                        <ul><a href="">email</a></ul>
                    </nav>
                </article>
                <article>
                    <nav>
                        <h3>Contact</h3>
                        <ul><a href="">Adress</a></ul>
                        <ul><a href="">phone number</a></ul>
                        <ul><a href="">email</a></ul>
                    </nav>
                </article>
            </section>
            
        </footer>
    )
}

export default Footer;