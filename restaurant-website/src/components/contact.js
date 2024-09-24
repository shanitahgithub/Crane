// // // // import React, { useState } from "react";
// // // // import "./contact.css";
// // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // import {
// // // //   faMapMarkerAlt,
// // // //   faClock,
// // // //   faEnvelope,
// // // //   faPhoneAlt,
// // // // } from "@fortawesome/free-solid-svg-icons";
// // // // import { sendContactMessage } from "../api/api"; // Ensure this import is correct

// // // // const Contact = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     subject: "",
// // // //     message: "",
// // // //   });

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await sendContactMessage({
// // // //         username: formData.name,
// // // //         email: formData.email,
// // // //         subject: formData.subject,
// // // //         message: formData.message,
// // // //       });
// // // //       alert("Your message has been sent successfully!");
// // // //       setFormData({
// // // //         name: "",
// // // //         email: "",
// // // //         subject: "",
// // // //         message: "",
// // // //       });
// // // //     } catch (error) {
// // // //       console.error("Error sending message:", error);
// // // //       alert("Failed to send message. Please try again later.");
// // // //     }
// // // //   };

// // // //   // const handleSubmit = async (e) => {
// // // //   //   e.preventDefault();
// // // //   //   try {
// // // //   //     await sendContactMessage(formData); // Make sure sendContactMessage is correctly implemented
// // // //   //     alert("Your message has been sent successfully!");
// // // //   //     setFormData({
// // // //   //       name: "",
// // // //   //       email: "",
// // // //   //       subject: "",
// // // //   //       message: "",
// // // //   //     });
// // // //   //   } catch (error) {
// // // //   //     console.error("Error sending message:", error);
// // // //   //     alert("Failed to send message. Please try again later.");
// // // //   //   }
// // // //   // };

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prevData) => ({
// // // //       ...prevData,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   return (
// // // //     <div className="Contact">
// // // //       <header className="contact-header">
// // // //         <h1>For more Infomation</h1>
// // // //       </header>
// // // //       <div className="contact-container">
// // // //         {/* Contact Info Section */}
// // // //         <div className="contact-info">
// // // //           {/* Info Boxes for Location, Open Hours, Email, Phone */}
// // // //           <div className="info-box">
// // // //             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
// // // //             <h3>Location:</h3>
// // // //             <p>Kireka Jinja Rd In front Of Poolnest Pub, Kireka, Uganda</p>
// // // //           </div>
// // // //           <div className="info-box">
// // // //             <FontAwesomeIcon icon={faClock} className="icon" />
// // // //             <h3>Open Hours:</h3>
// // // //             <p>Sun-Fri: 24hrs,Sat:6pm-6am</p>
// // // //           </div>
// // // //           <div className="info-box">
// // // //             <FontAwesomeIcon icon={faEnvelope} className="icon" />
// // // //             <h3>Email:</h3>
// // // //             <p>pal'sfoodcourt@gmail.com</p>
// // // //           </div>
// // // //           <div className="info-box">
// // // //             <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
// // // //             <h3>Call:</h3>
// // // //             <p>+256 753175000</p>
// // // //           </div>
// // // //         </div>
// // // //         {/* Contact Form Section */}
// // // //         <div className="contact-form">
// // // //           <h3>Send Message</h3>
// // // //           <form onSubmit={handleSubmit}>
// // // //             <input
// // // //               type="text"
// // // //               name="name"
// // // //               placeholder="Your Name"
// // // //               value={formData.name}
// // // //               onChange={handleChange}
// // // //               required
// // // //             />
// // // //             <input
// // // //               type="email"
// // // //               name="email"
// // // //               placeholder="Your Email"
// // // //               value={formData.email}
// // // //               onChange={handleChange}
// // // //               required
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               name="subject"
// // // //               placeholder="Subject"
// // // //               value={formData.subject}
// // // //               onChange={handleChange}
// // // //               required
// // // //             />
// // // //             <textarea
// // // //               name="message"
// // // //               placeholder="Message"
// // // //               value={formData.message}
// // // //               onChange={handleChange}
// // // //               required
// // // //             ></textarea>
// // // //             <button type="submit">Send Message</button>
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //       {/* Footer Section */}
// // // //       {/* <footer className="footer">
// // // //         <p>&copy; Copyright Palz Food Court. All Rights Reserved</p>
// // // //       </footer> */}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Contact;

// // // // // import React, { useState } from "react";
// // // // // import "./contact.css";
// // // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // // import {
// // // // //   faMapMarkerAlt,
// // // // //   faClock,
// // // // //   faEnvelope,
// // // // //   faPhoneAlt,
// // // // // } from "@fortawesome/free-solid-svg-icons";
// // // // // import { sendContactMessage } from "../api/api"; // Import the sendContactMessage function

// // // // // const Contact = () => {
// // // // //   const [formData, setFormData] = useState({
// // // // //     name: "",
// // // // //     email: "",
// // // // //     subject: "",
// // // // //     message: "",
// // // // //   });

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       await sendContactMessage(formData); // Use sendContactMessage function from api.js
// // // // //       alert("Your message has been sent successfully!");
// // // // //       setFormData({
// // // // //         name: "",
// // // // //         email: "",
// // // // //         subject: "",
// // // // //         message: "",
// // // // //       });
// // // // //     } catch (error) {
// // // // //       console.error("Error sending message:", error);
// // // // //       alert("Failed to send message. Please try again later.");
// // // // //     }
// // // // //   };

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setFormData((prevData) => ({
// // // // //       ...prevData,
// // // // //       [name]: value,
// // // // //     }));
// // // // //   };

// // // // //   return (
// // // // //     <div className="Contact">
// // // // //       <header className="contact-header">
// // // // //         <h1>Contact Us</h1>
// // // // //       </header>
// // // // //       <div className="contact-container">
// // // // //         {/* Contact Info Section */}
// // // // //         <div className="contact-info">
// // // // //           {/* Info Boxes for Location, Open Hours, Email, Phone */}
// // // // //           <div className="info-box">
// // // // //             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
// // // // //             <h3>Location:</h3>
// // // // //             <p>123 Street, New York, USA</p>
// // // // //           </div>
// // // // //           <div className="info-box">
// // // // //             <FontAwesomeIcon icon={faClock} className="icon" />
// // // // //             <h3>Open Hours:</h3>
// // // // //             <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
// // // // //           </div>
// // // // //           <div className="info-box">
// // // // //             <FontAwesomeIcon icon={faEnvelope} className="icon" />
// // // // //             <h3>Email:</h3>
// // // // //             <p>info@example.com</p>
// // // // //           </div>
// // // // //           <div className="info-box">
// // // // //             <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
// // // // //             <h3>Call:</h3>
// // // // //             <p>+1 123 456 7890</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         {/* Contact Form Section */}
// // // // //         <div className="contact-form">
// // // // //           <h3>Send Message</h3>
// // // // //           <form onSubmit={handleSubmit}>
// // // // //             <input
// // // // //               type="text"
// // // // //               name="name"
// // // // //               placeholder="Your Name"
// // // // //               value={formData.name}
// // // // //               onChange={handleChange}
// // // // //               required
// // // // //             />
// // // // //             <input
// // // // //               type="email"
// // // // //               name="email"
// // // // //               placeholder="Your Email"
// // // // //               value={formData.email}
// // // // //               onChange={handleChange}
// // // // //               required
// // // // //             />
// // // // //             <input
// // // // //               type="text"
// // // // //               name="subject"
// // // // //               placeholder="Subject"
// // // // //               value={formData.subject}
// // // // //               onChange={handleChange}
// // // // //               required
// // // // //             />
// // // // //             <textarea
// // // // //               name="message"
// // // // //               placeholder="Message"
// // // // //               value={formData.message}
// // // // //               onChange={handleChange}
// // // // //               required
// // // // //             ></textarea>
// // // // //             <button type="submit">Send Message</button>
// // // // //           </form>
// // // // //         </div>
// // // // //       </div>
// // // // //       {/* Footer Section */}
// // // // //       <footer className="footer">
// // // // //         <p>&copy; Copyright Palz Food Court. All Rights Reserved</p>
// // // // //       </footer>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Contact;

// // // // // // import React from "react";
// // // // // // import "./contact.css";
// // // // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // // // import {
// // // // // //   faMapMarkerAlt,
// // // // // //   faClock,
// // // // // //   faEnvelope,
// // // // // //   faPhoneAlt,
// // // // // // } from "@fortawesome/free-solid-svg-icons";
// // // // // // // import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

// // // // // // // const mapStyles = {
// // // // // // //   width: "100%",
// // // // // // //   height: "400px",
// // // // // // // };

// // // // // // const Contact = (props) => {
// // // // // //   return (
// // // // // //     <div className="Contact">
// // // // // //       <header className="contact-header">
// // // // // //         <h1>Contact Us</h1>
// // // // // //       </header>
// // // // // //       {/* <div className="map-container">
// // // // // //         <Map
// // // // // //           google={props.google}
// // // // // //           zoom={14}
// // // // // //           style={mapStyles}
// // // // // //           initialCenter={{
// // // // // //             lat: 40.712776,
// // // // // //             lng: -74.005974,
// // // // // //           }}
// // // // // //         >
// // // // // //           <Marker position={{ lat: 40.712776, lng: -74.005974 }} />
// // // // // //         </Map>
// // // // // //       </div> */}
// // // // // //       <div className="contact-container">
// // // // // //         <div className="contact-info">
// // // // // //           <div className="info-box">
// // // // // //             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
// // // // // //             <h3>Location:</h3>
// // // // // //             <p>123 Street, New York, USA</p>
// // // // // //           </div>
// // // // // //           <div className="info-box">
// // // // // //             <FontAwesomeIcon icon={faClock} className="icon" />
// // // // // //             <h3>Open Hours:</h3>
// // // // // //             <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
// // // // // //           </div>
// // // // // //           <div className="info-box">
// // // // // //             <FontAwesomeIcon icon={faEnvelope} className="icon" />
// // // // // //             <h3>Email:</h3>
// // // // // //             <p>info@example.com</p>
// // // // // //           </div>
// // // // // //           <div className="info-box">
// // // // // //             <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
// // // // // //             <h3>Call:</h3>
// // // // // //             <p>+1 123 456 7890</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="contact-form">
// // // // // //           <h3>Send Message</h3>
// // // // // //           <form>
// // // // // //             <input type="text" name="name" placeholder="Your Name" required />
// // // // // //             <input
// // // // // //               type="email"
// // // // // //               name="email"
// // // // // //               placeholder="Your Email"
// // // // // //               required
// // // // // //             />
// // // // // //             <input type="text" name="subject" placeholder="Subject" required />
// // // // // //             <textarea name="message" placeholder="Message" required></textarea>
// // // // // //             <button type="submit">Send Message</button>
// // // // // //           </form>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <footer className="footer">
// // // // // //         <p>&copy; Copyright Palz Food Court. All Rights Reserved</p>
// // // // // //       </footer>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Contact;

// // // // // // // import React from "react";
// // // // // // // import "./contact.css";
// // // // // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // // // // import {
// // // // // // //   faMapMarkerAlt,
// // // // // // //   faPhoneAlt,
// // // // // // //   faEnvelope,
// // // // // // // } from "@fortawesome/free-solid-svg-icons";

// // // // // // // function Contact() {
// // // // // // //   return (
// // // // // // //     <div className="App">
// // // // // // //       <header className="App-header">
// // // // // // //         <div className="contact-container">
// // // // // // //           <div className="contact-details">
// // // // // // //             <h2>Contact Us</h2>
// // // // // // //             <p>
// // // // // // //               For more information you can contact us via the following
// // // // // // //               platforms.
// // // // // // //             </p>
// // // // // // //             <div className="contact-info">
// // // // // // //               <div className="address">
// // // // // // //                 <h3>Address</h3>
// // // // // // //                 <p>
// // // // // // //                   <FontAwesomeIcon icon={faMapMarkerAlt} /> Bukoto-Ntinda road
// // // // // // //                   <br />
// // // // // // //                   Opposite Kabira
// // // // // // //                   <br />
// // // // // // //                   Street no.28
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //               <div className="phone">
// // // // // // //                 <h3>Phone</h3>
// // // // // // //                 <p>
// // // // // // //                   <FontAwesomeIcon icon={faPhoneAlt} /> +256 704600178
// // // // // // //                   <br />
// // // // // // //                   <FontAwesomeIcon icon={faPhoneAlt} /> +256 706875399
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //               <div className="email">
// // // // // // //                 <h3>Email</h3>
// // // // // // //                 <p>
// // // // // // //                   <FontAwesomeIcon icon={faEnvelope} />{" "}
// // // // // // //                   onlinefoodshop874@gmail.com
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //           <div className="contact-form">
// // // // // // //             <h3>Send Message</h3>
// // // // // // //             <form>
// // // // // // //               <input type="text" name="name" placeholder="Full Name" required />
// // // // // // //               <input type="email" name="email" placeholder="Email" required />
// // // // // // //               <textarea
// // // // // // //                 name="message"
// // // // // // //                 placeholder="Type your Message..."
// // // // // // //                 required
// // // // // // //               ></textarea>
// // // // // // //               <button type="submit">Send</button>
// // // // // // //             </form>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </header>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Contact;

// // // // // // // GoogleApiWrapper({
// // // // // // //     apiKey: "YOUR_GOOGLE_MAPS_API_KEY",
// // // // // // //   })
// // // // src/components/ContactForm.js

// // // import React, { useState } from "react";
// // // import { sendContactMessage } from "../api/api"; // Adjust path if necessary

// // // const ContactForm = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     subject: "",
// // //     message: "",
// // //   });

// // //   const [error, setError] = useState(null);
// // //   const [success, setSuccess] = useState(false);

// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value,
// // //     });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError(null);
// // //     setSuccess(false);

// // //     try {
// // //       await sendContactMessage(formData);
// // //       setSuccess(true);
// // //       // Clear form
// // //       setFormData({
// // //         name: "",
// // //         email: "",
// // //         subject: "",
// // //         message: "",
// // //       });
// // //     } catch (err) {
// // //       console.error("Error sending message:", err);
// // //       setError(err.response ? err.response.data : "An error occurred");
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Contact Us</h2>
// // //       <form onSubmit={handleSubmit}>
// // //         <div>
// // //           <label>Name:</label>
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             value={formData.name}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         <div>
// // //           <label>Email:</label>
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             value={formData.email}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         <div>
// // //           <label>Subject:</label>
// // //           <input
// // //             type="text"
// // //             name="subject"
// // //             value={formData.subject}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </div>
// // //         <div>
// // //           <label>Message:</label>
// // //           <textarea
// // //             name="message"
// // //             value={formData.message}
// // //             onChange={handleChange}
// // //             required
// // //           ></textarea>
// // //         </div>
// // //         <button type="submit">Send Message</button>
// // //       </form>
// // //       {success && <p style={{ color: "green" }}>Message sent successfully!</p>}
// // //       {error && <p style={{ color: "red" }}>{error}</p>}
// // //     </div>
// // //   );
// // // };

// // // export default ContactForm;

// // // ContactForm.js
// // // import React, { useState } from "react";
// // // import { sendContactMessage } from "../api/api"; // Adjust path if necessary
// // // import "./contact.css"; // Import your CSS file

// // // const Contact = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     subject: "",
// // //     message: "",
// // //   });

// // //   const [error, setError] = useState(null);
// // //   const [success, setSuccess] = useState(false);

// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value,
// // //     });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError(null);
// // //     setSuccess(false);

// // //     try {
// // //       await sendContactMessage(formData);
// // //       setSuccess(true);
// // //       // Clear form
// // //       setFormData({
// // //         name: "",
// // //         email: "",
// // //         subject: "",
// // //         message: "",
// // //       });
// // //     } catch (err) {
// // //       console.error("Error sending message:", err);
// // //       setError(err.response ? err.response.data : "An error occurred");
// // //     }
// // //   };

// // //   return (
// // //     <div className="container">
// // //       <div className="infoSection">
// // //         <h2 className="header">For more Information</h2>
// // //         <p className="info">
// // //           <i className="fas fa-map-marker-alt"></i> Location: Kireka Jinja Rd In
// // //           front Of Poolnest Pub, Kireka, Uganda
// // //         </p>
// // //         <p className="info">
// // //           <i className="fas fa-clock"></i> Open Hours: Sun-Fri: 24hrs, Sat:
// // //           6pm-6am
// // //         </p>
// // //         <p className="info">
// // //           <i className="fas fa-envelope"></i> Email: palsfoodcourt@gmail.com
// // //         </p>
// // //         <p className="info">
// // //           <i className="fas fa-phone"></i> Call: +256 753175000
// // //         </p>
// // //       </div>
// // //       <div className="formSection">
// // //         <h2 className="header">Send Message</h2>
// // //         <form onSubmit={handleSubmit} className="form">
// // //           <div className="inputGroup">
// // //             <input
// // //               type="text"
// // //               name="name"
// // //               placeholder="Your Name"
// // //               value={formData.name}
// // //               onChange={handleChange}
// // //               required
// // //               className="input"
// // //             />
// // //           </div>
// // //           <div className="inputGroup">
// // //             <input
// // //               type="email"
// // //               name="email"
// // //               placeholder="Your Email"
// // //               value={formData.email}
// // //               onChange={handleChange}
// // //               required
// // //               className="input"
// // //             />
// // //           </div>
// // //           <div className="inputGroup">
// // //             <input
// // //               type="text"
// // //               name="subject"
// // //               placeholder="Subject"
// // //               value={formData.subject}
// // //               onChange={handleChange}
// // //               required
// // //               className="input"
// // //             />
// // //           </div>
// // //           <div className="inputGroup">
// // //             <textarea
// // //               name="message"
// // //               placeholder="Message"
// // //               value={formData.message}
// // //               onChange={handleChange}
// // //               required
// // //               className="textarea"
// // //             ></textarea>
// // //           </div>
// // //           <button type="submit" className="button">
// // //             Send Message
// // //           </button>
// // //         </form>
// // //         {success && (
// // //           <p className="successMessage">Message sent successfully!</p>
// // //         )}
// // //         {error && <p className="errorMessage">{error}</p>}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Contact;

// // // ContactForm.js
// // import React, { useState } from "react";
// // import { sendContactMessage } from "../api/api"; // Adjust path if necessary
// // import "./contact.css"; // Import your CSS file

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     subject: "",
// //     message: "",
// //   });

// //   const [error, setError] = useState(null);
// //   const [success, setSuccess] = useState(false);

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError(null);
// //     setSuccess(false);

// //     try {
// //       await sendContactMessage(formData);
// //       setSuccess(true);
// //       // Clear form
// //       setFormData({
// //         name: "",
// //         email: "",
// //         subject: "",
// //         message: "",
// //       });
// //     } catch (err) {
// //       console.error("Error sending message:", err);
// //       setError(err.response ? err.response.data : "An error occurred");
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <div className="infoSection">
// //         <h2 className="header">For more Information</h2>
// //         <p className="info">
// //           <i className="fas fa-map-marker-alt"></i> Location: Kireka Jinja Rd In
// //           front Of Poolnest Pub, Kireka, Uganda
// //         </p>
// //         <p className="info">
// //           <i className="fas fa-clock"></i> Open Hours: Sun-Fri: 24hrs, Sat:
// //           6pm-6am
// //         </p>
// //         <p className="info">
// //           <i className="fas fa-envelope"></i> Email: palsfoodcourt@gmail.com
// //         </p>
// //         <p className="info">
// //           <i className="fas fa-phone"></i> Call: +256 753175000
// //         </p>
// //       </div>
// //       <div className="formSection">
// //         <h2 className="header">Send Message</h2>
// //         <form onSubmit={handleSubmit} className="form">
// //           <div className="inputGroup">
// //             <input
// //               type="text"
// //               name="name"
// //               placeholder="Your Name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               required
// //               className="input"
// //             />
// //           </div>
// //           <div className="inputGroup">
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Your Email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //               className="input"
// //             />
// //           </div>
// //           <div className="inputGroup">
// //             <input
// //               type="text"
// //               name="subject"
// //               placeholder="Subject"
// //               value={formData.subject}
// //               onChange={handleChange}
// //               required
// //               className="input"
// //             />
// //           </div>
// //           <div className="inputGroup">
// //             <textarea
// //               name="message"
// //               placeholder="Message"
// //               value={formData.message}
// //               onChange={handleChange}
// //               required
// //               className="textarea"
// //             ></textarea>
// //           </div>
// //           <button type="submit" className="button">
// //             Send Message
// //           </button>
// //         </form>
// //         {success && (
// //           <p className="successMessage">Message sent successfully!</p>
// //         )}
// //         {error && <p className="errorMessage">{error}</p>}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Contact;

// import React, { useState } from "react";
// import "./contact.css";
// import { sendContactMessage } from "../api/api"; // Adjust path if necessary

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(false);

//     try {
//       await sendContactMessage(formData);
//       setSuccess(true);
//       // Clear form
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error("Error sending message:", err);
//       setError(err.response ? err.response.data : "An error occurred");
//     }
//   };

//   return (
//     <div className="contact-container">
//       <h2 className="header">For more Information</h2>
//       <div className="infoSection">

//         <p className="info">
//           <i className="fas fa-map-marker-alt"></i> Location: Kireka Jinja Rd In
//           front Of Poolnest Pub, Kireka, Uganda
//         </p>
//         <p className="info">
//           <i className="fas fa-clock"></i> Open Hours: Sun-Fri: 24hrs, Sat:
//           6pm-6am
//         </p>
//         <p className="info">
//           <i className="fas fa-envelope"></i> Email: palsfoodcourt@gmail.com
//         </p>
//         <p className="info">
//           <i className="fas fa-phone"></i> Call: +256 753175000
//         </p>
//       </div>
//       <div className="formSection">
//         <h2 className="header">Send Message</h2>
//         <form onSubmit={handleSubmit} className="form">
//           <div className="inputGroup">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="input"
//             />
//           </div>
//           <div className="inputGroup">
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="input"
//             />
//           </div>
//           <div className="inputGroup">
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//               className="input"
//             />
//           </div>
//           <div className="inputGroup">
//             <textarea
//               name="message"
//               placeholder="Message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="textarea"
//             ></textarea>
//           </div>
//           <button type="submit" className="button">
//             Send Message
//           </button>
//         </form>
//         {success && (
//           <p style={{ color: "green" }}>Message sent successfully!</p>
//         )}
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import { useState } from "react";
// import { sendContactMessage } from "../api/api"; // Assuming you have an API function for sending messages
// import "./contact.css";
// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(false);

//     try {
//       await sendContactMessage(formData);
//       setSuccess(true);
//       // Clear form
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error("Error sending message:", err);
//       setError(err.response ? err.response.data : "An error occurred");
//     }
//   };

//   return (
//     <div className="contact-container">
//       <h1>For More Information</h1>
//       <div className="infoSection">
//         <p className="info">
//           <i className="fas fa-map-marker-alt"></i>
//           <span className="cont">Location:</span> Kireka Jinja Rd Infront Of
//           Poolnest Pub, Kireka, Uganda
//         </p>
//         <p className="info">
//           <i className="fas fa-clock"></i>{" "}
//           <span className="cont">Open Hours: </span>Sun-Fri: 24hrs, Sat: 6pm-6am
//         </p>
//         <p className="info">
//           <i className="fas fa-envelope"></i>{" "}
//           <span className="cont">Email:</span> palsfoodcourt@gmail.com
//         </p>
//         <p className="info">
//           <i className="fas fa-phone"></i>
//           <span className="cont">Call:</span> +256 753175000
//         </p>
//       </div>
//       <div className="formSection">
//         <h2 className="header">Send Message</h2>
//         <form onSubmit={handleSubmit} className="form">
//           <div className="inputGroup">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="input"
//             />
//           </div>
//           <div className="inputGroup">
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="input"
//             />
//           </div>
//           <div className="inputGroup">
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//               className="input"
//             />
//           </div>
//           <div className="inputGroup">
//             <textarea
//               name="message"
//               placeholder="Message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="textarea"
//             ></textarea>
//           </div>
//           <button type="submit" className="button">
//             Send Message
//           </button>
//         </form>
//         {success && (
//           <p className="message success">Message sent successfully!</p>
//         )}
//         {error && <p className="message error">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { sendContactMessage } from "../api/api"; // Adjust this path as necessary
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      await sendContactMessage(formData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Error sending message:", err);
      setError(err.response ? err.response.data.error : "An error occurred");
    }
  };

  return (
    <>
      <div className="text-center">
        <h1>For more Information;</h1>
      </div>
      <div className="contact-container">
        <div className="infoSection">
          <p className="info">
            <i className="fas fa-map-marker-alt"></i>
            <span className="cont">Location: </span> Kireka Jinja Rd Infront Of
            Poolnest Pub, Kireka, Uganda
          </p>
          <p className="info">
            <i className="fas fa-clock"></i>{" "}
            <span className="cont">Open Hours: </span>Sun-Fri: 24hrs, Sat:
            6pm-6am
          </p>
          <p className="info">
            <i className="fas fa-envelope"></i>{" "}
            <span className="cont">Email: </span> palsfoodcourt@gmail.com
          </p>
          <p className="info">
            <i className="fas fa-phone"></i>
            <span className="cont">Call: </span> +256 753175000
          </p>
          <div className="icons">
            <a href="https://www.facebook.com/PalsFoodCourtskireka/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/palzfoodcourtofficial_/">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="formSection">
          <h2 className="header">Send Message</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="inputGroup">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <div className="inputGroup">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <div className="inputGroup">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <div className="inputGroup">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="textarea"
              ></textarea>
            </div>
            <button type="submit" className="button">
              Send Message
            </button>
          </form>
          {success && (
            <p className="message success">Message sent successfully!</p>
          )}
          {error && <p className="message error">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Contact;
