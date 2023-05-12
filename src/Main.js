import "./Sass/main.css";
import Quotes from "./quotes/Quotes";
import { useContext } from "react";
import { WordContext } from "./UseContext";
import { useNavigate } from "react-router-dom";

function Main() {
  const { value, setValue } = useContext(WordContext);
  let navigate = useNavigate();

  const handleClick = () => {
    setValue("Hello from Here");
    navigate("/search");
  }
  return (
    <div className="container">
      <div className="text-3">Debs Dictionary</div>
      <div className="text-1">What word do you want to search?</div>
      <form className="search-input">
        <input />
        <button onClick={handleClick}>
          Search
        </button>
      </form>
      <Quotes />
    </div>
  );
}

export default Main;
