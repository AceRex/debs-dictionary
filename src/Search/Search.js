import { useContext } from "react";
import { WordContext } from "../UseContext";

export default function SearchPage() {
  const { value, searchedWord } = useContext(WordContext);

  return (
    <div className="container">
      <div className="text-3">Debs Dictionary</div>
      <div className="heading">
        <h1>{searchedWord}</h1>
        {value.map(({ phonetic }) => (
          <div className="phonetic">{phonetic}</div>
        ))}
      </div>
      {value.map(({ word, meanings }) => {
        return (
          <div key={word}>
            <div className="meanings">
              {meanings.map(
                ({ partOfSpeech, definitions, synonyms, antonyms }) => {
                  return (
                    <div key={partOfSpeech} className="meaning-card">
                      <p>{partOfSpeech}</p>
                      {definitions.map(
                        ({ definition, example, antonyms, synonyms }) => (
                          <div key={definition}>
                            {definition ? (
                              <div className="definition">
                                <p>Definition</p>
                                {definition}
                              </div>
                            ) : (
                              ""
                            )}
                            {example ? (
                              <div className="example">
                                <p>Example</p>
                                {example}
                              </div>
                            ) : (
                              ""
                            )}

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
          </div>
        );
      })}
    </div>
  );
}
