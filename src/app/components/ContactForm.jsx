import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/modalSlice";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.open);
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uac9cyk",
        "template_tkz6wrf",
        formRef.current,  
        {
          publicKey: 'II8qmAAG5bVc4Zc27',
        })
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current?.reset();
          dispatch(closeModal()); 
        },
        (error) => {
          alert("Something went wrong. Please try again.");
        }
      );
  };
  
  return (
    <div className="w-70 sm:w-70 md-w-90 lg:w-120  inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-md mx-4 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex justify-between items-center p-4 sm:p-6 border-b">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Contact Me</h1>
          <button
            onClick={() => dispatch(closeModal())}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close contact form"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            Feel free to reach out!
          </p>
          
          <form ref={formRef} onSubmit={sendEmail} className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">
                Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                name="email" 
                id="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message">
                Message*
              </label>
              <textarea
                id="message"
                name="message" 
                rows={3}
                placeholder="Your Message"
                className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 text-sm sm:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;