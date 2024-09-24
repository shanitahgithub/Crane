import React, { useState } from "react";
import axios from "axios";

const AddItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "myCategory",
    menu_id: 0,
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v2/item_bp/`,
        formData
      );
      setSuccessMessage("Item added successfully!");
      setFormData({
        name: "",
        description: "",
        price: "",
        image: "",
        category: "",
        menu_id: 0, // Clear category after submission if needed
      });
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Error adding item. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Add New Item</h2>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            hidden
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <select
            name="menu_id"
            value={formData.menu_id}
            onChange={handleChange}
          >
            <option value={0}>Select Category</option>
            <option value={8}>Breakfast</option>
            <option value={9}>Lunch</option>
            <option value={11}>Fast Foods</option>
            <option value={12}>Salads</option>
            <option value={13}>Drinks</option>
          </select>
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
