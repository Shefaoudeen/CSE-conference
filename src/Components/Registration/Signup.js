const { default: axios } = require("axios");

const handleSignup = async (e) => {
    e.preventDefault();
    // const response = await fetch("http://localhost:5000/signup", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password, paperTitle, paperAbstract }),
    // });
    // const data = await response.json();
    const data = axios.post("http://localhost:5000/api/signup", {
      
    })
    if (data.success) navigate("/login");
    else alert("Signup failed");
  };
  