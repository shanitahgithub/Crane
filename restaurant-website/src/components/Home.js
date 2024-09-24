import React from "react";
// import Buger from "../components/hero.png";
import "./home.css";
// import New1 from "../images/back0.jpg";
// import New2 from "../images/new1.avif";
// import New3 from "../images/new2.jpg";
// import New4 from "../images/new10.jpg";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>Enjoy Our Delicious Meal</h1>
          <p>
            Welcome to Pals' Food Court, where culinary excellence meets an
            unforgettable dining experience. Indulge in our delectable dishes
            and enjoy a memorable time with your loved ones.
          </p>
        </div>
      </div>
      <div className="features">
        <div className="feature-item">
          <div className="icon">🍽️</div>
          <h3>Master Chefs</h3>
          <p>
            Experience culinary excellence with dishes crafted by our Master
            Chef, who combines the finest ingredients.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon">🍴</div>
          <h3>Quality Food</h3>
          <p>
            Meals that not only taste great but also support your health and
            well-being.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon">🛒</div>
          <h3>Online Order</h3>
          <p>
            Experience easy and hassle-free online ordering with just a few
            clicks.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon">🎧</div>
          <h3>24/7 Service</h3>
          <p>
            Enjoy our round-the-clock service, providing you with delicious
            meals whenever you need them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

// const Home = () => {
//   return (
//     <div>
//       <div className="hero">
//         <div className="hero-text">
//           <h1>Enjoy Our Delicious Meal</h1>
//           <p>
//             Welcome to [Restaurant Name], where culinary excellence meets an
//             unforgettable dining experience. Indulge in our delectable dishes
//             and enjoy a memorable time with your loved ones.
//           </p>
//           {/* <button className="book-btn">BOOK A TABLE</button> */}
//         </div>
//         {/* <img src={Buger} className="hero-image" alt="burger" /> */}
//       </div>
//       <div className="features">
//         <div className="feature-item">
//           <div className="icon">🍽️</div>
//           <h3>Master Chefs</h3>
//           <p>
//             Experience culinary excellence with dishes crafted by our Master
//             Chef, who combines the finest ingredients.
//           </p>
//         </div>
//         <div className="feature-item">
//           <div className="icon">🍴</div>
//           <h3>Quality Food</h3>
//           <p>
//             Meals that not only taste great but also support your health and
//             well-being.
//           </p>
//         </div>
//         <div className="feature-item">
//           <div className="icon">🛒</div>
//           <h3>Online Order</h3>
//           <p>
//             Experience easy and hassle-free online ordering with just a few
//             clicks.
//           </p>
//         </div>
//         <div className="feature-item">
//           <div className="icon">🎧</div>
//           <h3>24/7 Service</h3>
//           <p>
//             Enjoy our round-the-clock service, providing you with delicious
//             meals.
//           </p>
//         </div>
//       </div>
//       {/* New Section */}
//       <div className="about-section">
//         <div className="about-images">
//           <img src={New1} alt="restaurant" className="about-image" />
//           <img src={New2} alt="restaurant" className="about-image" />
//           <img src={New3} alt="restaurant" className="about-image" />
//           <img src={New4} alt="restaurant" className="about-image" />
//         </div>
//         <div className="about-text">
//           <h2>About Us</h2>
//           <h1>Welcome to Restoran</h1>
//           <p>
//             Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
//             diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
//             sit.
//           </p>
//           <p>
//             Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
//             diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit
//             clita duo justo magna dolore erat amet.
//           </p>
//           <div className="about-stats">
//             <div className="about-stat">
//               <h3>15</h3>
//               <p>
//                 Years of <br /> EXPERIENCE
//               </p>
//             </div>
//             <div className="about-stat">
//               <h3>50</h3>
//               <p>
//                 Popular <br /> MASTER CHEFS
//               </p>
//             </div>
//           </div>
//           <button className="read-more-btn">READ MORE</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
