

import React, { useState } from "react";
import "../styles/MoodTracker.css"; 

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { useNavigate } from "react-router-dom";

export default function MoodTracker() {
  const [mood, setMood] = useState("");
  const [intensity, setIntensity] = useState(5);
  const [notes, setNotes] = useState("");

const navigate = useNavigate();

  // Sample weekly data
  const data = [
    { day: "Mon", mood: 7 },
    { day: "Tue", mood: 5 },
    { day: "Wed", mood: 8 },
    { day: "Thu", mood: 6 },
    { day: "Fri", mood: 9 },
    { day: "Sat", mood: 4 },
    { day: "Sun", mood: 7 },
  ];

  const barColors = [
    "#f59e0b",
    "#f87171",
    "#60a5fa",
    "#34d399",
    "#a78bfa",
    "#f472b6",
    "#10b981",
  ];

  const moods = ["🙂", "😊", "😐", "😟", "😡", "😴", "😍"];

  const handleSave = () => {
    console.log("Mood saved:", { mood, intensity, notes });
    alert("Mood saved successfully!");
  };

  return (
    <div className="mood-tracker">
      <h2>📊 Mood Tracker</h2>
      <p>"Track how you feel daily"</p>

      {/* Mood selection */}
      <div className="mood-options">
        {moods.map((m, idx) => (
          <button
            key={idx}
            className={`mood-btn ${mood === m ? "selected" : ""}`}
            onClick={() => setMood(m)}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Intensity slider */}
      <div className="intensity">
        <label>Mood Intensity:</label>
        <input
          type="range"
          min="1"
          max="10"
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
        />
        <span>{intensity}/10</span>
      </div>

      {/* Notes */}
      <div className="notes">
        <label>Notes:</label>
        <textarea
          placeholder="Want to describe your mood today?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      {/* Chart */}
      <h3>📅 Past Week's Mood Chart</h3>
      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Bar dataKey="mood" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={barColors[index % barColors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Buttons */}
      <div className="actions">
        <button className="save-btn" onClick={handleSave}>
          Save Mood
        </button>
        <button className="insights-btn"
        onClick={() => navigate("/insights")}>Get Insights</button>
      </div>
    </div>
  );
}
