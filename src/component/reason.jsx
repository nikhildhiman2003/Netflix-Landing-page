import React from "react";
import { FaTv, FaDownload, FaChild, FaMobileAlt } from "react-icons/fa";

function reason() {
  const data = [
    {
      icon: <FaTv />,
      title: "Enjoy on your TV",
      desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    },
    {
      icon: <FaDownload />,
      title: "Download your shows to watch offline",
      desc: "Save your favourites easily and always have something to watch.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Watch everywhere",
      desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    },
    {
      icon: <FaChild />,
      title: "Create profiles for kids",
      desc: "Send kids on adventures with their favourite characters in a space made just for them.",
    },
  ];
  return (
    <div className="bg-black text-white py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-left">
        More Reasons to Join
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#192247] to-[#210e17] p-6 rounded-xl hover:scale-105 transition duration-300"
          >
            <div className="text-4xl mb-4 text-red-500">{item.icon}</div>

            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

            <p className="text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default reason;