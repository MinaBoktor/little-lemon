
import React from "react";

const Card1 = ({ title, description, imageSrc, lower, width, height}) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <article style={{backgroundColor:'grey', borderRadius:10, position:"relative"}}>
      <img src={imageSrc} alt={title} style={{width:"100%", objectFit:'cover', height:150, borderRadius:10}} />
      <h4 style={{fontWeight:900, color:'black', fontSize:20, padding:10}}>{title}</h4>
      <p style={{color:'white', fontSize:13, paddingLeft:10, paddingRight:10, paddingBottom:10}}>{description}</p>
      <p style={{color:'black', fontSize:12, padding:10, fontWeight:500, position:"absolute"}}>{lower}</p>
    </article>
      
)};

export default Card1;