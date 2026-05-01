import Sidebar from "../components/Sidebar";
import { useState } from "react";
import StudentForm from "../components/StudentForm";

function Students() {
  // recent student data
  const [students, setStudents] = useState ([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "Software Engineering" },
    { id: 2, name: "Brian Lee", email: "brian@example.com", course: "Computer Science" },
    { id: 3, name: "Catherine Wong", email: "catherine@example.com", course: "Information Technology" },
  ]);

  const [ showForm, setShowForm ] = useState(false);

  // add students
  const handleAddStudent = (newStudent) => {
    setStudents((prevStudents)=> [...prevStudents, newStudent]);
  };

  // delete students
  const handleDeleteStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
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
            onClick={() => {
              console.log("button here")
              setShowForm(true)
            }}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            + Add Student
          </button>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-800 text-gray-300 text-sm uppercase tracking-wide">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Course</th>
                <th classNmae="px-6 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-t border-gray-800 hover:bg-gray-800/50 transition"
                >
                  <td className="px-6 py-4 font-medium">{student.name}</td>
                  <td className="px-6 py-4 text-gray-300">{student.email}</td>
                  <td className="px-6 py-4 text-gray-300">{student.course}</td>
                  <td classNmae="px-6 py-4">
                    <button
                      type="button"
                      onClick={()=> handleDeleteStudent(student.id)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm transition"
                      >
                        delete
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showForm && (
          <StudentForm
            onAddStudent={handleAddStudent}
            onClose={() => setShowForm(false)}
          />
        )}
      </main>
    </div>
  );
}

export default Students;