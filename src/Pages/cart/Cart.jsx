// src/components/CartWidget.js
import React from "react";

const CartWidget = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
        alt="Cart"
        style={{ width: "24px", height: "24px" }}
      />
      <span style={{ marginLeft: "8px" }}>3</span>{" "}
      {/* Ejemplo de un contador de artículos en el carrito */}
    </div>
  );
};

export default CartWidget;
