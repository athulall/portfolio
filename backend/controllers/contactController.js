import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const newContact = new Contact({
      name,
      phone,
      email,
      message
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};