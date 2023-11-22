import Card from './Card'
import Button from './Button'

function Main(props) {
    let greekSaladDesc = "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
    let bruchettaDesc = "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    return(
        <main>
            <div>
                <section id="text">
                    <article><h1>This Week's Specials</h1></article>
                </section>
                <section id="button"><article><Button id="order" text="Order Online"></Button></article></section>
            </div>
            <section id="cards">
                <article>
                    <Card 
                        title="Greek salad" 
                        description={greekSaladDesc}
                        imageSrc={props.cardimg1}
                        lower="Order a delivery"
                    ></Card>
                </article>
                <article>
                    <Card 
                        title="Bruchetta" 
                        description={bruchettaDesc}
                        imageSrc={props.cardimg2}
                        lower="Order a delivery"
                    ></Card>
                </article>
                <article>
                    <Card 
                        title="Lemon Dessert" 
                        description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                        imageSrc={props.cardimg3}
                        lower="Order a delivery"
                    ></Card>
                </article>
            </section>
        </main>
    )
}

export default Main;