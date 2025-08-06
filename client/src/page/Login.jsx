import { useState } from "react";

function Login() {
    // Manage username and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle submit
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password", password);

    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                    />
                
                <label className="block text-sm font medium text-gray-700 mb-1">Passwork</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                       Login 
                </button>
            </form>
        </div>
    );
}

export default Login;