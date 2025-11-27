import React, { useState } from 'react';

const StudentForm = ({ student, onSubmit, onCancel, isEdit }) => {
  const [name, setName] = useState(student ? student.name : '');
  const [section, setSection] = useState(student ? student.section : '');
  const [marks, setMarks] = useState(student ? student.marks : '');
  const [grade, setGrade] = useState(student ? student.grade : '');

  // Function to calculate grade based on marks
  const calculateGrade = (marks) => {
    const score = Number(marks);
    
    if (score >= 90 && score <= 100) return 'A+';
    if (score >= 85 && score < 90) return 'A';
    if (score >= 80 && score < 85) return 'A-';
    if (score >= 75 && score < 80) return 'B+';
    if (score >= 70 && score < 75) return 'B';
    if (score >= 65 && score < 70) return 'B-';
    if (score >= 60 && score < 65) return 'C+';
    if (score >= 55 && score < 60) return 'C';
    if (score >= 50 && score < 55) return 'C-';
    if (score >= 45 && score < 50) return 'D+';
    if (score >= 40 && score < 45) return 'D';
    if (score < 40) return 'F';
    
    return '';
  };

  // Handle marks change and auto-calculate grade
  const handleMarksChange = (e) => {
    const newMarks = e.target.value;
    setMarks(newMarks);
    
    if (newMarks !== '') {
      const calculatedGrade = calculateGrade(newMarks);
      setGrade(calculatedGrade);
    } else {
      setGrade('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const studentData = {
      name,
      section,
      marks: Number(marks),
      grade,
    };

    onSubmit(studentData);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>{isEdit ? 'Edit Student' : 'Add New Student'}</h2>
      
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={fieldStyle}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label>Section:</label>
          <input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label>Marks:</label>
          <input
            type="number"
            value={marks}
            onChange={handleMarksChange}
            required
            min="0"
            max="100"
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label>Grade (Auto-calculated):</label>
          <input
            type="text"
            value={grade}
            readOnly
            style={{ ...inputStyle, backgroundColor: '#e9ecef', cursor: 'not-allowed' }}
          />
        </div>

        <div style={{ marginTop: '20px' }}>
          <button type="submit" style={buttonStyle}>
            {isEdit ? 'Update Student' : 'Add Student'}
          </button>
          <button type="button" onClick={onCancel} style={{ ...buttonStyle, backgroundColor: '#6c757d' }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const formStyle = {
  marginTop: '20px',
};

const fieldStyle = {
  marginBottom: '15px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  fontSize: '16px',
  marginTop: '5px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
};

const buttonStyle = {
  padding: '10px 20px',
  margin: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
};

export default StudentForm;
