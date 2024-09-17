import React, { useState } from 'react';
import './SkillForm.css';

const SkillForm = () => {
  const [skills, setSkills] = useState('');

  const handleInputChange = (e) => {
    setSkills(e.target.value);
  };

  return (
    <div className="form-container">
      <div className="skill-entry">
        <div className="progress-indicator">3/3</div>
        <h2>Enter your skills.</h2>
        <div className="li"></div>
        <p className="description">
          Your skills show clients what you can offer, and help us choose which jobs to recommend to you. 
          Add or remove the ones we've suggested, or start typing to pick more. It's up to you.
        </p>
        <label htmlFor="skills">Your skills</label>
        <input
          type="text"
          id="skills"
          className="skill-input"
          placeholder="Java"
          value={skills}
          onChange={handleInputChange}
        />
      </div>

      <div className="suggestion-card">
        <div className="profile">
          <div className="profile-image">
            <img src="https://via.placeholder.com/40" alt="profile" />
          </div>
          <div className="profile-details">
            <h3>Angad Shinde</h3>
            <p>AI/ML Developer</p>
          </div>
        </div>
        <p className="suggestion-text">
          "BGD's algorithm will recommend specific job posts to you based on your skills. 
          So choose them carefully to get the best match!"
        </p>
      </div>

      {/* Bottom buttons */}
      <div className="form-buttons">
        <button className="back-button">Back</button>
        <button className="next-button">Next</button>
      </div>
    </div>
  );
};

export default SkillForm;