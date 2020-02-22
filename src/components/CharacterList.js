import React, { useEffect, useState } from "react";
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';


const List = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
color:black;
`

export default function CharacterList({characters}) {
  const [searchResults, setSearchResults] = useState([])
  const [searchWord, setSearchWord]= useState('')

  useEffect( () => {
    const results = characters.filter( character => {
      return character.name
    })
    setSearchResults(results)
  }, [searchWord]);

  function handleChange(event) {
    setSearchWord(event.target.value)
  }

 function handleSubmit(event) {
   event.preventDefault()
 }

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} onChange={handleChange} value={searchWord}/>
      <List>
        {searchResults.length > 0 ?
          searchResults.map( (character) => (
            <CharacterCard key={character.id} character={character}/>
          )):
          characters.map(character => (
            <CharacterCard key={character.id} character={character}/>
          ))}
      </List>
    </div>
  );
}


