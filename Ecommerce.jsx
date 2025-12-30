import React, { useState } from "react";

function Ecommerce() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Headphones", price: 2000 },
    { id: 3, name: "Smartphone", price: 30000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(product.name + " added to cart");
  };

  return (
    <div style={styles.container}>
      {/* Product Listing */}
      <div style={styles.products}>
        <h2>Products</h2>
        {products.map((p) => (
          <div key={p.id} style={styles.productCard}>
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div style={styles.cart}>
        <h2>Cart</h2>
        {cart.length === 0 && <p>No items in cart</p>}
        {cart.map((item, index) => (
          <p key={index}>
            {item.name} - ₹{item.price}
          </p>
        ))}

        {cart.length > 0 && (
          <h3>
            Total: ₹
            {cart.reduce((sum, item) => sum + item.price, 0)}
          </h3>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "30px",
    padding: "20px",
    flexWrap: "wrap",
  },
  products: {
    flex: 2,
    minWidth: "280px",
  },
  productCard: {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  cart: {
    flex: 1,
    minWidth: "250px",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
  },
};

export default Ecommerce;
