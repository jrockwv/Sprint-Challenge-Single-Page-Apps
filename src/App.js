import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import axios from 'axios';

export default function App() {
const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharacters(response.data.results)
    })
    .catch(error => console.log('oops you got an error', error));
  }, []);
  return (
    <main>
      <Header />
    </main>
  );
}
