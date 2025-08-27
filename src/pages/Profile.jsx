// import React from "react";
// import "../styles/Profile.css";

// const Profile = () => {
//   return (
//     <div className="profile-container">
//       {/* Header / Banner */}
//       <div className="profile-banner">
//         <img
//           src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
//           alt="Profile Banner"
//           className="banner-img"
//         />
//         <div className="profile-info">
//           <img
//             src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
//             alt="User Avatar"
//             className="avatar"
//           />
//           <h2 className="username">Pihu Chatterjee</h2>
//           <p className="user-bio">Lover of meditation • Finding inner peace 🌸</p>
//         </div>
//       </div>

//       {/* Profile Details Section */}
//       <div className="profile-details">
//         <h3>About Me</h3>
//         <p>
//           Hi, I’m Pihu! I’ve been practicing mindfulness and meditation for 3 years. 
//           Zenify helps me stay consistent and track my progress.
//         </p>
//       </div>

//       {/* Stats Section */}
//       <div className="profile-stats">
//         <div className="stat-card">
//           <h4>15</h4>
//           <p>Meditation Sessions</p>
//         </div>
//         <div className="stat-card">
//           <h4>8 hrs</h4>
//           <p>Total Time</p>
//         </div>
//         <div className="stat-card">
//           <h4>4</h4>
//           <p>Achievements</p>
//         </div>
//       </div>

//       {/* Settings & Actions */}
//       <div className="profile-actions">
//         <button className="btn">Edit Profile</button>
//         <button className="btn logout">Logout</button>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React from "react";
import "../styles/Profile.css";
import { FaCog, FaBell, FaMoon } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="header">zenify</div>

      <div className="profile-card">
        <div className="profile-pic-wrapper">
          <img
            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
            alt="profile"
            className="profile-pic"
          />
          <div className="edit-icon">
            <FiEdit2 size={14} />
          </div>
        </div>

        <h2 className="profile-title">Profile</h2>

        <div className="info-card">
          <p><strong>Name</strong> Jane Doe</p>
          <p><strong>Email</strong> jane@email.com</p>
          <p><strong>Joined</strong> April 1, 2024</p>
          <p><strong>Focus</strong> ✨ Meditation & Journaling</p>
        </div>

        <div className="stats">
          <div className="stat">
            <span className="stat-icon">⏰</span>
            <h3>120 min</h3>
            <p>Meditation Minut</p>
          </div>
          <div className="stat">
            <span className="stat-icon">💧</span>
            <h3>7 days</h3>
            <p>Current Streak</p>
          </div>
          <div className="stat">
            <span className="stat-icon">🏆</span>
            <h3>3 badges</h3>
            <p>Badges Earn</p>
          </div>
        </div>

        <div className="settings">
          <div className="setting-item">
            <FaCog /> <span>Account Settings</span>
          </div>
          <div className="setting-item">
            <FaBell /> <span>Notifications</span>
          </div>
          <div className="setting-item">
            <FaMoon /> <span>Theme</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
