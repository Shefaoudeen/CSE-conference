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
        setMessage("");

        try {
            const res = await axios.post("http://localhost:5000/api/signup", {
                name,
                email,
                password,
            });

            setMessage(res.data.message);

            if (res.data.success) {
                navigate("/login"); // Redirect to login page after successful signup
            }
        } catch (err) {
            setMessage("Signup failed. Try again.");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-gray-200">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg">
                <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Signup</h2>
                {message && <p className="text-red-500 text-sm text-center mb-4">{message}</p>}
                <form onSubmit={handleSignup}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-lg font-medium">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-4 border rounded-lg mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-lg font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 border rounded-lg mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-lg font-medium">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-4 border rounded-lg mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 text-lg font-semibold transition duration-300"
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
