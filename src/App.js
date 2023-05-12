import { useState, useMemo } from "react";
import { WordContext } from "./UseContext";
import AllRoutes from "./Routes";
import Footer from './Footer'

function App() {
  const [value, setValue] = useState([]);
  const [searchedWord, setSearchedWord] = useState("");

  const ProviderValue = useMemo(
    () => ({ value, setValue, searchedWord, setSearchedWord }),
    [value, setValue, searchedWord, setSearchedWord]
  );
  return (
    <WordContext.Provider value={ProviderValue}>
      <AllRoutes />
      <Footer />
    </WordContext.Provider>
  );
}

export default App;
