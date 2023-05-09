import axios from "axios";
import { useEffect, useState } from "react";

export default function Quotes() {
  const [word, setWord] = useState([]);
 

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
    }, 30000);
  });

  return (
    <div className="quote-card">
      <p className="quote-heading">Word for you</p>
      <p className="text-3">{word[0]} </p>
      <p className="quote-content">
        One forgets words as one forgets names. One’s vocabulary needs constant
        fertilizing or it will die.
      </p>
      <p className="quote-by">~ Evelyn Waugh</p>
    </div>
  );
}
