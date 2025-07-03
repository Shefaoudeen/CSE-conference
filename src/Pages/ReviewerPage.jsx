import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { motion } from 'framer-motion';

const ReviewerPage = () => {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPapers = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'paperRegistrations'));
      const formattedData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPapers(formattedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching papers:', error);
      setLoading(false);
    }
  };

  const sendEmailNotification = (email, status) => {
    alert(`Email sent to ${email} with ${status} notification.`);
  };

  const handleStatusChange = async (id, status, email) => {
    try {
      const paperRef = doc(db, 'paperRegistrations', id);
      await updateDoc(paperRef, { status });
      sendEmailNotification(email, status);
      setPapers(prev =>
        prev.map(paper =>
          paper.id === id ? { ...paper, status } : paper
        )
      );
    } catch (error) {
      console.error('Error updating paper status:', error);
    }
  };

  useEffect(() => {
    fetchPapers();
  }, []);

  return (
    <motion.div
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-cyan-300 via-blue-400 to-indigo-500 animate-gradient-x p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-7xl bg-white/70 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-10">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-400 mb-8">
          Reviewer Page - Paper Registration Details
        </h1>

        <div className="bg-white/90 rounded-xl p-6 shadow-lg overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded overflow-hidden text-sm">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">College</th>
                <th className="px-4 py-2 border">Department</th>
                <th className="px-4 py-2 border">Paper Title</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">PDF</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-4 py-6 text-center text-gray-500">
                    Loading papers...
                  </td>
                </tr>
              ) : papers.length > 0 ? (
                papers.map((paper, index) => (
                  <tr key={paper.id} className="hover:bg-blue-50 transition">
                    <td className="px-4 py-2 border text-center">{index + 1}</td>
                    <td className="px-4 py-2 border">{paper.name || 'N/A'}</td>
                    <td className="px-4 py-2 border">{paper.college || 'N/A'}</td>
                    <td className="px-4 py-2 border">{paper.department || 'N/A'}</td>
                    <td className="px-4 py-2 border">{paper.paperTitle || 'N/A'}</td>
                    <td className="px-4 py-2 border">{paper.status || 'Pending'}</td>
                    <td className="px-4 py-2 border text-blue-600 text-center">
                      {paper.pdfUrl ? (
                        <a
                          href={paper.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:underline"
                        >
                          View PDF
                        </a>
                      ) : (
                        <span className="text-gray-500">No File</span>
                      )}
                    </td>
                    <td className="px-4 py-2 border flex gap-2 justify-center">
                      <button
                        onClick={() => handleStatusChange(paper.id, 'Accepted', paper.email)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleStatusChange(paper.id, 'Rejected', paper.email)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="px-4 py-6 text-center text-gray-500">
                    No papers found.
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

export default ReviewerPage;
