import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./admindashboard.css";

const AdminDashboard = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("menu"); // State to manage the active tab
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    fetchMenuItems();
    fetchUsers();
    fetchOrders();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("user")).token;
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v2/item_bp/get`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMenuItems(response.data);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const access_token = JSON.parse(
        localStorage.getItem("user")
      ).access_token;
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v2/users/users`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchOrders = async () => {
    try {
      const access_token = JSON.parse(
        localStorage.getItem("user")
      ).access_token;
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v2/order1/get-orders`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      setOrders(response.data.orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      const token = JSON.parse(localStorage.getItem("user")).token;
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/v2/item_bp/delete/${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchMenuItems();
    } catch (error) {
      console.error("Error deleting menu item:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("user")).token;
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v2/item_bp/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchMenuItems();
      setFormData({
        name: "",
        description: "",
        price: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Welcome to the Admin Dashboard</h2>

      <nav className="dashboard-tabs">
        <button onClick={() => setActiveTab("menu")}>Menu Items</button>
        <button onClick={() => setActiveTab("users")}>Users</button>
        <button onClick={() => setActiveTab("orders")}>Orders</button>
      </nav>

      {activeTab === "menu" && (
        <section>
          <h3>Menu Items</h3>
          <Link to="/dashboard/items/add">Add New Item</Link>
          <div className="menu-grid">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-card">
                <img src={item.image} alt={item.name} className="menu-image" />
                <div className="menu-details">
                  <strong>{item.name}</strong>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <div className="menu-actions">
                    <Link
                      to={`/dashboard/items/edit?id=${item.id}`}
                      className="edit-link"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === "users" && (
        <section>
          <h3>All Users</h3>
          <table className="users-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Location</th>
                <th>Contact</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.user_name}</td>
                  <td>{user.email}</td>
                  <td>{user.location}</td>
                  <td>{user.contact}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {activeTab === "orders" && (
        <section>
          <h3>All Orders</h3>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>RestaurantId</th>
                <th>ItemId</th>
                <th>UserId</th>
                <th>Quantity</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Delivery Information</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.restaurant_id}</td>
                  <td>{order.item_id}</td>
                  <td>{order.user_id}</td>
                  <td>{order.quantity}</td>
                  <td>{order.total_amount}</td>
                  <td>{order.status}</td>
                  <td>{order.deliveryInformation}</td>
                  <td>{new Date(order.order_date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
};

export default AdminDashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./admindashboard.css";

// const AdminDashboard = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [activeTab, setActiveTab] = useState("menu");

//   useEffect(() => {
//     fetchMenuItems();
//     fetchUsers();
//     fetchOrders();
//   }, []);

//   const fetchMenuItems = async () => {
//     try {
//       const token = JSON.parse(localStorage.getItem("user")).token;
//       const response = await axios.get(
//         `${process.env.REACT_APP_BACKEND_URL}/api/v2/item_bp/get`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setMenuItems(response.data);
//     } catch (error) {
//       console.error("Error fetching menu items:", error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const access_token = JSON.parse(
//         localStorage.getItem("user")
//       ).access_token;
//       const response = await axios.get(
//         `${process.env.REACT_APP_BACKEND_URL}/api/v2/users/users`,
//         {
//           headers: {
//             Authorization: `Bearer ${access_token}`,
//           },
//         }
//       );
//       setUsers(response.data.users);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const fetchOrders = async () => {
//     try {
//       const access_token = JSON.parse(
//         localStorage.getItem("user")
//       ).access_token;
//       const response = await axios.get(
//         `${process.env.REACT_APP_BACKEND_URL}/api/v2/order1/get-orders`,
//         {
//           headers: {
//             Authorization: `Bearer ${access_token}`,
//           },
//         }
//       );
//       setOrders(response.data.orders);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this item?"
//     );
//     if (confirmDelete) {
//       try {
//         const token = JSON.parse(localStorage.getItem("user")).token;
//         await axios.delete(
//           `${process.env.REACT_APP_BACKEND_URL}/api/v2/item_bp/delete/${id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setMenuItems(menuItems.filter((item) => item.id !== id));
//         alert("Item deleted successfully!");
//       } catch (error) {
//         console.error("Error deleting the item:", error);
//         alert("Failed to delete item.");
//       }
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <nav className="sidebar">
//         <ul>
//           <li onClick={() => handleTabChange("menu")}>Menu Items</li>
//           <li onClick={() => handleTabChange("users")}>Users</li>
//           <li onClick={() => handleTabChange("orders")}>Orders</li>
//         </ul>
//       </nav>

//       <main className="main-content">
//         <h1 class="side">Admin Dashboard</h1>
//         {activeTab === "menu" && (
//           <section>
//             <h3>Menu Items</h3>
//             <Link to="/dashboard/items/add">Add New Item</Link>
//             <div className="menu-grid">
//               {menuItems.map((item) => (
//                 <div key={item.id} className="menu-card">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="menu-image"
//                   />
//                   <div className="menu-details">
//                     <strong>{item.name}</strong>
//                     <p>{item.description}</p>
//                     <p>{item.price}</p>
//                     <div className="menu-actions">
//                       <Link
//                         to={`/dashboard/items/edit?id=${item.id}`}
//                         className="edit-link"
//                       >
//                         Edit
//                       </Link>
//                       <button
//                         onClick={() => handleDelete(item.id)}
//                         className="delete-button"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {activeTab === "users" && (
//           <section>
//             <h3 class="side">All Users</h3>
//             <table className="users-table">
//               <thead>
//                 <tr>
//                   <th>Username</th>
//                   <th>Email</th>
//                   <th>Location</th>
//                   <th>Contact</th>
//                   <th>Role</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user) => (
//                   <tr key={user.id}>
//                     <td>{user.user_name}</td>
//                     <td>{user.email}</td>
//                     <td>{user.location}</td>
//                     <td>{user.contact}</td>
//                     <td>{user.role}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </section>
//         )}

//         {activeTab === "orders" && (
//           <section>
//             <h3 class="side">All Orders</h3>
//             <table className="orders-table">
//               <thead>
//                 <tr>
//                   <th>Order ID</th>
//                   <th>Restaurant ID</th>
//                   <th>Item ID</th>
//                   <th>User ID</th>
//                   <th>Quantity</th>
//                   <th>Total Amount</th>
//                   <th>Status</th>
//                   <th>Delivery Info</th>
//                   <th>Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.map((order) => (
//                   <tr key={order.id}>
//                     <td>{order.id}</td>
//                     <td>{order.restaurant_id}</td>
//                     <td>{order.item_id}</td>
//                     <td>{order.user_id}</td>
//                     <td>{order.quantity}</td>
//                     <td>{order.total_amount}</td>
//                     <td>{order.status}</td>
//                     <td>{order.deliveryInformation}</td>
//                     <td>{new Date(order.order_date).toLocaleString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </section>
//         )}
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;
