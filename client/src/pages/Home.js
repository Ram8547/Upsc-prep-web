// home page.js

import React from 'react';
import '../styles/App.css'; // Import your CSS file here

const App = () => {
  return (
    <div>
      <main>
        <section className="hero">
          <h1>Welcome to UPSC Exam Prep</h1>
          <p>Your one-stop platform for UPSC exam preparation.</p>
          <a href="/courses" className="cta-button">Browse Courses</a>
        </section>

        <section className="features">
          <div className="feature">
            <h3>Comprehensive Content</h3>
            <p>Access a wide range of study materials and resources.</p>
          </div>
          <div className="feature">
            <h3>Interactive Learning with ChatGPT</h3>
            <p>Enhance your learning experience with ChatGPT, our interactive AI chatbot. ChatGPT will answer your questions, and help you navigate through your preparation journey. Get instant feedback, useful study resources, and expert guidance through interactive conversations with ChatGPT.</p>
          </div>

          <div className="feature">
            <h3>Expert Instructors</h3>
            <p>Learn from experienced educators and subject matter experts.</p>
          </div>
        </section>
      </main>

    </div>
  );
}

export default App;
