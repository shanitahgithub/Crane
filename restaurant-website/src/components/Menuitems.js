// // src/components/Menu.js

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { fetchMenuCategories } from "../api/api"; // Adjust the import based on your actual API file path
// import "./Menu.css";

// const Menu = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchMenuCategories()
//       .then((response) => {
//         setCategories(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError("Error fetching menu categories. Please try again later.");
//         setLoading(false);
//         console.error("Error fetching menu categories:", error);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="menu-container">
//       <ul className="menu-list">
//         {categories.map((category) => (
//           <li key={category}>
//             <Link to={`/menu/${category}`}>
//               <div className="menu-image-container">
//                 {/* You can add images for each category here */}
//                 <div className="menu-image-text">{category}</div>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Menu;
