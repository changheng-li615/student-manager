// StudentTable is responsible for displaying the student list
// not manage
// receives data and fucntion from the pareent component  through props.

function StudentTable({ students, onEditStudent, onDeleteStudent }) {
    //Empty state
    if (students.length === 0){
        return(
            <div className="w-full bg-gray-900 border-gray-800 rounded-xl shadow-lg p-10 text-center">
                <h2 className="text-xl font-semibold text-white mb-2">
                    No students found
                </h2>

                <p className="text-gary-400">
                    Click "Add student" to create your first student record.
                </p>
            </div>
        )
    }
    return(
        <div className="bg-gray-900 border border-gray-800 rounded-x1 shadow-lg overflow-hidden">
            <table className="w-full text-left">
                <thead className="bg-gray-800 text-gray-300 text-sm suppercase tracking-wide">
                    <tr>
                        <th className="px-6 p-4">Name</th>
                        <th className="px-6 p-4">Email</th>
                        <th className="px-6 p-4">Course</th>
                        <th className="px-6 p-4">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <tr
                            key={student.id}
                            className="border-t border-gray-800 hover:bg-gray-800/500 transition"
                        >
                            <td className="px-6 p-4 font-medium">{student.name}</td>
                            <td className="px-6 p-4 text-gray-300">{student.email}</td>
                            <td className="px-6 p-4 text-gray-300">{student.coursee}</td>

                            <td className="px=-6 py-4">
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => onEditStudent(student)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded-md text-sm transition"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => onDeleteStudent(student.id)}
                                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentTable