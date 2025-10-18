import React, { useState } from "react";

const SimpleModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* open modal button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Open Modal
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0  backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
          {/* modal box */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 w-80 text-center">
            <h2 className="text-xl font-semibold mb-3">Simple Modal</h2>
            <p className="text-gray-600 b-5">
              this is simple modal box built using react and its hooks
            </p>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer mt-10"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleModal;
