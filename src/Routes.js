import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import SearchPage from "./Search/Search";
import { useContext } from "react";
import { WordContext } from "./UseContext";
import { useNavigate } from "react-router-dom";

export default function AllRoutes() {
  const { searchedWord } = useContext(WordContext);
  let navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="search" element={<SearchPage />} />
    </Routes>
  );
}
