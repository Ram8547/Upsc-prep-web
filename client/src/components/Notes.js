import React from 'react';
import '../styles/Notes.css'; // Import the CSS file

const Notes = [
  { id: 1, name: 'Notes 1' },
  { id: 2, name: 'Notes 2' },
  { id: 3, name: 'Notes 3' },
  { id: 4, name: 'Notes 4' },
];

function Videos() {
  return (
    <div>
      <h2>Course Notes</h2>
      <div className="Notes-grid">
        {Notes.map(Notes => (
          <div key={Notes.id} className="Notes-box">
            <p>{Notes.name}</p>
            {/* Add video content for the teacher */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
