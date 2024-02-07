// Courses.js

import React from 'react';
import '../styles/course.css';
import courses from '../courseData';
import { NavLink } from 'react-router-dom';

function Courses() {
  return (
    <div className="page">
      <h1>***Available Courses***</h1>
      {courses.map((course, id) => {
        return (
          <div className={`subject-box ${course.className}`} key={id}>
            <h2>
              <NavLink to={`/course/${id}`}>{course.name}</NavLink>
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
