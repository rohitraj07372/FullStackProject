import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import MyGrid from "./Components/MyGrid";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />

        <MyGrid />
        <Footer />
      </div>
    </>
  );
}

export default App;
