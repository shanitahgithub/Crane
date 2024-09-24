// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../api/api";
// import "./login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await loginUser(formData);
//       console.log("Login Response:", response.data); // Log the response for debugging
//       localStorage.setItem("user", JSON.stringify(response.data));
//       // Handle successful login logic here (e.g., store tokens, redirect)
//       setSuccessMessage("Login successful!"); // Set success message
//       window.location.reload();
//       // Clear form data after successful login
//       setFormData({
//         email: "",
//         password: "",
//       });

//       setError(""); // Clear any previous errors

//       // Redirect to home page
//       setTimeout(() => {
//         navigate("/");
//       }, 5000);
//     } catch (error) {
//       console.error("Login Error:", error);
//       setError("Invalid Email or Password."); // Set appropriate error message
//       setSuccessMessage(""); // Clear success message
//     }
//   };

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       navigate("/");
//       // Assuming this is part of your login logic
//     }
//   });

//   return (
//     <div className="form-1">
//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="login-in">
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//         {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      console.log("Login Response:", response.data); // Log the response for debugging
      localStorage.setItem("user", JSON.stringify(response.data));
      // Handle successful login logic here (e.g., store tokens, redirect)
      setSuccessMessage("Login successful!"); // Set success message
      // Clear form data after successful login
      setFormData({
        email: "",
        password: "",
      });

      setError(""); // Clear any previous errors

      // Check if specific email and password are logged in
      if (response.data.email === "shanitahkhan874@gmail.com") {
        // Redirect to dashboard page
        // navigate("/dashboard");
        window.location.href = "/dashboard";
      } else {
        // Redirect to home page
        setTimeout(() => {
          // navigate("/");
          window.location.href = "/";
        }, 5000); // Redirect after 5 seconds
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("Invalid Email or Password."); // Set appropriate error message
      setSuccessMessage(""); // Clear success message
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      navigate("/");
      // Assuming this is part of your login logic
    }
  }, [navigate]);

  return (
    <div className="form-1">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-in">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
