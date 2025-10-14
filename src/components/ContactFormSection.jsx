import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactFormSection = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kddj81h",
        "template_bsputln",  
        form.current,
        "Er5LdxIC8YQLHjyOB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message ❌. Please try again.");
        }
      );
  };


  return (
    <section id="contact" className="bg-[#0b2d0b] py-20 text-yellow-100">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-yellow-300 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-200 mb-6">
            Have a question, want to make a reservation, or just say hello?  
            Fill out the form and our friendly team will get back to you soon.
          </p>
          <p className="italic text-yellow-400">
            “We’d love to hear from you — your feedback helps us grow.”
          </p>
        </div>

        {/* Right Side - Form */}
        <form  ref={form}
               onSubmit={sendEmail}
               className="bg-[#133a13] p-8 rounded-lg shadow-lg space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-yellow-200 mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    required
                    className="w-full p-3 rounded-md bg-[#0b2d0b] text-yellow-100 placeholder-yellow-200/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-yellow-200 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="user_email"
                    placeholder="Your email"
                    required
                    className="w-full p-3 rounded-md bg-[#0b2d0b] text-yellow-100 placeholder-yellow-200/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-yellow-200 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      placeholder="Write your message..."
                      className="w-full p-3 rounded-md bg-[#0b2d0b] text-yellow-100 placeholder-yellow-200/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    ></textarea>
                </div>

                  <button
                    type="submit"
                    className="bg-yellow-400 font-bold text-green-900 px-6 py-2 rounded-md shadow-md hover:bg-yellow-500 transition w-full"
                  >
                    Send Message
                  </button>

                  {status && (
            <p className="text-center mt-4 text-sm text-yellow-300">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
