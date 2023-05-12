import { useContext } from "react";
import { WordContext } from "../UseContext";

export default function SearchPage() {
  const { value} = useContext(WordContext);
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}
