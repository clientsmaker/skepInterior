import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EmailJS configuration
    const templateParams = {
      from_name: name,
      from_mobile: mobile,
      from_email: email,
    };

    try {
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID');
      alert('Your message has been sent!');
      onClose();
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-white p-8 rounded-md shadow-lg z-10">
        <h2 className="text-lg font-semibold">Schedule a Call</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number</label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-4 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
