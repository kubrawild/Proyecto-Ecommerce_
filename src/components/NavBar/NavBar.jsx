import CartWidget from "../cartWidget/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="contenedor">
      <img
        src="https://res.cloudinary.com/dm2v8xdbc/image/upload/v1718469894/69328368-icono-de-camisa-o-logotipo-en-estilo-de-l%C3%ADnea-moderna-pictograma-de-contorno-negro-de-alta-calidad_h2qhtr.jpg"
        alt=""
        style={{
          width: "125px",
          height: "125px",
          objectFit: "cover",
        }}
      />
      <ul className="categorias">
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
