import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./order.css"; // Import your CSS file for styling

const Order = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [restaurantId, setRestaurantId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [orderDate, setOrderDate] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [status, setStatus] = useState("pending");
  const [items, setItems] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/register");
    } else {
      setIsRegistered(true);
    }
  }, [navigate]);

  const handleCreateOrder = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user?.access_token; // Get JWT token from user data

      const response = await axios.post(
        "http://127.0.0.1:5000/api/v2/order1/orders",
        {
          restaurant_id: restaurantId,
          quantity: quantity,
          order_date: orderDate,
          total_amount: totalAmount,
          status: status,
          Items: items,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include JWT token in headers
          },
        }
      );

      console.log(response.data);
      alert("Order created successfully!");
    } catch (error) {
      console.error("Error creating order:", error);
      alert("An error occurred while creating the order.");
    }
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    handleCreateOrder();
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/v2/users/login",
        {
          username,
          password,
        }
      );
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data)); // Save user data to localStorage
      setIsRegistered(true);
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred during login.");
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="order-page">
      {isRegistered ? (
        <div>
          <h2>Welcome, {username}</h2>
          <form onSubmit={handleOrderSubmit}>
            <input
              type="text"
              placeholder="Restaurant ID"
              value={restaurantId}
              onChange={(e) => setRestaurantId(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Order Date"
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Total Amount"
              value={totalAmount}
              onChange={(e) => setTotalAmount(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
            <textarea
              placeholder="Items"
              value={items}
              onChange={(e) => setItems(e.target.value)}
              required
            ></textarea>
            <button type="submit">Place Order</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Please register or log in to place an order</h2>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <div className="login-link">
            <a href="/register">Create an Account</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
