import React, { useState } from "react";
const feqdata = [
  {
    question: "what is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
  },
];

function frequency() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex == index ? null : index);
  };

  return (
    <div className="bg-black text-white py-16 px-6 text-center ">
      <h1 className="text-3xl md:text-2xl font-bold  mb-10 px-10">
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto space-y-4 ">
        {feqdata.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => toggleFaq(index)}
              className="bg-gray-800 px-6 py-4 cursor-pointer flex justify-between  hover:bg-gray-700 transition"
            >
              <span className="text-lg">{item.question}</span>
              <span className="text-2xl">
                {activeIndex === index ? "×" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="bg-gray-800 px-6 py-4 mt-[2px] text-gray-300 text-left">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-black text-gray-400 px-6 md:px-20 py-10">
        <div className="text-center mb-10">
          <p className="text-white text-lg mb-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full md:w-[400px] px-4 py-3 bg-black border border-gray-600 rounded text-white focus:outline-none"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded flex items-center gap-2">
              Get Started
              <span className="text-xl">›</span>
            </button>
          </div>
          <p className="mb-8 mt-15 text-left">
            Questions? Call{" "}
            <span className="underline cursor pointer ">000-800-919-1743</span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-left">
            <div className="space-y-3">
              <p className="hover:underline cursor-pointer">FAQ</p>
              <p className="hover:underline cursor-pointer">
                Invester Relations
              </p>
              <p className="hover:underline cursor-pointer">Privacy</p>
              <p className="hover:underline cursor-pointer">Speed Test</p>
            </div>

            <div className="space-y-3">
              <p className="hover:underline cursor-pointer">Help Centre</p>
              <p className="hover:underline cursor-pointer">Jobs</p>
              <p className="hover:underline cursor-pointer">
                Cookie Preferences
              </p>
              <p className="hover:underline cursor-pointer">Legal Notices</p>
            </div>

            <div className="space-y-3">
              <p className="hover:underline cursor-pointer">Account</p>
              <p className="hover:underline cursor-pointer">Ways to Watch</p>
              <p className="hover:underline cursor-pointer">
                Corporate Information
              </p>
              <p className="hover:underline cursor-pointer">Only on Netflix</p>
            </div>

            <div className="space-y-3">
              <p className="hover:underline cursor-pointer">Media Centre</p>
              <p className="hover:underline cursor-pointer">Terms of Use</p>
              <p className="hover:underline cursor-pointer">Contact Us</p>
            </div>
          </div>
          <div className=" mt-20">
            <select className="border border-gray-600 px-4 py-2 rounded flex items-center gap-2 text-white">
              <option className="bg-white text-black">English</option>
              <option className="bg-white text-black">Hindi</option>
            </select>
          </div>
        </div>
        <p className="flex text-sm text-gray-400">Netflix India</p>
        <p className="flex text-sm py-8 text-gray-400">
          The page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </div>
  );
}
export default frequency;