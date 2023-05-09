import axios from "axios";
import { useEffect, useState } from "react";

export default function Quotes() {
  const [word, setWord] = useState([]);
  const [meaning, setMeaning] = useState([])
 

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://random-word-api.herokuapp.com/word")
        .then(function (response) {
          setWord(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 1000);
  }, []);

  useEffect(() => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(
      function(response){
        setMeaning(response.data[0].meanings[0].definitions[0].definition)
        if (response.data[0].length >= 2){
          console.log('more than 2')
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
      <p className="text-3">{word[0]} </p>
      <p className="quote-content">
       {meaning}
      </p>
      <p className="quote-by">~ Evelyn Waugh</p>
    </div>
  );
}
