// import React from "react";
// import "../styles/MoodInsights.css";

// const MoodInsights = () => {
//   return (
//     <div className="mood-insights-card">
//       <h2 className="title">Mood Insights</h2>
//       <p className="subtitle">Understand your emotions and patterns</p>

//       <div className="mood-summary">
//         <h3>Mood Summary</h3>
//         <div className="common-mood">
         
//           <span className="text">Most common mood:   <b>😊Happy</b></span>
//         </div>
//       </div>

//       <div className="chart-section">
//         <div className="chart-placeholder">
//           {/* You can replace this with a real chart (Recharts/Chart.js) */}
//           <span>📈 Mood Graph</span>
//         </div>
//         <div className="days">
//           <span>Mon</span>
//           <span>Tue</span>
//           <span>Wed</span>
//           <span>Thu</span>
//           <span>Fri</span>
//           <span>Sat</span>
//           <span>Sun</span>
//         </div>
//       </div>

//       <div className="patterns">
//         <h3>Daily Patterns</h3>
//         <p>☀️ You feel best in the afternoon</p>
//         <p>📅 You often feel stressed on Mondays</p>
//       </div>

//       <div className="recommendations">
//         <h3>Recommendations</h3>
//         <p>🖐 You’re making great progress in understanding your emotions!</p>
//       </div>
//     </div>
//   );
// };

// export default MoodInsights;

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import "../styles/MoodInsights.css";

const data = [
  { day: "Mon", mood: 3 },
  { day: "Tue", mood: 4 },
  { day: "Wed", mood: 2 },
  { day: "Thu", mood: 3 },
  { day: "Fri", mood: 5 },
  { day: "Sat", mood: 4 },
  { day: "Sun", mood: 3 }
];

const MoodInsights = () => {
  return (
    <div className="page-container">
    <div className="mood-insights-card">
      <h2 className="title">Mood Insights</h2>
      <p className="subtitle">Understand your emotions and patterns</p>

      <div className="mood-summary">
        <h3>Mood Summary</h3>
        <div className="common-mood">
          <span className="emoji">😊</span>
          <span className="text">Most common mood: <b>Happy</b></span>
        </div>
      </div>

      <div className="chart-section">
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={data}>
            <XAxis dataKey="day" tickLine={false} axisLine={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="mood"
              stroke="#f6b93b"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="patterns">
        <h3>Daily Patterns</h3>
        <p>☀️ You feel best in the afternoon</p>
        <p>📅 You often feel stressed on Mondays</p>
      </div>

      <div className="recommendations">
        <h3>Recommendations</h3>
        <p>🖐 You're making great progress in understanding your emotions!</p>
      </div>
    </div>
    </div>
  );
};

export default MoodInsights;
