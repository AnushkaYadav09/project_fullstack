import React from 'react';

const StudentList = ({ students, onLoad, onAdd, onEdit, onDelete, onView }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Result Management</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={onLoad} style={buttonStyle}>
          Load Students
        </button>
        <button onClick={onAdd} style={{ ...buttonStyle, backgroundColor: '#28a745' }}>
          Add Student
        </button>
      </div>

      {students.length === 0 ? (
        <p>No students found. Click "Load Students" to fetch data.</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Section</th>
              <th style={thStyle}>Marks</th>
              <th style={thStyle}>Grade</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td style={tdStyle}>{student.id}</td>
                <td style={tdStyle}>{student.name}</td>
                <td style={tdStyle}>{student.section}</td>
                <td style={tdStyle}>{student.marks}</td>
                <td style={tdStyle}>{student.grade}</td>
                <td style={tdStyle}>
                  <button onClick={() => onView(student)} style={actionButtonStyle}>
                    View
                  </button>
                  <button onClick={() => onEdit(student)} style={{ ...actionButtonStyle, backgroundColor: '#ffc107' }}>
                    Edit
                  </button>
                  <button onClick={() => onDelete(student.id)} style={{ ...actionButtonStyle, backgroundColor: '#dc3545' }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  margin: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
};

const actionButtonStyle = {
  padding: '5px 10px',
  margin: '2px',
  fontSize: '14px',
  cursor: 'pointer',
  backgroundColor: '#17a2b8',
  color: 'white',
  border: 'none',
  borderRadius: '3px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const thStyle = {
  backgroundColor: '#343a40',
  color: 'white',
  padding: '12px',
  textAlign: 'left',
  border: '1px solid #ddd',
};

const tdStyle = {
  padding: '10px',
  border: '1px solid #ddd',
};

export default StudentList;
