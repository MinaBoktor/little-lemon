
// Require one Prop Text

function Button(props) {

    return(
        <button disabled={props.disabled} onSubmit={props.submit} id={props.id}>{props.text}</button>
    )
}


export default Button;