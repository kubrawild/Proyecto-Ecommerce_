export const ProductCard = ({ titulo, descripcion, precio }) => {
  //  const { Titulo, Descripcion, Precio } = props;

  return (
    <div style={{ border: "2px solid steelblue" }}>
      <h2>{titulo}</h2>
      <h3>{descripcion}</h3>
      <h3>{precio}</h3>
    </div>
  );
};
