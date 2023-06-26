import Router from "./routes";
import Header from "./components/Header";
import React from "react";

export const FirstContext = React.createContext("");

function App() {
  return (
    <>
      <FirstContext.Provider value = "Primeiro valor Context">
      <Header />
      <Router />
      </FirstContext.Provider>
    </>
  );
}

export default App;
