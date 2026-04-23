import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registering:", email, password);

        navigate("/login");
    }
    
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                 type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 placeholder="Enter your email"
                 required
                />

                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 className="w-full p-2 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 placeholder="Create a password"
                 required
                />

                <button
                 type="submit"
                 className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                 Sign Up
                </button>

                <p className="text-sm text-gray-500 mt-4 text-center">
                     Already have an account?{" "}
                     <span
                        onClick={() => navigate("/login")}
                        className="text-blue-600 hover:underline cursor-pointer"
                    >
                        Log In
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Register;