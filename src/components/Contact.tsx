import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_7ts6fc4', // Remplacez par votre Service ID
        'template_2pzf2bh', // Remplacez par votre Template ID
        form.current,
        '13iKu6MGUL6OOlnRE' // Remplacez par votre Public Key
      );
      toast.success('Message envoyé avec succès !');
      form.current.reset();
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20"
      style={{
        background: 'linear-gradient(to bottom, #0A1A2E, #1E3A8A)',
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Contact me
        </h2>
        <div className="max-w-lg mx-auto p-5">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="from_name" className="block text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="from_email" className="block text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="from_email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
