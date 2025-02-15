
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import SigninPage from './Components/SigninPage/SigninPage'
import SignupPage from './Components/SignupPage/SignupPage'
import SearchPage from './Components/SearchPage/SearchPage';
import ResultPage from "./Components/ResultPage/ResultPage";
import Quiz from "./Components/Quiz/Quiz";
import Scoreboard from "./Components/Scoreboard/Scoreboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/scoreboard" element={<Scoreboard />} /> {/* Route for Scoreboard */}
        
      </Routes>
    </Router>
  );
}


export default App
