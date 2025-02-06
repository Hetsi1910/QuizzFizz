import { useState } from 'react';
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../context/firebase";
import logo from '../assets/logo.png';
import signin from "../assets/Signinimage.png";
import './SigninPage.css';

const auth = getAuth(app);

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signinUser = (event) => {
    event.preventDefault(); // Prevent page reload
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Signin success"))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="signin-container">
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
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="signin-btn">
              Login
            </button>
          </form>
          <div className="signup-link">
            Not yet a member? <Link to="/signup">Sign up now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
