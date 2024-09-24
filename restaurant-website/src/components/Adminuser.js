// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const UserDetails = ({ match }) => {
//   const userId = match.params.userId;
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch user details based on userId
//     axios
//       .get(`http://127.0.0.1:5000/api/v2/users/${userId}`)
//       .then((response) => {
//         setUser(response.data); // Assuming response.data contains user details
//       })
//       .catch((error) => {
//         console.error(`Error fetching user with ID ${userId}:`, error);
//       });
//   }, [userId]);

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>User Details</h2>
//       <div>
//         <strong>Username:</strong> {user.user_name}
//         <br />
//         <strong>Email:</strong> {user.email}
//         <br />
//         <strong>Location:</strong> {user.location}
//         <br />
//         <strong>Contact:</strong> {user.contact}
//         {/* Add other user details as needed */}
//       </div>
//     </div>
//   );
// };

// export default UserDetails;
