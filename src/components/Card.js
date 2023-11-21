import { Heading, HStack, Image, Text, VStack, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card1 = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <article style={{backgroundColor:'white', borderRadius:10}}>
      <img src={imageSrc} alt={title} style={{width:"100%", borderRadius:10}} />
      <h4 style={{fontWeight:900, color:'black', fontSize:20, padding:10}}>{title}</h4>
      <p style={{color:'grey', fontSize:13, paddingLeft:10, paddingRight:10, paddingBottom:10}}>{description}</p>
      <p style={{color:'black', fontSize:12, padding:10, fontWeight:400}}>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></p>
    </article>
      
)};

export default Card1;