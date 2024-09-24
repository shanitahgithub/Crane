// import React, { useState, useEffect, useCallback } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// import axios from "axios";
// import "./order.css"; // Import your CSS file for styling

// const Order = () => {
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [user_name, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [item, setItem] = useState(null);
//   const [restaurantId, setRestaurantId] = useState("");
//   const [deliveryInformation, setDeliveryInformation] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("Pending");
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [orderSuccess, setOrderSuccess] = useState(false);
//   const navigate = useNavigate();
//   const { itemId } = useParams(); // Get the itemId from URL parameters

//   const checkUserStatus = useCallback(() => {
//     const user = localStorage.getItem("user");
//     if (!user) {
//       setIsRegistered(false);
//     } else {
//       setIsRegistered(true);
//     }
//   }, []);

//   useEffect(() => {
//     checkUserStatus();
//   }, [checkUserStatus]);

//   useEffect(() => {
//     const fetchItemDetails = async () => {
//       try {
//         const user = localStorage.getItem("user");
//         if (!user) {
//           navigate("/register");
//           return;
//         }

//         if (!itemId) {
//           console.error("Item ID is not provided");
//           return;
//         }

//         const response = await axios.get(
//           `http://127.0.0.1:5000/api/v2/order1/item/${itemId}`
//         );
//         setItem(response.data);
//         setTotalAmount(response.data.price * quantity); // Calculate initial total amount
//       } catch (error) {
//         console.error("Error fetching item details:", error);
//       }
//     };

//     if (isRegistered) {
//       fetchItemDetails();
//     }
//   }, [isRegistered, navigate, itemId, quantity]);

//   const handleCreateAccount = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/register", {
//         user_name,
//         password,
//       });
//       console.log(response.data);
//       setIsRegistered(true);
//       localStorage.setItem("user", JSON.stringify(response.data)); // Save user data to localStorage
//     } catch (error) {
//       console.error("Error creating account:", error);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/login", {
//         user_name,
//         password,
//       });
//       console.log(response.data);
//       localStorage.setItem("user", JSON.stringify(response.data)); // Save user data to localStorage
//       setIsRegistered(true);
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   const handleCreateAccountSubmit = (e) => {
//     e.preventDefault();
//     handleCreateAccount();
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     handleLogin();
//   };

//   const handlePlaceOrder = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setOrderSuccess(false); // Reset success message
//     try {
//       const user = JSON.parse(localStorage.getItem("user"));
//       if (!user) {
//         navigate("/login");
//         return;
//       }

//       const orderData = {
//         restaurant_id: 1,
//         deliveryInformation,
//         quantity,
//         total_amount: item.price,
//         status,
//         item_id: itemId,
//       };

//       const response = await axios.post(
//         "http://127.0.0.1:5000/api/v2/order1/orders",
//         orderData,
//         {
//           headers: {
//             Authorization: `Bearer ${user.access_token}`,
//           },
//         }
//       );

//       console.log(response.data);
//       setLoading(false);
//       setOrderSuccess(true); // Show success message
//     } catch (error) {
//       setLoading(false);
//       console.error("Error placing order:", error);
//       alert("Error placing order.");
//     }
//   };

//   useEffect(() => {
//     if (item) {
//       setTotalAmount(item.total_amount);
//     }
//   }, [item, quantity]);

//   return (
//     <div className="order-page">
//       {isRegistered ? (
//         <div className="welcome-section">
//           <h2>Welcome, {user_name}</h2>
//           {item && (
//             <div className="cart-container">
//               <div className="item-details">
//                 <div className="item-image">
//                   <img src={item.image} alt={item.name} />
//                 </div>
//                 <div className="item-description">
//                   <h3>Item Details</h3>
//                   <p>Name: {item.name}</p>
//                   <p>Description: {item.description}</p>
//                   <p>Price: {item.price}</p>
//                 </div>
//               </div>
//               <div className="order-form-container">
//                 <form onSubmit={handlePlaceOrder} className="order-form">
//                   <input
//                     type="text"
//                     hidden
//                     value={restaurantId}
//                     onChange={(e) => setRestaurantId(e.target.value)}
//                     required
//                   />
//                   <div className="form-group">
//                     <label>Quantity:</label>
//                     <input
//                       type="number"
//                       value={quantity}
//                       onChange={(e) => setQuantity(parseInt(e.target.value))}
//                       min="1"
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Address:</label>
//                     <textarea
//                       value={deliveryInformation}
//                       onChange={(e) => setDeliveryInformation(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <input
//                     type="text"
//                     hidden
//                     value={status}
//                     onChange={(e) => setStatus(e.target.value)}
//                     required
//                   />
//                   <div className="total-amount">
//                     <label className="amount-total">
//                       Total Amount: {item.price}
//                     </label>
//                   </div>
//                   <button onClick={handlePlaceOrder} type="submit">
//                     {!loading ? "Place Order" : "Placing.."}
//                   </button>
//                 </form>
//                 {orderSuccess && (
//                   <p className="success-message">Order placed successfully!</p>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="login-section">
//           <h2>Please register or log in to place an order</h2>
//           <form onSubmit={handleLoginSubmit} className="login-form">
//             <input
//               type="text"
//               placeholder="Username"
//               value={user_name}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit">Login</button>
//           </form>
//           <div className="login-link">
//             <a href="/register">Create an Account</a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Order;

import React, { useState, useEffect, useCallback, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../components/context";
import "./order.css"; // Import your CSS file for styling

const Order = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [user_name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { itemId } = useParams(); // Get the itemId from URL parameters

  const { addToCart } = useContext(CartContext);

  const checkUserStatus = useCallback(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      setIsRegistered(false);
    } else {
      setIsRegistered(true);
    }
  }, []);

  useEffect(() => {
    checkUserStatus();
  }, [checkUserStatus]);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const user = localStorage.getItem("user");
        if (!user) {
          navigate("/register");
          return;
        }

        if (!itemId) {
          console.error("Item ID is not provided");
          return;
        }

        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v2/order1/item/${itemId}`
        );
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    if (isRegistered) {
      fetchItemDetails();
    }
  }, [isRegistered, navigate, itemId]);

  const handleCreateAccount = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/register`,
        {
          user_name,
          password,
        }
      );
      console.log(response.data);
      setIsRegistered(true);
      localStorage.setItem("user", JSON.stringify(response.data)); // Save user data to localStorage
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          user_name,
          password,
        }
      );
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data)); // Save user data to localStorage
      setIsRegistered(true);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleCreateAccountSubmit = (e) => {
    e.preventDefault();
    handleCreateAccount();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleAddToCart = () => {
    if (item) {
      addToCart({ ...item, quantity });
      navigate("/cart");
    }
  };

  return (
    <div className="order-page">
      {isRegistered ? (
        <div className="welcome-section">
          <h2>Welcome, {user_name}</h2>
          {item && (
            <div className="cart-container">
              <div className="item-details">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-description">
                  {/* <h3>Item Details</h3> */}
                  <h4>Item details</h4>
                  <p>Name: {item.name}</p>
                  <p>Description: {item.description}</p>
                  <p>Price: {item.price}</p>
                </div>
              </div>
              <div className="order-form-container">
                <div className="form-group">
                  <label>Quantity:</label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    min="1"
                    required
                  />
                </div>
                <h4>Total amount:{item.price}</h4>
                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="login-link">
          <a href="/"></a>
        </div>
      )}
    </div>
  );
};

export default Order;
