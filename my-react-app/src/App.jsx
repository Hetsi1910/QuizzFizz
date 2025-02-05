

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import SigninPage from './Components/SigninPage/SigninPage'
import SignupPage from './Components/SignupPage/SignupPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}


export default App
