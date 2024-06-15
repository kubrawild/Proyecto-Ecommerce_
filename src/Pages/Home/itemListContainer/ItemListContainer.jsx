import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const itemListContainer = ({ greeting, a, b, c, d }) => {
  const [numero, setNumero] = useState(0);
  const [misProductos, setMisProductos] = useState([]);
  const [nombre, setNombre] = useState("martin");

  useEffect(() => {
    console.log("me ejecute");
    const productos = [
      {
        nombre: "Laptop",
        precio: 1200,
        cantidad: 5,
      },
      {
        nombre: "Teléfono",
        precio: 800,
        cantidad: 10,
      },
      {
        nombre: "Monitor",
        precio: 300,
        cantidad: 7,
      },
    ];

    setMisProductos(productos);
  }, [nombre]); // array de dependencia

  console.log(misProductos);

  const sumar = () => {
    setNumero(numero + 1);
  };

  const cambiarNombre = () => {
    setNombre("martin");
  };

  return (
    <ItemList
      greeting={greeting}
      sumar={sumar}
      cambiarNombre={cambiarNombre}
      numero={numero}
    />
  );
};

export default itemListContainer;
