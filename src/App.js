import { useState, useMemo } from "react";
import { WordContext } from "./UseContext";
import AllRoutes from "./Routes";

function App() {
  const [value, setValue] = useState("");
  const ProviderValue = useMemo(() => ({ value, setValue }), [value, setValue]);
  return (
    <WordContext.Provider value={ProviderValue}>
      <AllRoutes />
    </WordContext.Provider>
  );
}

export default App;
