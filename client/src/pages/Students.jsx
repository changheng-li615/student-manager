import Sidebar from "../components/Sidebar";
import { useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

function Students() {
  // store all student records
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "Software Engineering" },
    { id: 2, name: "Brian Lee", email: "brian@example.com", course: "Computer Science" },
    { id: 3, name: "Catherine Wong", email: "catherine@example.com", course: "Information Technology" },
  ]);

  // contrils whether the form modal is visible
  const [showForm, setShowForm] = useState(false);

  // stores the student currentlt being edited
  // null means wee ar enot editing anyone
  const [editingStudent, setEditingStudent] = useState(null);

  // add students
  const handleAddStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  // delete students
  const handleDeleteStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  // start editing a student
  // run when click edit button
  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  //Update existing student
  const handleUpdateStudent = (updatedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  //close the form mocal
  //clear edittingstudent form
  const handleCloseForm = () => {
    setShowForm(false);
    setEditingStudent(null);
  };



  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Students</h1>
            <p className="text-gray-400 mt-2">Manage and view student records</p>
          </div>

          <button
            type="button"
            onClick={() => {
              setEditingStudent(null)
              setShowForm(true)
            }}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            + Add Student
          </button>
        </div>

        <StudentTable
          students={students}
          onEditStudent={handleEditStudent}
          onDeleteStudent={handleDeleteStudent}
          />

        {showForm && (
          <StudentForm
            onAddStudent={handleAddStudent}
            onUpdateStudent={handleUpdateStudent}
            editingStudent={editingStudent}
            onClose={handleCloseForm}
          />
        )}
      </main>
    </div>
  );
}

export default Students;