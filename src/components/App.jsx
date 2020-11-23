import Content from "./Content";
import NavBar from "./NavBar";

const { default: Footer } = require("./Footer");

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
