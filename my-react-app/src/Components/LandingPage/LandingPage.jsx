import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import './LandigPage.css'; 


function LandingPage(){

    return (
        <div className="container">
            <div className="header">
                <div className="auth-buttons">
                <Link to="/signin">
                    <button className="btn">Sign In</button>
                </Link>
                <Link to="/signup">
                    <button className="btn">Sign Up</button>
                </Link>
                </div>
            </div>
            
            <div className="logo">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>

            <div className="main-content">
                <h1>AI QUIZ MAKER</h1>
                <p>Experience the Power of AI-Powered Quizzes</p>
            </div>
    

            <div className="steps">
                <h2>Here&apos;s <span>how it works</span></h2>
                <p>
                    <strong>Step 1....</strong>Click <span> &quot; Try the AI Quiz &quot; </span>to get started.
                </p>
                <p>
                    <strong>Step 2....</strong>Describe the type of quiz you want.
                </p>
                <p>
                    <strong>Step 3....</strong>That&apos;s it! Now AI will generate the quiz.
                </p>
            </div>

    
            {/* Call to Action Section */}
            <div className="cta">
              <Link to="/signin">
                <button className="cta-btn">Try the AI Quiz</button>
              </Link>
            </div>
        </div>
    );
    
}

export default LandingPage
