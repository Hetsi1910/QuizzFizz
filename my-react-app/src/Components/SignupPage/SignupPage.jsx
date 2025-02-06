import  { useState } from 'react';  // Ensure useState is imported
import { Link } from "react-router-dom";
import google from "../assets/Google.png";
import signup from "../assets/Signupimage.png";
import logo from "../assets/logo.png";
import './SignupPage.css';
import { createUserWithEmailAndPassword, 
         getAuth, 
         GoogleAuthProvider,
         signInWithPopup } from 'firebase/auth';
import { app } from "../../context/firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignupPage = () => {
  const [name, setName] = useState("");  // Ensure default value is ""
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = (event) => {
    event.preventDefault();  // Prevents page reload

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("Success"))
      .catch((error) => alert(error.message)); // Proper error handling
  };

  const signupWithGoogle = () =>{
    signInWithPopup(auth, googleProvider);
  }

  return (
    <div className="signup-container">
      <div className="signup-header">
        <img src={logo} alt="QuizFizz Logo" className="logo-image" />
      </div>  

      <div className="signup-main">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={createUser}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                onChange={(e) => setName(e.target.value)}
                value={name || ""}  // Fallback in case of undefined
                type="text"
                id="name"
                placeholder="Enter your name" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                onChange={(e) => setEmail(e.target.value)}
                value={email || ""}
                type="email"
                id="email"
                placeholder="Enter your email" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password || ""}
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>

          <div className="signin-link">
            <p>
              Already have an account? <Link to="/signin">Login</Link>
            </p>
          </div>

          <div className="or-section">
            <span>OR</span>
          </div>

          <button onClick={signupWithGoogle} className="google-signup-btn">
            <img src={google} alt="Google Icon" />
            Sign up with Google
          </button>
        </div>

        <div className="signup-illustration">
          <img src={signup} alt="Illustration" className="illustration-img" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
