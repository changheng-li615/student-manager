import Sidebar from "../components/Sidebar";
import { useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

function Students() {
  // store all example student records
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

  // stores what user types into the search input
  const [searchQuery, setSearchQuery] = useState("");

  // couse filter
  const [courseFilter, setCourseFilter] = useState("All");

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

  const courseOptions = [
    "All",
    ...new Set(students.map((student) => student.course)),
  ];

  //calculated from students and searchQuery
  //do not change the oringinal students array
  const filteredStudents = students.filter((student) => {
    const matchesSeach = student.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCourse = courseFilter === "All" || student.course === courseFilter;

    return matchesSeach && matchesCourse;
  });

  const resultCount = filteredStudents.length;
  const totalCount = students.length;


  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
       <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Students</h1>
            <p className="text-gray-400 mt-2">Manage and view student records . Total: {students.length}</p>
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

        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <input type="text"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 placeholder="Search students by name..."
                 className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-grayy-5000 focus:outline-none focus:ring-2 focus:ring-bluue-500"
          />

          <select
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
          className="w-full md:w-64 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lue-500"
          >
          {courseOptions.map((course) => (
            <option key={course} value={course}>
              {course === "All" ? "All Courses" : course}
            </option>
          ))}
          </select>
        </div>

        <div className="mb-4 text-sm text-gray-400">
          Showing {resultCount} of {totalCount} students

        </div>

        <StudentTable
          students={filteredStudents}
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
       </div>
      </main>
    </div>
  );
}

export default Students;