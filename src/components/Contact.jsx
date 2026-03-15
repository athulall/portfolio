import React, { useState } from 'react'
import axios from 'axios'
import './Contact.css'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/contact/send",
        formData
      );

      alert(response.data.message);

      // Clear form after submit
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });

    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };

  return (
    <section id="contact">
      <form onSubmit={handleSubmit}>
        <div className='contact'>
          <h1>Contact Me</h1>

          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label>Phone No:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label>Ask Something</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here"
            required
          ></textarea>

          <button type="submit">Send Message</button>

        </div>
      </form>
    </section>
  )
}

export default Contact