const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
  
    if (data.success) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("paperTitle", data.paperTitle);
      localStorage.setItem("paperAbstract", data.paperAbstract);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };
  