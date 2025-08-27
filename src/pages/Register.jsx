import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Register.css';

function Register() {
  const [profession, setProfession] = useState("");

  return (
    <div className="register-container">
      <h2>Create Account</h2>
      <form className="register-form">
        {/* Full Name */}
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" required />

        {/* Profession */}
        <label>Profession</label>
        <select
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          required
        >
          <option value="">-- Select Profession --</option>
          <option value="school">School</option>
          <option value="college">College</option>
        </select>

        {/* Conditional fields */}
        {profession === "school" && (
          <>
            <label>Class</label>
            <select required>
              <option value="">-- Select Class --</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </>
        )}

        {profession === "college" && (
          <>
            <label>Year</label>
            <select required>
              <option value="">-- Select Year --</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </>
        )}

        {/* Age */}
        <label>Age</label>
        <input type="number" placeholder="Enter your age" required />

        {/* Email */}
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        {/* Submit */}
        <button type="submit">Register</button>
      </form>

      {/* Link to login */}
      <p className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
