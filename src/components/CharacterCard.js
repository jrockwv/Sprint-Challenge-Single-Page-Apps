import React from "react";
import styled from 'styled-components';


const CardContainer= styled.div`
display: flex;
justify-content:space-around;
align-items: center;
margin: 25px;
padding: 15px;
width:100%;
h2{
  margin: 2px;
  font-size: 1.5rem;
}
p {
  margin: 5px;
  font-size: 1.5rem;
}
img{
  border:3px dotted red;
}
`;

export default function CharacterCard( {character} ) {
  return (
    <CardContainer>
      <h2>{character.name}</h2>
      <img src= {character.image}/>
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
    </CardContainer>
  );
}
