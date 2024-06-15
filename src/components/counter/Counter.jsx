import { ProductCard } from "../ProductCard/ProductCard";

export const Counter = ({ Restar, contador, Sumar }) => {
  return (
    <div>
      <button onClick={Restar}>Restar</button>
      <h2> {contador} </h2>
      <button onClick={Sumar}>Sumar</button>
      <ProductCard
        titulo="Venta de x"
        descripcion="se vende"
        precio={contador}
      />
    </div>
  );
};
