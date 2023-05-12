import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import SearchPage from "./Search/Search";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="search" element={<SearchPage />} />
    </Routes>
  );
}
