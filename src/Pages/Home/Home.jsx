import { ProductCard } from "../../components/ProductCard/ProductCard";

export const Home = () => {
  const productos = [
    {
      titulo: "Camiseta Deportiva",
      precio: 25.99,
      descripcion: "Camiseta ligera y transpirable, ideal para hacer deporte.",
    },
    {
      titulo: "Auriculares Inalámbricos",
      precio: 59.99,
      descripcion:
        "Auriculares con cancelación de ruido y batería de larga duración.",
    },
    {
      titulo: "Mochila Escolar",
      precio: 34.99,
      descripcion: "Mochila espaciosa y resistente, perfecta para estudiantes.",
    },
    {
      titulo: "Reloj Inteligente",
      precio: 120.0,
      descripcion:
        "Reloj inteligente con monitor de actividad física y notificaciones.",
    },
    {
      titulo: "Libro de Cocina",
      precio: 18.5,
      descripcion:
        "Libro con recetas fáciles y saludables para toda la familia.",
    },
  ];

  return (
    <div>
      <ProductCard
        titulo={productos[0].titulo}
        descripcion={productos[0].descripcion}
        precio={productos[0].precio}
      />
      <ProductCard
        titulo={productos[1].titulo}
        descripcion={productos[1].descripcion}
        precio={productos[1].precio}
      />
    </div>
  );
};
