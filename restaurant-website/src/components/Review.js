// // export default Order;
// import React, { useState } from "react";
// import axios from "axios";
// import "./order.css"; // Import your CSS file for styling

// const Order = () => {
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleCreateAccount = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/users/register",
//         {
//           username,
//           password,
//         }
//       );
//       console.log(response.data);
//       setIsRegistered(true);
//     } catch (error) {
//       console.error("Error creating account:", error);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/login", {
//         username,
//         password,
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   const handleCreateAccountSubmit = (e) => {
//     e.preventDefault();
//     handleCreateAccount();
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     handleLogin();
//   };

//   return (
//     <div className="login-link">
//       <a href="/register">Create an Account</a>
//     </div>
//   );
// };

// export default Order;

import React, { useState } from "react";
import "./review.css";
import { addReview } from "../api/api"; // Import your API function

// Component for writing a review
const WriteReviewForm = ({ handleReviewSubmit, handleCancel }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reviewData = {
        restaurant_id: 1, // Replace with actual restaurant ID
        user_id: 4,
        rating: 5, // Replace with actual rating value from form
        comment: message,
      };
      await addReview(reviewData);
      handleReviewSubmit({
        name, // Assuming you don't collect user's name in the form
        message,
        date: new Date().toLocaleDateString(),
      });
    } catch (error) {
      console.error("Error submitting review:", error);
    }
    setName("");
    setMessage("");
  };

  return (
    <div className="write-review-form">
      <h3>Write a Review</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

// Component for displaying reviews
const Reviews = ({ reviews, handleWriteReview }) => {
  return (
    <div className="reviews">
      <h3>Reviews</h3>
      <button className="write-review" onClick={handleWriteReview}>
        Write a review
      </button>
      {reviews.map((review, index) => (
        <div className="review" key={index}>
          {/* Display review content */}
          <h4>{review.name}</h4>
          <p>Review Date • {review.date}</p>
          <p>{review.message}</p>
          {review.response && (
            <div className="response">
              <h5>Response by Restaurant</h5>
              <p>Response Date • {review.responseDate}</p>
              <p>{review.response}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Main Review component
const Review = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Charlotte Andrews",
      date: "Jan 1, 2024",
      message:
        "Lorem ipsum dolor sit amet consectetur. A eleifend massa nullam libero consectetur purus. Leo aliquam lobortis est id. Nibh eu turpis in lobortis tortor dui. Amet leo et tristique risus. Amet nisl accumsan gravida vel sagittis lobortis ultrices in.",
      response:
        "Lorem ipsum dolor sit amet consectetur. Diam feugiat pulvinar.",
      responseDate: "Jan 1, 2024",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleWriteReview = () => {
    setShowForm(true);
  };

  const handleReviewSubmit = (review) => {
    setReviews([review, ...reviews]);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="review-container">
      <Reviews reviews={reviews} handleWriteReview={handleWriteReview} />
      {showForm && (
        <WriteReviewForm
          handleReviewSubmit={handleReviewSubmit}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Review;
