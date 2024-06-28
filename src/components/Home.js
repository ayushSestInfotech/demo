"use client"
import { useState } from "react";

const Home = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      quantity: 2,
    },
    {
      id: 2,
      name: "Product 2",
      price: 9.99,
      quantity: 1,
    },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: parseInt(quantity) || 0 };
        }
        return item;
      })
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Shopping Cart
      </h2>
      <ul className="list-none mb-6">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-white shadow-md p-4 rounded-md mb-4">
            <span className="text-xl font-semibold text-gray-700">{item.name}</span>
            <span className="text-xl font-semibold text-gray-700">${item.price.toFixed(2)}</span>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-semibold text-gray-700">x {item.quantity}</span>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                className="w-16 text-center p-1 text-lg border rounded"
              />
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-xl font-bold mb-6 text-right">
        Subtotal: $
        {cartItems
          .reduce((acc, item) => acc + item.price * item.quantity, 0)
          .toFixed(2)}
      </p>
      <div className="text-right">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded"
          onClick={() => console.log("Checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Home;
