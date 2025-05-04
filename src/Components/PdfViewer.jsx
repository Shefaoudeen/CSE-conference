import React from 'react';

const PdfViewer = ({ url }) => {
  return (
    <div className="flex justify-center mt-10">
      {url ? (
        <iframe
          src={url}
          title="PDF Viewer"
          width="100%"
          height="600px"
          className="border rounded-lg shadow-lg w-full max-w-4xl"
        />
      ) : (
        <p className="text-center text-gray-500">No PDF URL provided</p>
      )}
    </div>
  );
};

export default PdfViewer;
