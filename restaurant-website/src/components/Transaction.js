// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home";
// import Menu from "./components/Menu";
// import About from "./components/about";
// import Review from "./components/Review";
// import Order from "./components/Order";
// import Category from "./components/MenuItem";
// import Contact from "./components/contact";
// import Login from "./components/login";
// import Register from "./components/register";
// import Services from "./components/services";
// import Layout from "./components/layout";
// import pals from "./pals.png";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <div className="Logo">
//             <img src={pals} className="logo-1" alt="logo" />
//           </div>
//           <nav>
//             <Link className="App-link" to="/">
//               Home
//             </Link>
//             <Link className="App-link" to="/about">
//               About Us
//             </Link>
//             <Link className="App-link" to="/menu">
//               Menu
//             </Link>
//             <Link className="App-link" to="/services">
//               Services
//             </Link>
//             <Link className="App-link" to="/reviews">
//               Reviews
//             </Link>
//             <Link className="App-link" to="/contact">
//               Contact Us
//             </Link>
//           </nav>
//         </header>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/menu" element={<Menu />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/reviews" element={<Review />} />
//             <Route path="/order" element={<Order />} />
//             <Route path="/order/:itemId" element={<Order />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/menu/:category" element={<Category />} />
//           </Routes>
//         </Layout>
//       </div>
//     </Router>
//   );
// }

// export default App;
