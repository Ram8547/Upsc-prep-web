import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About Us</h1>
        <p>Welcome to UPSC Exam Prep, your trusted companion on your journey to success in the UPSC examinations. We are a dedicated team of educators, developers, and enthusiasts passionate about providing you with the best resources and support to excel in your UPSC exam preparations.</p>
      </div>

      <div className="mission">
        <h2>Our Mission</h2>
        <p>Our mission is to empower and guide aspirants like you towards achieving your goals in the field of civil services. We understand the challenges and dedication required for UPSC exam preparation, and we are here to simplify your learning journey.</p>
      </div>

      <div className="highlights">
        <h2>What Sets Us Apart</h2>
        <ul>
          <li><strong>Comprehensive Content:</strong> We offer a wide range of study materials, including notes, books, and practice questions, covering all aspects of the UPSC syllabus.</li>
          <li><strong>Interactive Learning:</strong> Engage in interactive quizzes, discussions, and tests to enhance your understanding and retention of crucial concepts.</li>
          <li><strong>Experienced Educators:</strong> Learn from experienced educators and subject matter experts who are dedicated to your success.</li>
          <li><strong>User-Friendly Platform:</strong> Our platform is designed with user-friendliness in mind, making it easy for you to navigate and access resources.</li>
          <li><strong>Continuous Updates:</strong> Stay updated with the latest news, current affairs, and examination trends to stay ahead in your preparation.</li>
        </ul>
      </div>

      <div className="our-team">
        <h2>Our Team</h2>
        <p>We take pride in our team of dedicated professionals who work tirelessly to provide you with the best resources and support. Whether you are just starting your journey or looking to enhance your preparation, our team is here to assist you every step of the way.</p>
      </div>

      <div className="get-started">
        <h2>Get Started</h2>
        <p>Join us on this exciting journey towards success in the UPSC examinations. Explore our courses, access study materials, and engage with fellow aspirants. We believe in your potential, and together, we can achieve greatness.</p>
        <p>Thank you for choosing UPSC Exam Prep. We wish you the best of luck in your endeavors!</p>
      </div>
    </section>
  );
}

export default About;
