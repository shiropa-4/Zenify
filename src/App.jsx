import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
/*import Features from "./components/Features";*/
import Footer from "./components/Footer";
import Home from "./components/Home";

import Login from "./pages/Login"; 
import Register from "./pages/Register"; // ✅ Import Register page
import MoodTracker from "./pages/MoodTracker";
import MoodInsights from "./pages/MoodInsights";
import PeersMentor from "./pages/PeersMentor";
import Chatbot from "./pages/Chatbot";
import Games from "./pages/Games";
import Profile from "./pages/Profile";

/*import Home from "./components/Home";*/
function App() {
  return (
    <Router>
      {/* Navbar will always be visible */}
      <Navbar /> 
    

      <Routes>

         <Route path="/Slider" element={<Slider />} />
         {/* Default route */}
        <Route path="/" element={<Home />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

         <Route path="/mood-tracker" element={<MoodTracker />} />
         <Route path="/insights" element={<MoodInsights />} />
         <Route path="/Chatbot" element={<Chatbot />} />
         <Route path="/mentor" element={<PeersMentor />} />
         <Route path="/games" element={<Games />} />
         <Route path="/home" element={<Home />} />
         <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer /> 
    </Router>
  );
}

export default App;
