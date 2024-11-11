import React from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            We'd love to hear from you. Please feel free to contact us with any
            questions or inquiries.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaWhatsapp className="mr-2" />
              Whatsapp: +92 339 2005399
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              Email: info@inarperfumes.com
            </li>
            <li className="flex items-start">
              <FaMapMarkerAlt className="mr-2 mt-1" />
              <span>
                Studio: Plot 38C 24th Commercial St,
                <br />
                Phase 2 Commercial Area Ext,
                <br />
                Karachi, Sindh 75500
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 border rounded"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
