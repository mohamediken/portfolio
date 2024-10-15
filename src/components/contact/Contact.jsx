import React, { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: e.target.user_email.value,
      user_name: e.target.user_name.value,
      message: e.target.message.value,
      recipient_email: 'iknemohamed1@gmail.com', // Your email address
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
      });

    e.target.reset(); // Reset form after submission
  };

  return (
    <div id="contact" className="container m-auto mt-16">
      {/* Heading */}
      <div className="relative mb-5 text-center">
        <h3 className="text-4xl font-bold text-gray-800">Contact Me</h3>
      </div>

      {/* Card Wrapper */}
      <div className="card-wrapper w-[90%] sm:w-full mx-auto mt-5 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-gray-800">Get in Touch!</h1>
            <h3 className="text-md text-gray-600">
              I'm open to new opportunities and collaborations. Feel free to drop me a message!
            </h3>
          </div>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col gap-5">
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <textarea
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="4"
              name="message"
              placeholder="Your Message"
              required
            />
            <button
              className="bg-yellow-500 text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-yellow-600 transition duration-200"
              type="submit"
            >
              <span>Send Message</span>
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
