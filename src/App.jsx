import { useState } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import ItemListContainer from "./Pages/Home/itemListContainer/ItemListContainer";
import LoginContainer from "./Pages/login/LoginContainer";

function App() {
  const [estaMontado, setEstaMontado] = useState(false);

  const montarDesmontar = () => {
    setEstaMontado(!estaMontado);
  };

  return (
    <>
      <NavBar />

      <LoginContainer />

      {estaMontado ? <ItemListContainer greeting={"Hola como estas?"} /> : null}

      <button onClick={montarDesmontar}>montar / desmontar</button>
    </>
  );
}

export default App;
