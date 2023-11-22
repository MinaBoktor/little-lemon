
// Require one Prop Text

function Button(props) {

    return(
        <button id={props.id}>{props.text}</button>
    )
}


export default Button;