import React from 'react';

const StudentDetails = ({ student, onBack }) => {
  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Student Details</h2>
      
      <div style={detailsContainerStyle}>
        <div style={detailRowStyle}>
          <strong>ID:</strong>
          <span>{student.id}</span>
        </div>
        
        <div style={detailRowStyle}>
          <strong>Name:</strong>
          <span>{student.name}</span>
        </div>
        
        <div style={detailRowStyle}>
          <strong>Section:</strong>
          <span>{student.section}</span>
        </div>
        
        <div style={detailRowStyle}>
          <strong>Marks:</strong>
          <span>{student.marks}</span>
        </div>
        
        <div style={detailRowStyle}>
          <strong>Grade:</strong>
          <span>{student.grade}</span>
        </div>
      </div>

      <button onClick={onBack} style={buttonStyle}>
        Back to List
      </button>
    </div>
  );
};

const detailsContainerStyle = {
  backgroundColor: '#f8f9fa',
  padding: '20px',
  borderRadius: '8px',
  marginTop: '20px',
  marginBottom: '20px',
};

const detailRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 0',
  borderBottom: '1px solid #dee2e6',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
};

export default StudentDetails;
