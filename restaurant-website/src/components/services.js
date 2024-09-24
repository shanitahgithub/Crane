// // src/components/CateringServices.js
// import React from "react";
// import "./services.css";

// // Import FontAwesome icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBirthdayCake,
//   faBriefcase,
//   faChurch,
//   faCalendar,
//   faCocktail,
//   faMicrophone,
// } from "@fortawesome/free-solid-svg-icons";

// // const Services = () => {
// //   return (
// //     <div className="catering-services">
// //       <h1>Services</h1>
// //       <h2>Catering Services</h2>
// //       <div className="service-list">
// //         <div className="service-item">
// //           <FontAwesomeIcon icon={faBirthdayCake} className="service-icon" />
// //           <h3>Birthday Party</h3>
// //           <p>
// //             Even the all-powerful Pointing has no control about the blind texts
// //             it is an almost unorthographic.
// //           </p>
// //         </div>
// //         <div className="service-item">
// //           <FontAwesomeIcon icon={faBriefcase} className="service-icon" />
// //           <h3>Business Meetings</h3>
// //           <p>
// //             Even the all-powerful Pointing has no control about the blind texts
// //             it is an almost unorthographic.
// //           </p>
// //         </div>
// //         <div className="service-item">
// //           <FontAwesomeIcon icon={faChurch} className="service-icon" />
// //           <h3>Wedding Party</h3>
// //           <p>
// //             Even the all-powerful Pointing has no control about the blind texts
// //             it is an almost unorthographic.
// //           </p>
// //         </div>
// //       </div>
// //     </div>

// //   );
// // };

// // export default Services;
// // src/components/Services.js

// // Import FontAwesome icons

// const Services = () => {
//   return (
//     <div className="services">
//       <div className="catering-services">
//         {/* <h1>Services</h1> */}
//         <h2>Catering Services</h2>
//         <div className="service-list">
//           <div className="service-item">
//             <FontAwesomeIcon icon={faBirthdayCake} className="service-icon" />
//             <h3>Birthday Parties</h3>
//             <p>
//               Cakes in all flavours that make parties colorful accompanied with
//               delicious meals.
//             </p>
//           </div>
//           <div className="service-item">
//             <FontAwesomeIcon icon={faBriefcase} className="service-icon" />
//             <h3>Business Meetings</h3>
//             <p>
//               Our thrilling environment suitable for business meetings of all
//               kinds.
//             </p>
//           </div>
//           <div className="service-item">
//             <FontAwesomeIcon icon={faChurch} className="service-icon" />
//             <h3>Wedding Parties</h3>
//             <p>Our Master chefs give the best meals.</p>
//           </div>
//         </div>
//       </div>

//       <div className="event-services">
//         <h2>Event Services</h2>
//         <div className="service-list">
//           <div className="service-item">
//             <FontAwesomeIcon icon={faMicrophone} className="service-icon" />
//             <h3>Master of Ceremonies</h3>
//             <p>
//               Highly qualified staff that make different ceremonies colorful.
//             </p>
//           </div>
//           <div className="service-item">
//             <FontAwesomeIcon icon={faCalendar} className="service-icon" />
//             <h3>Events Planning</h3>
//             <p>
//               Weddings,Birthday Parties,Reunions,Introduction Ceremonies etc
//             </p>
//           </div>
//           <div className="service-item">
//             <FontAwesomeIcon icon={faCocktail} className="service-icon" />
//             <h3>Corporate Events</h3>
//             <p>
//               Our corporate event services are designed to impress and inspire.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

// src/components/Services.js
import React from "react";
import "./services.css";

// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faBriefcase,
  faChurch,
  faCalendar,
  faCocktail,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <>
      <marquee>Order now, We deliver</marquee>
      <div className="services">
        {/* <div className="water-mark">Order Now ,We deliver.</div> */}
        <div className="catering-services">
          {/* <h1>Services</h1> */}
          <h2>Catering Services</h2>
          <div className="service-list">
            <div className="service-item">
              <FontAwesomeIcon icon={faBirthdayCake} className="service-icon" />
              <h3>Birthday Parties</h3>
              <p>
                Celebrate your special day with our delightful catering
                services, offering a variety of mouth-watering cakes in all
                flavors and a range of delicious meals that make your party
                vibrant and memorable.
              </p>
            </div>
            <div className="service-item">
              <FontAwesomeIcon icon={faBriefcase} className="service-icon" />
              <h3>Business Meetings</h3>
              <p>
                Host your business meetings in a professional yet relaxing
                environment, with tailored catering options that enhance
                productivity and provide a refreshing break during your
                corporate gatherings.
              </p>
            </div>
            <div className="service-item">
              <FontAwesomeIcon icon={faChurch} className="service-icon" />
              <h3>Wedding Parties</h3>
              <p>
                Make your wedding day extraordinary with our gourmet catering
                services, featuring exquisite menus crafted by our master chefs
                to ensure your celebration is a culinary delight.
              </p>
            </div>
          </div>
        </div>

        <div className="event-services">
          <h2>Event Services</h2>
          <div className="service-list">
            <div className="service-item">
              <FontAwesomeIcon icon={faMicrophone} className="service-icon" />
              <h3>Master of Ceremonies</h3>
              <p>
                Our professional Masters of Ceremonies bring charm and order to
                your events, ensuring they run smoothly and engagingly, leaving
                a lasting impression on your guests.
              </p>
            </div>
            <div className="service-item">
              <FontAwesomeIcon icon={faCalendar} className="service-icon" />
              <h3>Events Planning</h3>
              <p>
                From weddings and birthday parties to reunions and introduction
                ceremonies, our comprehensive event planning services ensure
                every detail is meticulously managed for a flawless celebration.
              </p>
            </div>
            <div className="service-item">
              <FontAwesomeIcon icon={faCocktail} className="service-icon" />
              <h3>Corporate Events</h3>
              <p>
                Impress and inspire with our tailored corporate event services,
                designed to elevate your business gatherings with sophisticated
                catering and impeccable service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
