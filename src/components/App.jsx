import React, { useContext } from "react";
import { TestCharacterContext } from "../context/TestCharacterContext";
import Content from "./Content";
import NavBar from "./NavBar";
import NoResults from "./NoResults";

const { default: Footer } = require("./Footer");

function App() {
  const data = useContext(TestCharacterContext);
  return (
    <div className="App">
      <NavBar />
      {!data.data.characters ? (
        <NoResults />
      ) : (
        <>
          <Content />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
