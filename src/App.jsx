import { useState } from "react";
import Navbar from "./components/Navbar";
import Newsboard from "./components/Newsboard";

function  App() {

    const [category, setCategory] = useState("");
  return <>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category} />
  </>
}

export default App;
