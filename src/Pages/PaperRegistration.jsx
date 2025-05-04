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
      const maxSizeMB = 5;
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

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
      const fileRef = ref(storage, `papers/${Date.now()}_${form.file.name}`);
      await uploadBytes(fileRef, form.file);
      const fileURL = await getDownloadURL(fileRef);

      await addDoc(collection(db, 'paperSubmissions'), {
        ...form,
        domain,
        topic,
        fileURL,
        submittedAt: Timestamp.now(),
      });

      setSuccessMessage('✅ Paper submitted successfully! Redirecting...');
      setTimeout(() => {
        navigate('/success');
      }, 2000); // Delay before redirect

    } catch (err) {
      console.error('Submission error:', err);
      alert('Something went wrong while submitting.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-200 flex justify-center items-center py-10">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">ICAISDA 2025 - Paper Registration</h1>

        {successMessage && (
          <div className="mb-6 text-green-600 font-semibold text-center animate-bounce">
            {successMessage}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input type="text" name="paperTitle" placeholder="Paper Title" value={form.paperTitle} onChange={handleChange} required className="w-full border rounded-xl p-3" />
          <input type="text" name="author" placeholder="Author Name" value={form.author} onChange={handleChange} required className="w-full border rounded-xl p-3" />
          <input type="email" name="email" placeholder="Author Email" value={form.email} onChange={handleChange} required className="w-full border rounded-xl p-3" />
          <input type="text" name="college" placeholder="College Name" value={form.college} onChange={handleChange} required className="w-full border rounded-xl p-3" />
          <input type="text" name="department" placeholder="Department" value={form.department} onChange={handleChange} required className="w-full border rounded-xl p-3" />

          <div className="flex gap-4">
            <button type="button" onClick={() => { setDomain('Artificial Intelligence'); setTopic(''); }} className={`px-5 py-2 rounded-xl text-white font-semibold ${domain === 'Artificial Intelligence' ? 'bg-purple-600' : 'bg-purple-400 hover:bg-purple-500'}`}>
              Artificial Intelligence
            </button>
            <button type="button" onClick={() => { setDomain('Secure Data Analytics'); setTopic(''); }} className={`px-5 py-2 rounded-xl text-white font-semibold ${domain === 'Secure Data Analytics' ? 'bg-pink-600' : 'bg-pink-400 hover:bg-pink-500'}`}>
              Secure Data Analytics
            </button>
          </div>

          {domain && (
            <select className="w-full border rounded-xl p-3" value={topic} onChange={(e) => setTopic(e.target.value)} required>
              <option value="">Select a Topic</option>
              {(domain === 'Artificial Intelligence' ? aiTopics : dataTopics).map((t, i) => (
                <option key={i} value={t}>{t}</option>
              ))}
            </select>
          )}

          <input type="file" name="file" accept=".pdf,.doc,.docx" onChange={handleChange} required className="w-full p-3 border rounded-xl" />

          <button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-xl">
            Submit Paper
          </button>
        </form>
      </div>
    </div>
  );
}
