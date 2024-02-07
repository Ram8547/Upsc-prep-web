// Videos.js

import React from 'react';
import '../styles/Videos.css';

const teachers = [
  { id: 1, name: ' Avadh ojha sir' },
  { id: 2, name: 'Manikant sir ' },
  { id: 3, name: ' Navin sir ' },
  { id: 4, name: 'Khan sir ' },
];

function Videos() {
  return (
    <div>
      <h2>Course Videos</h2>
      <div className="teacher-grid">
        {teachers.map(teacher => (
          <div key={teacher.id} className="teacher-box">
            <p>{teacher.name}</p>
            {/* Add video content for the teacher */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
