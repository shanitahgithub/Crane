// import React from "react";
// import { Link } from "react-router-dom";
// import "./Menu.css";
// import lusaniya from "../images/lusaniya.jpg";
// import new5 from "../images/new5.avif";
// // import new9 from "../images/new9.jpg";
// // import meat from "../images/meat.jpg";

// const Menu = () => {
//   return (
//     <>
//       <div className="intro">
//         <h1>Discover our favourite Menu categories;</h1>
//         <p>
//           Explore our top menu categories and indulge in our favorite dishes,
//           crafted to delight your taste buds
//         </p>
//       </div>
//       <div className="menu-container">
//         <ul className="menu-list">
//           <li>
//             {/* <Link to="/menu/breakfast?menu=breakfast"> */}
//             <Link to={`/menu/breakfast?menu=${8}`}>
//               <div className="menu-image-container">
//                 <img
//                   src="https://st3.depositphotos.com/1063437/32453/i/450/depositphotos_324531960-stock-photo-breakfast-served-with-coffee-juice.jpg"
//                   alt="Breakfast"
//                   className="image"
//                 />
//                 <div className="menu-image-text">Breakfast</div>
//               </div>
//             </Link>
//           </li>
//           <li>
//             {/* <Link to="/menu/breakfast?menu=lunch"> */}
//             <Link to={`/menu/breakfast?menu=${9}`}>
//               <div className="menu-image-container">
//                 <img src={lusaniya} alt="Lunch" className="image" />
//                 <div className="menu-image-text">Lunch</div>
//               </div>
//             </Link>
//           </li>
//           <li>
//             {/* <Link to="/menu/breakfast?menu=fast-foods"> */}
//             <Link to={`/menu/breakfast?menu=${10}`}>
//               <div className="menu-image-container">
//                 <img src={new5} alt="Fast Foods" className="image" />
//                 <div className="menu-image-text">Fast Foods</div>
//               </div>
//             </Link>
//           </li>
//           <li>
//             {/* <Link to="/menu/breakfast?menu=salads"> */}
//             <Link to={`/menu/breakfast?menu=${12}`}>
//               <div className="menu-image-container">
//                 <img
//                   src="https://img.freepik.com/free-photo/imeretian-khachapuri-cheese-lemon-side-view_140725-11276.jpg?ga=GA1.1.1165959059.1662369097&semt=ais_user"
//                   alt="salads"
//                   className="image"
//                 />
//                 <div className="menu-image-text">Pizza,Salads & Fruits</div>
//               </div>
//             </Link>
//           </li>
//           <li>
//             <Link to={`/menu/breakfast?menu=${13}`}>
//               <div className="menu-image-container">
//                 <img
//                   src="https://img.freepik.com/free-photo/delicious-glass-orange-juice_144627-16582.jpg?ga=GA1.1.1165959059.1662369097&semt=sph"
//                   alt="Drinks"
//                   className="image"
//                 />
//                 <div className="menu-image-text">Drinks</div>
//               </div>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Menu;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import lusaniya from "../images/lusaniya.jpg";
import new5 from "../images/new5.avif";
// import new9 from "../images/new9.jpg";
// import meat from "../images/meat.jpg";

const Menu = () => {
  const [headingIndex, setHeadingIndex] = useState(0);
  const [paragraphIndex, setParagraphIndex] = useState(0);

  const headings = [
    "Discover our favourite Menu categories;",
    "Explore Delicious Dishes;",
    "Savor Culinary Excellence;",
    "Enjoy the Best Meals;",
  ];

  const paragraphs = [
    "Explore our top menu categories and indulge in our favorite dishes, crafted to delight your taste buds.",
    "Delight in our curated menu selections, prepared to perfection.",
    "Taste the variety of flavors in our diverse menu.",
    "Enjoy a memorable dining experience with our exquisite menu options.",
  ];

  useEffect(() => {
    const headingInterval = setInterval(() => {
      setHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 2000);

    const paragraphInterval = setInterval(() => {
      setParagraphIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
    }, 2500);

    return () => {
      clearInterval(headingInterval);
      clearInterval(paragraphInterval);
    };
  }, [headings.length, paragraphs.length]);

  return (
    <>
      <div className="intro">
        <h1>{headings[headingIndex]}</h1>
        <p>{paragraphs[paragraphIndex]}</p>
      </div>
      <div className="menu-container">
        <ul className="menu-list">
          <li>
            <Link to={`/menu/breakfast?menu=${8}`}>
              <div className="menu-image-container">
                <img
                  src="https://st3.depositphotos.com/1063437/32453/i/450/depositphotos_324531960-stock-photo-breakfast-served-with-coffee-juice.jpg"
                  alt="Breakfast"
                  className="image"
                />
                <div className="menu-image-text">Breakfast</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/menu/breakfast?menu=${9}`}>
              <div className="menu-image-container">
                <img src={lusaniya} alt="Lunch" className="image" />
                <div className="menu-image-text">Lunch</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/menu/breakfast?menu=${10}`}>
              <div className="menu-image-container">
                <img src={new5} alt="Fast Foods" className="image" />
                <div className="menu-image-text">Fast Foods</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/menu/breakfast?menu=${12}`}>
              <div className="menu-image-container">
                <img
                  src="https://img.freepik.com/free-photo/imeretian-khachapuri-cheese-lemon-side-view_140725-11276.jpg?ga=GA1.1.1165959059.1662369097&semt=ais_user"
                  alt="salads"
                  className="image"
                />
                <div className="menu-image-text">Pizza, Salads & Fruits</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/menu/breakfast?menu=${13}`}>
              <div className="menu-image-container">
                <img
                  src="https://img.freepik.com/free-photo/delicious-glass-orange-juice_144627-16582.jpg?ga=GA1.1.1165959059.1662369097&semt=sph"
                  alt="Drinks"
                  className="image"
                />
                <div className="menu-image-text">Drinks</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
