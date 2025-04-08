import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] flex items-center justify-center text-white relative overflow-hidden">
            
            {/* Center Box */}
            <div className="text-center bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 px-8 py-12 w-[90%] max-w-2xl z-10">
                
                {/* Conference Title */}
                <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-300 mb-6 tracking-wide drop-shadow-md">
                    ICAISDA-2025
                </h1>

                {/* Registration Message */}
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                     Registration page will open soon.
                </p>

                {/* Button */}
                <Link
                    to="/login"
                    className="inline-block bg-cyan-300 text-[#0f172a] font-semibold py-3 px-8 rounded-full text-lg hover:bg-cyan-400 transition duration-300"
                >
                    Go to Login
                </Link>
            </div>

            {/* Train-Like Moving Text at Bottom */}
            <div className="absolute bottom-4 w-full h-16 overflow-hidden">
                <div className="animate-train whitespace-nowrap text-2xl font-medium text-cyan-200">
                    <span className="mx-6"> Registration Opens Soon  01.05.2025 </span>
                   
                </div>
            </div>

            {/* Animation Style */}
            <style>
                {`
                    @keyframes train-move {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }

                    .animate-train {
                        display: inline-block;
                        animation: train-move 12s linear infinite;
                    }
                `}
            </style>
        </div>
    );
};

export default Signup;
