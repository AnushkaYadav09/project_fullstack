import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from './services/studentService';

const App = () => {
  const [students, setStudents] = useState([]);
  const [currentView, setCurrentView] = useState('list'); // 'list', 'add', 'edit', 'details'
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Load all students
  const handleLoadStudents = async () => {
    try {
      const data = await getAllStudents();
      setStudents(data);
      alert('Students loaded successfully!');
    } catch (error) {
      alert('Error loading students: ' + error.message);
    }
  };

  // Switch to Add view
  const handleAddClick = () => {
    setCurrentView('add');
    setSelectedStudent(null);
  };

  // Switch to Edit view
  const handleEditClick = (student) => {
    setCurrentView('edit');
    setSelectedStudent(student);
  };

  // Switch to Details view
  const handleViewClick = (student) => {
    setCurrentView('details');
    setSelectedStudent(student);
  };

  // Handle form submission for Add
  const handleAddSubmit = async (studentData) => {
    try {
      await createStudent(studentData);
      alert('Student added successfully! Click "Load Students" to see the updated list.');
      setCurrentView('list');
    } catch (error) {
      alert('Error adding student: ' + error.message);
    }
  };

  // Handle form submission for Edit
  const handleEditSubmit = async (studentData) => {
    try {
      await updateStudent(selectedStudent.id, studentData);
      alert('Student updated successfully! Click "Load Students" to see the updated list.');
      setCurrentView('list');
    } catch (error) {
      alert('Error updating student: ' + error.message);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudent(id);
        alert('Student deleted successfully! Click "Load Students" to see the updated list.');
      } catch (error) {
        alert('Error deleting student: ' + error.message);
      }
    }
  };

  // Back to list view
  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedStudent(null);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {currentView === 'list' && (
        <StudentList
          students={students}
          onLoad={handleLoadStudents}
          onAdd={handleAddClick}
          onEdit={handleEditClick}
          onDelete={handleDelete}
          onView={handleViewClick}
        />
      )}

      {currentView === 'add' && (
        <StudentForm
          onSubmit={handleAddSubmit}
          onCancel={handleBackToList}
          isEdit={false}
        />
      )}

      {currentView === 'edit' && (
        <StudentForm
          student={selectedStudent}
          onSubmit={handleEditSubmit}
          onCancel={handleBackToList}
          isEdit={true}
        />
      )}

      {currentView === 'details' && (
        <StudentDetails
          student={selectedStudent}
          onBack={handleBackToList}
        />
      )}
    </div>
  );
};

export default App;
