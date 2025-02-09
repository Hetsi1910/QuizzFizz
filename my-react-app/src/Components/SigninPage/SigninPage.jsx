import { useNavigate } from "react-router-dom"; // Hook for navigation
import { useState } from 'react'; // Hook to manage state
import { Link } from "react-router-dom"; // For navigation links
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Firebase authentication
import { app } from "../../context/firebase"; // Firebase app instance
import logo from '../assets/logo.png'; // Logo image import
import signin from "../assets/Signinimage.png"; // Sign-in illustration image import
import './SigninPage.css'; // Import CSS styles

// Initialize Firebase authentication
const auth = getAuth(app);

const SignInPage = () => {
  // State variables for email, password, and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigation hook

  // Function to handle user sign-in
  const signinUser = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setError(""); // Clear previous error messages
    
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Signin success");
        navigate("/search"); // Redirect to search page on success
      })
      .catch((err) => {
        console.log(err);
        alert("Login failed. Please check your credentials."); // Show error alert
      });
  };

  return (
    <div className="signin-container">
      {/* Decorative semicircles */}
      <div className="top-left-circle"></div>
      <div className="top-right-circle"></div>
      
      {/* Header Section */}
      <div className="signin-header">
        <img src={logo} alt="QuizFizz Logo" className="signin-logo" />
      </div>

      {/* Main Content */}
      <div className="signin-main">
        {/* Left Side: Illustration */}
        <div className="signin-illustration">
          <img src={signin} alt="Illustration" className="illustration-img-signin" />
        </div>

        {/* Right Side: Sign-In Form */}
        <div className="signin-form">
          <h2>Sign In</h2>
          <p>Sign in with your email and password.</p>
          {error && <p className="error-message">{error}</p>}
          
          {/* Sign-in Form */}
          <form onSubmit={signinUser}>
            <div className="form-group-signin">
              <label htmlFor="email">Email Address</label>
              <input 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                required
              />
            </div>
            
            <div className="form-group-signin">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            
            {/* Forgot Password Link */}
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
            
            {/* Submit Button */}
            <button type="submit" className="signin-btn">
              Login
            </button>
          </form>
          
          {/* Redirect to Sign-Up Page */}
          <div className="signup-link">
            Not yet a member? <Link to="/signup">Sign up now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
