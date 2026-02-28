import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "cc3ccde3-f261-43a6-a456-d80ad4425e13");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Thank you for your feedback! ✨");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <section className="min-h-screen bg-[#0e0e0e] text-white px-8 md:px-20 py-20 flex flex-col lg:flex-row gap-16 ">
      {/* LEFT SIDE */}
      <div className="flex-1 flex items-center">
        <h1 className="font-serif text-[60px] md:text-[130px] leading-[0.95] font-medium">
          LET’S <br />
          GET IN <br />
          TOUCH
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col justify-between">
        {/* FORM */}
        <form onSubmit={onSubmit} className="w-full">
          <div className="mb-10">
            <input
              type="text"
              name="name"
              placeholder="FULL NAME"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-3 text-sm tracking-widest"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-3 text-sm tracking-widest"
            />
            <input
              type="text"
              name="phone"
              placeholder="PHONE"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-3 text-sm tracking-widest"
            />
          </div>

          <div className="mb-10">
            <textarea
            name="message"
              placeholder="MESSAGE"
              rows="2"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-3 text-sm tracking-widest resize-none"
            />
          </div>

          <button type="submit" className="text-3xl float-right cursor-pointer">
            <FiArrowRight />
          </button>
          <span>{result}</span>
        </form>

        {/* CONTACT INFO */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mt-20 mb-12 text-xs text-gray-400">
          <div>
            <p className="text-white tracking-widest mb-3">Contact</p>
            <p>vkdharshan38@gmail.com</p>
            <p>+91 8220856919</p>
          </div>

          <div>
            <p className="text-white tracking-widest mb-3">Location</p>
            <p>Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </div>
    </section>
  );
}
