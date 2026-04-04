const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// ✅ SIGNUP API
router.post("/signup", async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;

    // 🔥 Email validation
    if (!email.includes("@")) {
      return res.status(400).json({ msg: "Invalid email" });
    }

    // 🔥 Password length check
    if (password.length < 6) {
      return res.status(400).json({
        msg: "Password must be at least 6 characters"
      });
    }

    // check passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match" });
    }

    // check user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // save user
    const user = await User.create({
      email,
      password: hashedPassword
    });

    res.status(201).json({ msg: "Signup successful" });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});


// ✅ LOGIN API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔥 ADDED VALIDATION
    if (!email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    // 🔥 Use ENV for secret key
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ msg: "Login successful", token });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});























// ✅ FORGOT / UPDATE PASSWORD
router.post("/forgot-password", async (req, res) => {
  try {
    const { email, newPassword, confirmPassword } = req.body;

    // 🔥 Password length check
    if (newPassword.length < 6) {
      return res.status(400).json({
        msg: "Password must be at least 6 characters"
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    // 🔥 Check same password
    const isSamePassword = await bcrypt.compare(newPassword, user.password);

    if (isSamePassword) {
      return res.status(400).json({
        msg: "New password cannot be same as old password"
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    res.json({ msg: "Password updated successfully" });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;