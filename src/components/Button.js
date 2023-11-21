
// Require two Props (Style and Text)

function Button(props) {
    return(
        <button style={props.style}>{props.text}</button>
    )
}


export default Button;