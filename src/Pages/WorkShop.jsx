import { useState } from 'react';
import { db } from '../firebase'; // Adjust the path as needed based on your file structure
import { collection, addDoc, Timestamp } from 'firebase/firestore'; // Firestore methods

const aiWorkshopTopics = [
  "AI for Smart Healthcare and Telemedicine",
  "Intelligence Automations in Finance, Business and Economics",
  "AI for Smart IoT Applications",
  "AI for Personalized Learning in Education",
  "Applications of AI-powered Digital Twins",
  "AI for Intelligent Transportation Systems",
  "Gen AI for Creativity and Content creation",
  "UAV Networks and Mobile Robots",
  "AI in Healthcare and Bioinformatics",
  "AI for Smart Cities and IoT",
  "AI for Recommendation Systems",
  "AI in Gaming, AR and VR",
  "AI for Autonomous Vehicles",
  "AI for Language Translation Tools",
  "AI in Agriculture and Food Technologies",
  "AI and Drones Technologies",
  "AI in Additive Manufacturing",
  "Industry 4.0 or 5.0",
  "AI for Water Networks Automation"
];

const secureWorkshopTopics = [
  "Secure Edge, Fog Computing and Mobile Offloading",
  "Secure Next Generation High Performance Computing",
  "Pervasive and Mobile Computing",
  "Prompt and Cognitive Computing",
  "Quantum Computing",
  "Secure Wireless Communication",
  "Network Protocol and Congestion Control",
  "Sustainable Communication and Computing",
  "Quantum Communication and Cryptography",
  "Secure Vehicular Networks and Communication",
  "Intelligence Sensors and Sensor Networks",
  "Blockchain for Secure Communication",
  "Secure Next Generation Networks",
  "Multimedia Processing and Communication",
  "Privacy Enhancing Communication",
  "Ad-hoc, PAN and Mesh Networks",
  "Communication Challenges in IoT and other Tiny Devices",
  "Network Function Virtualization and Software Defined Networking",
  "Networking and Computing for Sustainability, Society, and Development"
];

export default function WorkshopRegistration() {
  const [workshop, setWorkshop] = useState('');
  const [topic, setTopic] = useState('');
  const [form, setForm] = useState({
    paperTitle: '',
    author: '',
    email: '',
    college: '',
    department: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!workshop || !topic || !form.paperTitle || !form.author || !form.email || !form.college || !form.department) {
      alert('Please complete all required fields.');
      return;
    }

    try {
      // Store data in Firestore
      await addDoc(collection(db, 'workshops'), {
        workshop,
        topic,
        paperTitle: form.paperTitle,
        author: form.author,
        email: form.email,
        college: form.college,
        department: form.department,
        submittedAt: Timestamp.now(),
      });

      console.log('Workshop Registered:', { workshop, topic });
      alert('Workshop registered successfully!');
      
      // Reset form
      setWorkshop('');
      setTopic('');
      setForm({
        paperTitle: '',
        author: '',
        email: '',
        college: '',
        department: '',
        file: null,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Failed to register workshop. Try again.');
    }
  };

  return (
    <div className="h-screen w-screen mt-40 bg-gradient-to-r from-blue-400 to-blue-600 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full sm:w-96 md:w-[500px] lg:w-[600px] xl:w-[700px] max-w-full">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
          ICAISDA 2025 - Workshop Registration
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Paper Title, Author, Email Fields */}
          <input
            type="text"
            name="paperTitle"
            placeholder="Paper Title"
            value={form.paperTitle}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={form.author}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Author Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={form.college}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500"
          />

          {/* Workshop Buttons */}
          <div className="flex flex-wrap gap-4 mb-6 justify-center">
            <button
              type="button"
              onClick={() => {
                setWorkshop('AI-driven Smart Applications');
                setTopic('');
              }}
              className={`px-5 py-2 rounded-xl text-white font-semibold transition-all duration-200 ${
                workshop === 'AI-driven Smart Applications'
                  ? 'bg-blue-600'
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              1st International Workshop on AI-driven Smart Applications
            </button>
            <button
              type="button"
              onClick={() => {
                setWorkshop('Advancements in Secure Communications and Computing');
                setTopic('');
              }}
              className={`px-5 py-2 rounded-xl text-white font-semibold transition-all duration-200 ${
                workshop === 'Advancements in Secure Communications and Computing'
                  ? 'bg-blue-700'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              1st International Workshop on Secure Communications & Computing
            </button>
          </div>

          {/* Topics Dropdown */}
          {workshop && (
            <select
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            >
              <option value="">Select a Topic</option>
              {(workshop === 'AI-driven Smart Applications'
                ? aiWorkshopTopics
                : secureWorkshopTopics
              ).map((t, i) => (
                <option key={i} value={t}>
                  {t}
                </option>
              ))}
            </select>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-200"
          >
            Submit Workshop
          </button>
        </form>
      </div>
    </div>
  );
}
