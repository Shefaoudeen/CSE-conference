import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">Welcome </h1>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        <Register />
        <Login />
      </div>
    </div>
  );
}

export default App;
