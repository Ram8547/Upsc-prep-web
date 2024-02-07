import React from 'react';
import '../styles/PDFs.css'; // Import the CSS file

const PDFsList = [
  { id: 1, name: 'NCERT books' },
  { id: 2, name: 'Standard books' },
  { id: 3, name: 'Reference Books' },
];

function PDFs() {
  return (
    <div>
      <h2>Course PDFs</h2>
      <div className="PDFs-grid">
        {PDFsList.map(pdf => (
          <div key={pdf.id} className="PDFs-box">
            <p>{pdf.name}</p>
            {/* Add PDF content for the category */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PDFs;
