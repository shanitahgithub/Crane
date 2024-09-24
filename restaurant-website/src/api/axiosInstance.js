// import axios from "axios";

// const axiosInstance = axios.create({
//   // baseURL: "http://127.0.0.1:5000/api/v2"
//   baseURL: process.env.REACT_APP_BACKEND_URL + "/api/v2",
//   // Replace with your server URL
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Function to refresh access token
// const refreshAccessToken = async (refresh_token) => {
//   try {
//     const response = await axiosInstance.post("/users/refresh-token", {
//       refresh_token,
//     });
//     const { access_token } = response.data;

//     // Update access token in localStorage
//     const user = JSON.parse(localStorage.getItem("user"));
//     localStorage.setItem(
//       "user",
//       JSON.stringify({
//         ...user,
//         access_token,
//       })
//     );

//     return access_token;
//   } catch (error) {
//     console.error("Failed to refresh access token:", error);
//     throw error;
//   }
// };

// // Request interceptor to add access token to headers
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const access_token = user ? user.access_token : null;
//     if (access_token) {
//       config.headers["Authorization"] = `Bearer ${access_token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor to handle token expiration
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     // Handle 401 Unauthorized (token expired) error
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const user = JSON.parse(localStorage.getItem("user"));
//         const new_access_token = await refreshAccessToken(user.refresh_token);

//         // Retry original request with new access token
//         originalRequest.headers["Authorization"] = `Bearer ${new_access_token}`;
//         return axiosInstance(originalRequest);
//       } catch (error) {
//         console.error("Failed to refresh access token:", error);
//         // Handle token refresh failure (e.g., redirect to login)
//         throw error;
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;

import axios from "axios";

// Use environment variable for the backend URL
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`, // Replace with your hosted backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to refresh access token
const refreshAccessToken = async (refresh_token) => {
  try {
    const response = await axiosInstance.post("/users/refresh-token", {
      refresh_token,
    });
    const { access_token } = response.data;

    // Update access token in localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        access_token,
      })
    );

    return access_token;
  } catch (error) {
    console.error("Failed to refresh access token:", error);
    throw error;
  }
};

// Request interceptor to add access token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const access_token = user ? user.access_token : null;
    if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized (token expired) error
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const new_access_token = await refreshAccessToken(user.refresh_token);

        // Retry original request with new access token
        originalRequest.headers["Authorization"] = `Bearer ${new_access_token}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        console.error("Failed to refresh access token:", error);
        // Handle token refresh failure (e.g., redirect to login)
        throw error;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
