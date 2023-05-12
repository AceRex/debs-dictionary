import { useContext } from "react";
import { WordContext } from "../UseContext";

export default function SearchPage() {
  const { value, searchedWord } = useContext(WordContext);
  return (
    <div className="container">
      <div className="text-3">Debs Dictionary</div>

      <h1 className="text-1">{searchedWord}</h1>
      {value.map(({ word, meanings, phonetic, phonetics, searchedWord }) => {
        return (
          <div key={word}>
            {phonetic}
            {phonetics.map(({ text, audio }) => text)}
            {meanings.map(
              ({ partOfSpeech, definitions, synonyms, antonyms }) => {
                return (
                  <div key={partOfSpeech}>
                    {partOfSpeech}
                    {definitions.map(
                      ({ definition, example, antonyms, synonyms }) => (
                        <div key={definition}>
                          {definition}
                          {example}
                          {antonyms}
                          {synonyms}
                        </div>
                      )
                    )}
                    {synonyms.map((synonym) => synonym)}
                    {antonyms.map((antonym) => antonym)}
                  </div>
                );
              }
            )}
          </div>
        );
      })}
    </div>
  );
}
