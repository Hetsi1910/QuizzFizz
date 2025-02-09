import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components for routing
import './App.css' // Import global styles
import LandingPage from './Components/LandingPage/LandingPage' // Import LandingPage component
import SigninPage from './Components/SigninPage/SigninPage' // Import SigninPage component
import SignupPage from './Components/SignupPage/SignupPage' // Import SignupPage component
import SearchPage from './Components/SearchPage/SearchPage'; // Import SearchPage component

function App() {
  return (
    <Router> {/* Wrap the app in Router to enable navigation */}
      <Routes> {/* Define all application routes */}
        <Route path="/" element={<LandingPage />} /> {/* Route for the landing page */}
        <Route path="/signin" element={<SigninPage />} /> {/* Route for the sign-in page */}
        <Route path="/signup" element={<SignupPage />} /> {/* Route for the sign-up page */}
        <Route path="/search" element={<SearchPage />} /> {/* Route for the search page */}
      </Routes>
    </Router>
  );
}

export default App; // Export App component as default
