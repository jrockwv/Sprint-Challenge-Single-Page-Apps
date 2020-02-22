import React from "react";
import styled from 'styled-components';


const CardContainer= styled.div`
display: flex;
align-items: center;
margin: 15px;
padding: 15px;
width: 400px;
border-radius: 20px;
h2{
}
img{
  border:3px solid green;
}
`

export default function CharacterCard({character}) {
  return (
    <CardContainer>
      <h2>{character.name}</h2>
      <img src= {character.image}/>
    </CardContainer>
  )
}
