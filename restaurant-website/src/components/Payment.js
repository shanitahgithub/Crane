import React, { useState, useEffect } from "react";
import "./review.css";
import { addReview, fetchReviews } from "../api/api"; // Import your API functions

// Component for writing a review
const WriteReviewForm = ({ handleReviewSubmit, handleCancel }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reviewData = {
        restaurant_id: 1, // Replace with actual restaurant ID
        user_id: 4, // Replace with actual user ID or remove if not needed
        rating: 5, // Replace with actual rating value from form
        comment: message,
        name: name, // Assuming you collect user's name in the form
      };
      await addReview(reviewData);
      handleReviewSubmit({
        name,
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
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const data = await fetchReviews({ restaurant_id: 1 }); // Replace with actual restaurant ID
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviewsData();
  }, []);

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
