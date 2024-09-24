// import React, { useContext, useState } from "react";
// import { CartContext } from "../components/context";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./cart.css"; // Import the CSS file

// const Cart = () => {
//   const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [deliveryAddress, setDeliveryAddress] = useState("");
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handlePlaceOrder = async () => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (!user) {
//       navigate("/login");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");
//       setSuccessMessage("Order placed successfully!");

//       const orderData = cartItems.map((item) => ({
//         restaurant_id: 1,
//         deliveryInformation: deliveryAddress || "default address",
//         quantity: item.quantity,
//         total_amount: item.price,
//         status: "Recieved",
//         item_id: item.id,
//       }));

//       await Promise.all(
//         orderData.map((order) =>
//           axios.post(
//             `${process.env.REACT_APP_BACKEND_URL}/api/v2/order1/orders`,
//             order,
//             {
//               headers: {
//                 Authorization: `Bearer ${user.access_token}`,
//               },
//             }
//           )
//         )
//       );

//       clearCart();
//       setLoading(false);
//       setSuccessMessage("Order placed successfully!");
//       navigate("/history");
//     } catch (error) {
//       setLoading(false);
//       setError("Error placing order.");
//       console.error("Error placing order:", error);
//     }
//   };

//   const handleContinueShopping = () => {
//     navigate("/menu");
//   };

//   return (
//     <div className="cart-page">
//       <div className="cart-header">
//         <h2>My Shopping Cart</h2>
//       </div>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-content">
//           {cartItems.map((item, index) => (
//             <div key={index} className="cart-item">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="cart-item-image"
//               />
//               <div className="cart-item-details">
//                 <p className="cart-item-name">{item.name}</p>
//                 <p className="cart-item-price">{item.price}</p>
//                 <p className="cart-item-price">{item.description}</p>
//                 {/* <div className="cart-item-quantity">
//                   <button className="quantity-button">-</button>
//                   <span>{item.quantity}</span>
//                   <button className="quantity-button">+</button>
//                 </div> */}
//                 <button
//                   className="remove-button"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//           {/* <div className="cart-summary">
//             <div className="total-price">
//               <span>Total price:</span>
//               <span>
//                 UGX{" "}
//                 {cartItems.reduce(
//                   (total, item) => total + item.price * item.quantity,
//                   0
//                 )}
//               </span>
//             </div> */}
//           <div className="delivery-address">
//             <label htmlFor="deliveryAddress">Delivery Address:</label>
//             <textarea
//               id="deliveryAddress"
//               value={deliveryAddress}
//               onChange={(e) => setDeliveryAddress(e.target.value)}
//               placeholder="Enter your delivery address"
//             ></textarea>
//           </div>
//           <div className="cart-actions">
//             <button
//               className="continue-shopping-button"
//               onClick={handleContinueShopping}
//             >
//               Continue Shopping
//             </button>
//             <button
//               className="checkout-button"
//               onClick={handlePlaceOrder}
//               disabled={loading}
//             >
//               {loading ? "Placing Order..." : "Place Order"}
//             </button>
//           </div>
//         </div>
//         // </div>
//       )}
//       {error && <p className="error-message">{error}</p>}
//       {successMessage && <p className="success-message">{successMessage}</p>}
//     </div>
//   );
// };

// export default Cart;

import React, { useContext, useState } from "react";
import { CartContext } from "../components/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./cart.css"; // Import the CSS file

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlePlaceOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      setLoading(true);
      setError(""); // Clear previous error
      setSuccessMessage("Order placed successfully!"); // Clear previous success message

      const orderData = cartItems.map((item) => ({
        restaurant_id: 1,
        deliveryInformation: deliveryAddress || "default address",
        quantity: item.quantity,
        total_amount: item.price,
        status: "Received",
        item_id: item.id,
      }));

      await Promise.all(
        orderData.map((order) =>
          axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/api/v2/order1/orders`,
            order,
            {
              headers: {
                Authorization: `Bearer ${user.access_token}`,
              },
            }
          )
        )
      );

      clearCart();
      setSuccessMessage("Order placed successfully!"); // Set success message only on success
      setLoading(false);
      navigate("/history");
    } catch (error) {
      setLoading(false);
      setError("Error placing order."); // Set error message only if an error occurs
      console.error("Error placing order:", error);
    }
  };

  const handleContinueShopping = () => {
    navigate("/menu");
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>My Shopping Cart</h2>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">{item.price}</p>
                <p className="cart-item-price">{item.description}</p>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="delivery-address">
            <label htmlFor="deliveryAddress">Delivery Address:</label>
            <textarea
              id="deliveryAddress"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder="Enter your delivery address"
            ></textarea>
          </div>
          <div className="cart-actions">
            <button
              className="continue-shopping-button"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
            <button
              className="checkout-button"
              onClick={handlePlaceOrder}
              disabled={loading}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Cart;
