import axios from "axios";
import { useEffect, useState } from "react";

export default function Quotes() {
  const [searchWord, setSearchWord] = useState([]);
  const [meaning, setMeaning] = useState([]);
  const [phonetics, setPhonetics] = useState([])

 

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://random-word-api.herokuapp.com/word")
        .then(function (response) {
          setSearchWord(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 1000);
  }, []);

  useEffect(() => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
    .then(
      function(response){
        setMeaning(response.data[0].meanings[0].definitions[0].definition)
        if (response.data[0].phonetic === undefined){
          setPhonetics('')
        } else {
          setPhonetics(response.data[0].phonetic)
        }
        console.log(response.data)

      }
    )
    .catch(function(error){
      console.log(error)
      if(error){
        setMeaning('')
      }
    })
  })

  return (
    <div className="quote-card">
      <p className="quote-heading">Word for you</p>
      <p className="text-3">{searchWord[0]} <span>{phonetics}</span> </p>
      <p className="quote-content">
       {meaning} 
      </p>
    </div>
  );
}
