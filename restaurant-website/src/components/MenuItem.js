// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, useSearchParams } from "react-router-dom";
// import "./menuitem.css"; // Make sure to import the CSS file
// import BreakfastCombos from "../components/breakfast"; // Import the BreakfastCombos component

// const itemsData = {
//   breakfast: [
//     // ...your items
//   ],
//   lunch: [
//     // ...your items
//   ],
//   // ...other categories
// };

// const Category = () => {
//   const [searchParams] = useSearchParams();
//   const [menuItems, setMenuItems] = useState([]);
//   const mymenu = searchParams.get("menu");
//   const { category } = useParams();
//   const navigate = useNavigate();
//   const items = itemsData[category] || [];

//   const handleOrder = (itemId) => {
//     const user = localStorage.getItem("user");
//     // alert(user);
//     if (!user) {
//       navigate("/register");
//     } else {
//       navigate(`/order/${itemId}`);
//     }
//   };

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v2/item_bp/${mymenu}`, {
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setMenuItems(Array.isArray(data) ? data : []);
//         console.log(data);
//       })
//       .catch((error) => console.log(error));
//   }, [mymenu]);

//   return (
//     <div className="category-container">
//       {category === "breakfast" && <BreakfastCombos />}{" "}
//       {/* Render the BreakfastCombos component for the breakfast category */}
//       {menuItems.length > 0
//         ? menuItems.map((item) => (
//             <div key={item.id} className="category-item">
//               <img src={item.image} alt={item.name} />
//               <h4>{item.name}</h4>
//               <p>{item.description}</p>
//               <p className="price">{item.price}</p>
//               <button
//                 className="order-button"
//                 onClick={() => handleOrder(item.id)}
//               >
//                 Order now
//               </button>
//             </div>
//           ))
//         : "No items found"}
//     </div>
//   );
// };

// export default Category;

import BreakfastCombos from "../components/breakfast"; // Import the BreakfastCombos component

import { useState, useEffect } from "react";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./menuitem.css";

const Category = () => {
  const [searchParams] = useSearchParams();
  const [menuItems, setMenuItems] = useState([]);
  const mymenu = searchParams.get("menu");
  const { category } = useParams();
  const navigate = useNavigate();

  const handleOrder = (itemId) => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/register");
    } else {
      navigate(`/order/${itemId}`);
    }
  };

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v2/item_bp/${mymenu}`
        );
        setMenuItems(Array.isArray(response.data) ? response.data : []);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMenuItems();
  }, [mymenu]);

  return (
    <div className="category-container">
      {category === "breakfast" && <BreakfastCombos />}{" "}
      {/* Render the BreakfastCombos component for the breakfast category */}
      {menuItems.length > 0
        ? menuItems.map((item) => (
            <div key={item.id} className="category-item">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <button
                className="order-button"
                onClick={() => handleOrder(item.id)}
              >
                Order now
              </button>
            </div>
          ))
        : "No items found"}
    </div>
  );
};

export default Category;
