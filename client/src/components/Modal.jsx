// components/Modal.js
import React from 'react';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-[#1a1a2e] p-8 rounded-xl w-full max-w-md relative shadow-xl border border-purple-700">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-purple-300 hover:text-white text-xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
