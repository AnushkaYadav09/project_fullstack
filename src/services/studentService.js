const API_URL = 'http://localhost:5000/students';

// GET all students
export const getAllStudents = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

// GET single student by ID
export const getStudentById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

// POST - Create new student
export const createStudent = async (student) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
  return await response.json();
};

// PUT - Update existing student
export const updateStudent = async (id, student) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
  return await response.json();
};

// DELETE - Remove student
export const deleteStudent = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
