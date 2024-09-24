import React from "react";
import "./about.css"; // Ensure you have a CSS file for styling
import view from "../images/view.jpg"; // Adjust the import to your image path
import lg from "../images/lg.jpg";
const About = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="image-section">
          <img src={view} alt="Dinner Table" className="image" />
          <img src={lg} alt="logo" className="image" />
        </div>
        <div className="text-section">
          <h2>Welcome to Pals' Food Court</h2>
          <p>
            At Pals' Food Court, we believe in bringing people together through
            the love of food. Located in the heart of Kampala, our restaurant is
            a haven for food enthusiasts seeking a delightful dining experience.
          </p>

          <div className="highlighted">
            <h1>Our Story</h1>
            <p>
              Founded in 2018, Pals' Food Court was born out of a passion for
              creating unforgettable culinary experiences. Our journey began
              with a simple idea: to serve delicious, high-quality meals made
              with the freshest ingredients. Over the years, we have grown into
              a beloved local spot, known for our warm atmosphere and
              exceptional service.
            </p>
          </div>
          <ul>
            <li>
              At Pals' Food Court, we are committed to sustainability and
              supporting local farmers and suppliers. Our ingredients are
              sourced locally whenever possible, and we prioritize
              environmentally-friendly practices in our operations. We believe
              in giving back to the community that has supported us, and we
              regularly participate in local events and charitable initiatives.
            </li>
            <li>
              Step into our restaurant and feel instantly at home. Our cozy and
              inviting atmosphere is perfect for any occasion, whether you're
              enjoying a romantic dinner, celebrating with family and friends,
              or simply unwinding after a long day. Our friendly and attentive
              staff are dedicated to providing you with an exceptional dining
              experience from the moment you walk through our doors.
            </li>
            <li>
              We invite you to join us at Pals' Food Court and experience the
              magic of our culinary offerings. Whether you're a long-time patron
              or a first-time visitor, we promise to make your dining experience
              memorable. Thank you for choosing Pals' Food Court – where every
              meal is a celebration of good food, good company, and good times.
            </li>
          </ul>
          <div>
            For reservations, catering inquiries, or any other questions, please
            don't hesitate to get in touch with us. We look forward to welcoming
            you soon!
          </div>
        </div>
      </div>

      <div className="choose-section">
        <h2>
          Why choose <span>Our Restaurant</span>
        </h2>
        <p>
          Welcome to Pals' Food Court, where culinary excellence meets a
          welcoming atmosphere. Here are a few reasons why you should choose us.
        </p>
        <div className="cards">
          <div className="card">
            <h3>01</h3>
            <h4>Unique Menu</h4>
            <p>
              We offer a diverse and unique menu that caters to all tastes,
              including gourmet dishes, vegan options, and gluten-free choices,
              ensuring everyone finds something they love
            </p>
          </div>
          <div className="card">
            <h3>02</h3>
            <h4>Locally Sourced Ingredients</h4>
            <p>
              We pride ourselves on using fresh, locally sourced ingredients to
              support our community and provide the highest quality meals.
            </p>
          </div>
          <div className="card">
            <h3>03</h3>
            <h4>Inviting Atmosphere</h4>
            <p>
              Our restaurant features a warm and welcoming ambiance, perfect for
              family gatherings, romantic dinners, or casual meals with friends.
            </p>
          </div>
          <div className="card">
            <h3>04</h3>
            <h4>Excellent Customer Service</h4>
            <p>
              Our friendly and attentive staff are dedicated to making your
              dining experience enjoyable and memorable.
            </p>
          </div>
          {/* <div className="card">
            <h3>05</h3>
            <h4>Convenient Location</h4>
            <p>
              Conveniently located in the heart of the city with ample parking,
              making it easy for you to visit us anytime.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;

// import React from "react";
// import "./about.css"; // Ensure you have a CSS file for styling
// import view from "../images/view.jpg"; // Adjust the import to your image path

// const About = () => {
//   return (
//     <div className="container">
//       <div className="content">
//         <div className="image-section">
//           <img src={view} alt="Dinner Table" className="image" />
//         </div>
//         <div className="text-section">
//           <h2>
//             Eum ipsam laborum deleniti velit pariatur architecto aut nihil
//           </h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
//             aute irure dolor in reprehenderit
//           </p>
//           <p className="highlighted">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//           <ul>
//             <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
//             <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
//             <li>
//               Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//               irure dolor in reprehenderit in voluptate trideta storacalaperda
//               mastiro dolore eu fugiat nulla pariatur.
//             </li>
//           </ul>
//           <p>
//             Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//             irure dolor in reprehenderit in voluptate velit esse cillum dolore
//             eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//             proident, sunt in culpa qui officia deserunt mollit anim id est
//             laborum.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
