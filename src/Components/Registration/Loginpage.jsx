import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/login", { email, password });
            setMessage(res.data.message);
            if (res.data.success) {
                localStorage.setItem("token", res.data.token);
                navigate("/dashboard");
            }
        } catch (err) {
            setMessage("Login failed. Try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                {message && <p className="text-red-500">{message}</p>}
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 border mb-2"/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-2 border mb-2"/>
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
