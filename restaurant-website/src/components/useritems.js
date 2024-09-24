// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const Users = () => {
// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     fetchUsers();
// //   }, []);

// //   const fetchUsers = async () => {
// //     try {
// //       const response = await axios.get(
// //         "http://127.0.0.1:5000/api/v2/users/users"
// //       );
// //       setUsers(response.data);
// //     } catch (error) {
// //       console.error("Error fetching users:", error);
// //     }
// //   };

// //   return (
// //     <section>
// //       <h3>Users</h3>
// //       <ul>
// //         {users.map((user) => (
// //           <li key={user.id}>
// //             <div>
// //               <strong>Name:</strong> {user.username}
// //               <br />
// //               <strong>Email:</strong> {user.email}
// //               <strong>Location:</strong> {user.location}
// //               <strong>Role:</strong> {user.role}
// //               <strong>Contact:</strong> {user.contact}
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </section>
// //   );
// // };

// // export default Users;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const token = localStorage.getItem("token"); // Assuming you store the token in local storage

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get(
//         "http://127.0.0.1:5000/api/v2/users/users",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   return (
//     <section>
//       <h3>Users</h3>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <div>
//               <strong>Name:</strong> {user.username}
//               <br />
//               <strong>Email:</strong> {user.email}
//               <br />
//               <strong>Location:</strong> {user.location}
//               <br />
//               <strong>Role:</strong> {user.role}
//               <br />
//               <strong>Contact:</strong> {user.contact}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Users;
