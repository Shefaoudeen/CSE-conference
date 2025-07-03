import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const [view, setView] = useState('registration');
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      let path = 'users';
      if (view === 'workshop') path = 'workshops';
      else if (view === 'PaperRegistration' || view === 'reviewer') path = 'paperSubmissions';

      const snapshot = await getDocs(collection(db, path));
      const formattedData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(formattedData);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await updateDoc(doc(db, 'paperRegistrations', id), { status });
      fetchData();
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [view]);

  const handleLogout = () => {
    alert('Admin Logged Out');
    navigate('/login');
  };

  return (
    <motion.div
      className="min-h-screen w-full flex items-center mt-40 justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-7xl bg-slate-900/80 backdrop-blur-lg border border-slate-700 rounded-3xl shadow-2xl p-10 text-white">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>

        {/* Toggle Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {[
            { label: 'Registration Details', value: 'registration' },
            { label: 'Workshop Details', value: 'workshop' },
            { label: 'Paper Registration Details', value: 'PaperRegistration' },
            { label: 'Reviewer Page', value: 'reviewer' }
          ].map(btn => (
            <button
              key={btn.value}
              onClick={() => setView(btn.value)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                view === btn.value
                  ? 'bg-gradient-to-r from-blue-500 to-sky-400 text-white shadow-lg'
                  : 'bg-slate-800 border border-blue-500 text-blue-300 hover:bg-slate-700'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Data Table */}
        <div className="bg-slate-700 rounded-xl p-6 shadow-lg overflow-x-auto">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            {view === 'registration'
              ? 'Registered Users'
              : view === 'workshop'
              ? 'Workshop Submissions'
              : view === 'PaperRegistration'
              ? 'Paper Registration Submissions'
              : 'Reviewer Page'}
          </h2>

          <table className="min-w-full border border-slate-600 rounded overflow-hidden text-sm text-white">
            <thead className="bg-slate-700 text-cyan-200">
              <tr>
                <th className="px-4 py-2 border border-slate-600">No</th>
                {view === 'registration' && (
                  <>
                    <th className="px-4 py-2 border border-slate-600">First Name</th>
                    <th className="px-4 py-2 border border-slate-600">Last Name</th>
                    <th className="px-4 py-2 border border-slate-600">Email</th>
                    <th className="px-4 py-2 border border-slate-600">Phone</th>
                  </>
                )}
                {view === 'workshop' && (
                  <>
                    <th className="px-4 py-2 border border-slate-600">Author</th>
                    <th className="px-4 py-2 border border-slate-600">Email</th>
                    <th className="px-4 py-2 border border-slate-600">College</th>
                    <th className="px-4 py-2 border border-slate-600">Department</th>
                    <th className="px-4 py-2 border border-slate-600">Paper Title</th>
                    <th className="px-4 py-2 border border-slate-600">Topic</th>
                    <th className="px-4 py-2 border border-slate-600">Workshop</th>
                  </>
                )}
                {(view === 'PaperRegistration' || view === 'reviewer') && (
                  <>
                    <th className="px-4 py-2 border border-slate-600">Name</th>
                    <th className="px-4 py-2 border border-slate-600">College</th>
                    <th className="px-4 py-2 border border-slate-600">Department</th>
                    <th className="px-4 py-2 border border-slate-600">Paper Title</th>
                    <th className="px-4 py-2 border border-slate-600">Email</th>
                    <th className="px-4 py-2 border border-slate-600">Paper PDF</th>
                    {view === 'reviewer' && <th className="px-4 py-2 border border-slate-600">Status</th>}
                    {view === 'reviewer' && <th className="px-4 py-2 border border-slate-600">Action</th>}
                  </>
                )}
              </tr>
            </thead>
            <tbody className="text-slate-200">
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={item.id} className="hover:bg-slate-700 transition">
                    <td className="px-4 py-2 border border-slate-700 text-center">{index + 1}</td>
                    {view === 'registration' && (
                      <>
                        <td className="px-4 py-2 border border-slate-700">{item.firstName || 'N/A'}</td>
                        <td className="px-4 py-2 border border-slate-700">{item.lastName || 'N/A'}</td>
                        <td className="px-4 py-2 border border-slate-700">{item.email || 'N/A'}</td>
                        <td className="px-4 py-2 border border-slate-700">{item.phone || 'N/A'}</td>
                      </>
                    )}
                    {view === 'workshop' && (
                      <>
                        <td className="px-4 py-2 border border-slate-700">{item.author || 'N/A'}</td>
                        <td className="px-4 py-2 border border-slate-700">{item.email || 'N/A'}</td>
                        <td className="px-4 py-2 border border-slate-700">{item.college || 'N/A'}</td>
                        <td className="px-4 py-2 border border-slate-700">{item.department || 'N/A'}</td>
                        <td className="px-4 py-2 border border-slate-700">{item.paperTitle || 'N/A'}</td>
                        <td className="px-4 py-2 border border-slate-700">{item.topic || 'N/A'}</td>
                        <td className="px-4 py-2 border border-slate-700">{item.workshop || 'N/A'}</td>
                      </>
                    )}
                    {(view === 'PaperRegistration' || view === 'reviewer') && (
                      <>
                        <td className="px-4 py-2 border border-slate-700">{item.author || 'N/A'}</td>
                        <td className="px-4 py-2 border border-slate-700">{item.college || 'N/A'}</td>
                        <td className="px-4 py-2 border border-slate-700">{item.department || 'N/A'}</td>
                        <td className="px-4 py-2 border border-slate-700">{item.paperTitle || 'N/A'}</td>
                        <td className="px-4 py-2 border border-slate-700">{item.email || 'N/A'}</td>
                        <td className="px-4 py-2 border border-slate-700 text-center text-cyan-300">
                          {item.fileURL ? (
                            <a
                              href={item.fileURL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium hover:underline"
                            >
                              View PDF
                            </a>
                          ) : (
                            <span className="text-gray-400">No File</span>
                          )}
                        </td>
                        {view === 'reviewer' && (
                          <>
                            <td className="px-4 py-2 border border-slate-700 text-center font-semibold">
                              {item.status || 'Pending'}
                            </td>
                            <td className="px-4 py-2 border border-slate-700 text-center">
                              <button
                                onClick={() => handleStatusUpdate(item.id, 'Accepted')}
                                className="bg-green-600 text-white px-3 py-1 rounded mr-2 hover:bg-green-700"
                              >
                                Accept
                              </button>
                              <button
                                onClick={() => handleStatusUpdate(item.id, 'Rejected')}
                                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                              >
                                Reject
                              </button>
                            </td>
                          </>
                        )}
                      </>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={view === 'registration' ? 6 : view === 'workshop' ? 8 : view === 'reviewer' ? 9 : 7}
                    className="px-4 py-6 border border-slate-700 text-center text-gray-400"
                  >
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
