import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      
      {/* Cyber-Security Background: Deep Blue Digital Grid */}
      <div className="absolute inset-0 bg-black">
        {/* Glowing Blue Grid Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,255,0.2) 0%,rgba(0,0,0,1) 90%)] opacity-70"></div>

        {/* Matrix-Like Falling Code - More Bluish */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400 font-mono opacity-60 text-xs"
            style={{
              left: Math.random() * 100 + "vw",
              top: Math.random() * 100 + "vh",
            }}
            animate={{ y: ["-10vh", "110vh"], opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Math.random() > 0.5 ? "1010 0110 1101" : "1001 0101 0011"}
          </motion.div>
        ))}
      </div>

      {/* Floating Blue Light Effects - Stronger Intensity */}
      <motion.div
        className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500/50 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-700/30 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Main Content */}
      <motion.div
        className="relative flex flex-col items-center text-center px-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* 3D Title with Stronger Blue Glow */}
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 tracking-wide drop-shadow-[0_0_35px_rgba(0,150,255,1)]">
          ICAISCDS - 2025
        </h1>

        {/* 🚆 Neon Train-Style Moving Text */}
        <motion.div className="overflow-hidden w-full mt-6" style={{ whiteSpace: "nowrap" }}>
          <motion.p
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 uppercase tracking-wider drop-shadow-[0_0_25px_rgba(0,150,255,1.2)]"
            animate={{ x: ["100%", "-100%"] }} // Moves from right to left
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }} // Slower and smoother
          >
            Registration and update Coming Soon
          </motion.p>
        </motion.div>

        <p className="text-lg text-blue-300 mt-2 max-w-xl">
          Experience the future of technology & innovation.
        </p>

        {/* Glowing Blue Button */}
        <motion.button
          className="mt-6 px-10 py-4 rounded-full text-lg font-medium bg-blue-500 text-white shadow-lg shadow-blue-500/50 hover:bg-blue-600 transition-all transform hover:scale-105"
          whileHover={{ scale: 1.08 }}
        >
          Stay Tuned
        </motion.button>
      </motion.div>
    </div>
  );
}

export default App;
