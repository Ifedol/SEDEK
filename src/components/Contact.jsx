import React, { useState } from "react";
import Calling from "../assests/Calling (2).png";
import Email from "../assests/Emails.png";
import Location from "../assests/Location.png";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset form fields after submission
    setEmail("");
    setMessage("");
  };

  return (
    <div className="py-10 md:py-16">
      <div className="w-full max-w-[1120px] mx-auto bg-[#E9E2DD] p-6 md:p-10 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Information */}
          <div className="mb-8 md:mb-0">
            <h1 className="text-[#3C1C0B] text-[32px] md:text-[40px] font-bold">
              Get In Touch
            </h1>
            <p className="text-[#0B0505B2] text-[18px] md:text-[20px] font-normal">
              Leave us a Message
            </p>

            <div className="pt-6 md:pt-[170px] space-y-4">
              <div className="flex items-center">
                <img src={Calling} alt="Call" className="w-6 h-6" />
                <a
                  href="tel:+2348184935721"
                  className="pl-2.5 text-[#3C1C0B] text-[16px] md:text-[20px] underline hover:no-underline"
                >
                  +234 818 4935 721
                </a>
              </div>
              <div className="flex items-center">
                <img src={Email} alt="Email" className="w-6 h-6" />
                <a
                  href="mailto:sedekdoors@gmail.com"
                  className="pl-2.5 text-[#3C1C0B] text-[16px] md:text-[20px] underline hover:no-underline"
                >
                  sedekdoors@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <img src={Location} alt="Location" className="w-6 h-6" />
                <p className="pl-2.5 text-[#3C1C0B] text-[16px] md:text-[20px]">
                  Business Location:{" "}
                  <a
                    href="https://www.google.com/maps?q=State+Housing+Estate,+Fourth+Street,+Atekong,+Calabar+540281,+Cross+River"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3C1C0B] underline hover:text-[#685d57]"
                  >
                    View on Map
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <label className="flex flex-col">
                <span className="text-[#0B0505B2]">Email Address:</span>
                <input
                  type="email"
                  className="border border-[#DDC8B9] w-full p-2 rounded-lg"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label className="flex flex-col">
                <span className="text-[#0B0505B2]">Message:</span>
                <textarea
                  className="border border-[#DDC8B9] w-full h-[145px] p-2 rounded-lg"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </label>
              <button
                type="submit"
                className="bg-[#A2552E] w-full text-white p-2 rounded-lg hover:bg-[#ad9e97]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
