import "./Sass/main.css";
import Quotes from "./quotes/Quotes";
import { useContext, useState } from "react";
import { WordContext } from "./UseContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Main() {
  const { setValue, searchedWord, setSearchedWord } = useContext(WordContext);
  let navigate = useNavigate();
  // "gourmandise"
  const handleClick = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`)
      .then(function (response) {
        setValue(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate("/search");
  };

  const handlechange = (e) => {
    setSearchedWord(e.target.value);
    console.log(e.tagret.value);
  };
  return (
    <div className="container">
      <div className="text-3">Debs Dictionary</div>
      <div className="text-1">What word do you want to search?</div>
      <form className="search-input">
        <input
          value={searchedWord}
          name="searchedWord"
          onChange={(e) => setSearchedWord(e.target.value)}
        />
        <button onClick={handleClick}>Search</button>
      </form>
      <Quotes />
    </div>
  );
}

export default Main;
