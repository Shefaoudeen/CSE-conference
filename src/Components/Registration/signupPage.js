import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/signup", { name, email, password });
            setMessage(res.data.message);
            if (res.data.success) {
                navigate("/login"); // Redirect after successful signup
            }
        } catch (err) {
            setMessage("Signup failed. Try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
                {message && <p className="text-red-500 text-sm text-center mb-4">{message}</p>}
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border rounded mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border rounded mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
