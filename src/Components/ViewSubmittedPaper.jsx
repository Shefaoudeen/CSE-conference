// src/pages/ViewSubmittedPaper.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const ViewSubmittedPaper = () => {
  const [pdfUrls, setPdfUrls] = useState([]);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'paperSubmissions'));
        const urls = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.fileURL) {
            urls.push(data.fileURL);
          }
        });
        setPdfUrls(urls);
      } catch (err) {
        console.error("Failed to fetch PDFs:", err);
      }
    };

    fetchPapers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">📄 View Submitted Papers</h2>

      {pdfUrls.length > 0 ? (
        pdfUrls.map((url, index) => (
          <div key={index} className="mb-10 shadow-lg border rounded-xl p-5 bg-white">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Paper {index + 1}</h3>
            <iframe
              src={url}
              title={`PDF ${index + 1}`}
              width="100%"
              height="500px"
              className="rounded-lg border"
            />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No papers submitted yet.</p>
      )}
    </div>
  );
};

export default ViewSubmittedPaper;
