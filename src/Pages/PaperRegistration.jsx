import { useState, useEffect } from 'react';
import { auth, db, storage } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

const aiTopics = [
  "Intelligent Control Systems", "Data Mining and Knowledge Discovery",
  "Computer Vision", "Smart Sensor Networks", "Ambient Intelligence",
  "Robotics", "Smart Devices and Environments", "Soft Computing Techniques",
  "Intelligent Systems for IoT", "Big Data Analytics", "ML for Security"
];

const dataTopics = [
  "Cryptographic Techniques", "Secure Data Storage", "Privacy-Preserving Data Mining",
  "Blockchain for Data Security", "Cybersecurity Frameworks", "Digital Watermarking",
  "Steganography", "Anomaly Detection", "Access Control Models", "Cloud Security",
  "Data Provenance and Trust", "Security in Smart Cities", "IoT Data Protection"
];

export default function PaperRegistration() {
  const [domain, setDomain] = useState('');
  const [topic, setTopic] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [form, setForm] = useState({
    paperTitle: '',
    author: '',
    email: '',
    college: '',
    department: '',
    file: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setForm((prev) => ({
        ...prev,
        email: user.email,
        author: user.displayName || '',
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      const file = files[0];
      const maxSizeMB = 10;
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];

      if (!allowedTypes.includes(file.type)) {
        alert('Only PDF, DOC, and DOCX files are allowed.');
        return;
      }

      if (file.size > maxSizeMB * 1024 * 1024) {
        alert(`File size should be less than ${maxSizeMB}MB.`);
        return;
      }

      setForm((prev) => ({ ...prev, file }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!domain || !topic || !form.file) {
      alert('Please complete all required fields.');
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        alert("User not authenticated.");
        return;
      }

      const timestamp = Date.now();
      const fileExt = form.file.name.split('.').pop();
      const fileName = `paper_${timestamp}.${fileExt}`;
      const filePath = `papers/${user.uid}/${fileName}`;
      const fileRef = ref(storage, filePath);

      await uploadBytes(fileRef, form.file);
      const fileURL = await getDownloadURL(fileRef);

      await addDoc(collection(db, 'paperSubmissions'), {
        uid: user.uid,
        paperTitle: form.paperTitle,
        author: form.author,
        email: form.email,
        college: form.college,
        department: form.department,
        domain,
        topic,
        fileURL,
        fileName,
        submittedAt: Timestamp.now(),
      });

      setSuccessMessage('✅ Paper submitted successfully!');
      setForm({
        paperTitle: '',
        author: form.author,
        email: form.email,
        college: '',
        department: '',
        file: null,
      });

      setTimeout(() => {
        navigate('/success');
      }, 3000);
    } catch (error) {
      console.error('❌ Upload error:', error);
      alert('Something went wrong during upload. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center mt-20 items-center w-full bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-100">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-3xl border-4 border-blue-300">
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-8 drop-shadow-sm">
          ✨ ICAISDA 2025 - Paper Registration ✨
        </h1>

        {successMessage && (
          <div className="mb-4 text-green-600 font-semibold text-center animate-bounce">
            {successMessage}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="paperTitle"
            placeholder="Paper Title"
            value={form.paperTitle}
            onChange={handleChange}
            required
            className="w-full border-2 border-blue-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={form.author}
            onChange={handleChange}
            required
            className="w-full border-2 border-blue-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Author Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border-2 border-blue-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={form.college}
            onChange={handleChange}
            required
            className="w-full border-2 border-blue-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
            required
            className="w-full border-2 border-blue-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => { setDomain('Artificial Intelligence'); setTopic(''); }}
              className={`px-5 py-2 rounded-xl text-white font-semibold transition-all duration-200 ${
                domain === 'Artificial Intelligence' ? 'bg-blue-700' : 'bg-blue-400 hover:bg-blue-500'
              }`}
            >
              Artificial Intelligence
            </button>
            <button
              type="button"
              onClick={() => { setDomain('Secure Data Analytics'); setTopic(''); }}
              className={`px-5 py-2 rounded-xl text-white font-semibold transition-all duration-200 ${
                domain === 'Secure Data Analytics' ? 'bg-indigo-700' : 'bg-indigo-400 hover:bg-indigo-500'
              }`}
            >
              Secure Data Analytics
            </button>
          </div>

          {domain && (
            <select
              className="w-full border-2 border-blue-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            >
              <option value="">Select a Topic</option>
              {(domain === 'Artificial Intelligence' ? aiTopics : dataTopics).map((t, i) => (
                <option key={i} value={t}>{t}</option>
              ))}
            </select>
          )}

          <input
            type="file"
            name="file"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-blue-300 rounded-xl file:bg-blue-500 file:text-white file:rounded-lg file:px-4 file:py-2 file:mr-3"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
          >
            📩 Submit Paper
          </button>
        </form>
      </div>
    </div>
  );
}
