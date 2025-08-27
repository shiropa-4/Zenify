import "../styles/Features.css";
import { useNavigate } from "react-router-dom";

function Features() {
  const navigate = useNavigate();

  return (
    <section className="features">
      <h2>Features</h2>
      <div className="feature-cards">
        <div className="card-mt" onClick={() => navigate("/mood-tracker")}>
          Mood Tracker
        </div>
        <div className="card-cb" onClick={() => navigate("/chatbot")}>
          Chatbot
        </div>
        <div className="card-pm" onClick={() => navigate("/mentor")}>
          Peers / Mentor
        </div>
        <div className="card-g" onClick={() => navigate("/games")}>
          Games
        </div>
      </div>
    </section>
  );
}

export default Features;
