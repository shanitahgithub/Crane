// // components/OrderHistory.js

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const OrderHistory = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchOrderHistory = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const access_token = JSON.parse(
//           localStorage.getItem("user")
//         ).access_token;

//         const response = await axios.get(
//           "http://127.0.0.1:5000/api/v2/order1/history",
//           {
//             headers: {
//               Authorization: `Bearer ${access_token}`,
//             },
//           }
//         );

//         setOrders(response.data.orders);
//       } catch (error) {
//         setError("Error fetching order history.");
//         console.error("Error fetching order history:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrderHistory();
//   }, []); // Empty dependency array ensures this runs once on component mount

//   return (
//     <div className="order-history">
//       <h2>Order History</h2>
//       {loading ? (
//         <p>Loading order history...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <div className="order-list">
//           {orders.map((order) => (
//             <div key={order.id} className="order-item">
//               <p>Order ID: {order.id}</p>

//               {/* <p>Restaurant ID: {order.restaurant_id}</p> */}
//               <p>Quantity: {order.quantity}</p>
//               <p>Total Amount: {order.total_amount}</p>
//               {/* <p>Status: {order.status}</p> */}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderHistory;

// components/OrderHistory.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./orderhistory.css";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      setLoading(true);
      setError(null);

      try {
        const access_token = JSON.parse(
          localStorage.getItem("user")
        ).access_token;

        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v2/order1/history2`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        setOrders(response.data.orders);
      } catch (error) {
        setError("Error fetching order history.");
        console.error("Error fetching order history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className="order-history">
      <h2>My Order History</h2>
      {loading ? (
        <p>Loading order history...</p>
      ) : error ? (
        <p>{error}</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="order-list">
          {orders.map((order) => (
            <div key={order.id} className="order-item">
              <div className="order-details">
                <h4>Order ID: {order.id}</h4>
                {/* <p>Restaurant ID: {order.restaurant_id}</p> */}
                <p>Quantity: {order.quantity}</p>
                <p>Total Amount: {order.total_amount}</p>
                <p>Delivery Address:{order.deliveryInformation}</p>
                {/* <p>Status: {order.status}</p> */}
                {/* Display image if available */}
                {order.image && (
                  <img src={order.image} alt={`pic for order ${order.id}`} />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
