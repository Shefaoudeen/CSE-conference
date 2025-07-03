import React, { useState, useEffect } from 'react';
import { LogIn, Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [particles, setParticles] = useState([]);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Admin Login
    if (email === 'admin@gmail.com' && password === 'Admin@333') {
      navigate('/AdminPage');
    } 
    // ✅ User Login (Accept any non-empty email & password for now)
    else if (email.trim() !== '' && password.trim() !== '') {
      navigate(`/profile?email=${email}`);
    } 
    // ❌ Invalid input
    else {
      alert('Invalid credentials. Please enter both email and password.');
    }
  };

  // 🌟 Particle Effect Logic
  const createParticle = (x, y) => {
    return {
      x,
      y,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: (Math.random() - 0.5) * 1.5,
      opacity: 1,
      color: `hsl(${Math.random() * 360}, 100%, 75%)`,
    };
  };

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setParticles((prevParticles) => [
      ...prevParticles,
      createParticle(mouseX, mouseY),
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prevParticles) => {
        return prevParticles
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.speedX,
            y: particle.y + particle.speedY,
            opacity: Math.max(particle.opacity - 0.02, 0),
          }))
          .filter((particle) => particle.opacity > 0);
      });
    }, 16);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-black overflow-hidden flex items-center justify-center relative">
      {/* 🌌 Particle Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((particle, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: '50%',
              backgroundColor: particle.color,
              pointerEvents: 'none',
              opacity: particle.opacity,
              animation: 'moveParticle 3s infinite ease-out',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_#004e92,_#00008b)] animate-gradientMove opacity-30 blur-2xl" />
      </div>

      {/* 🧊 Login Form */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl text-white shadow-lg hover:scale-[1.03] transition-transform duration-500">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-300 flex items-center justify-center gap-2">
          <LogIn size={28} /> Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl">
              <Mail size={20} className="text-blue-300" />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent text-white outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl">
              <Lock size={20} className="text-blue-300" />
              <input
                type="password"
                placeholder="Password"
                className="flex-1 bg-transparent text-white outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 py-2 rounded-xl font-bold shadow-xl hover:scale-105 transition-all"
          >
            <span className="flex items-center justify-center gap-2">
              <LogIn size={20} /> Log In
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
