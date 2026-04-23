import { useState } from "react";

function StudentForm({ onAddStudent, onClose }) {
    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        course: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev)=>({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newStudent = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            course: formData.course,
        };

        onAddStudent(newStudent);

        setFormData({
            name: "",
            email: "",
            course: "",
        });

        onClose();
    };

    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white w-full max-w-md p-6 rounded-xl border border-gray-800 shadow-xl">
        <h2 className="text-2xl font-bold mb-6">Add Student</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter student email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter course name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
    );
}
export default StudentForm;
