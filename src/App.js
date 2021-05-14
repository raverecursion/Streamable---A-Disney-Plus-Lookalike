import React from "react";
// Components
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
// Styles
import "./App.css";
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css"
  rel="stylesheet"
/>;
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
