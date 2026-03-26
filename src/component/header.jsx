export default function header() {
  return (
    <div className="absolute top-2  w-full z-20 flex items-center justify-between px-6 md:px-12 py-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="w-28 md:w-36 "
      />
      <div className="flex items-center gap-4">
        <select className="bg-transparent border border-gray-400 text-white px-3 py-1 rounded">
          <option className="text-black">English</option>
          <option className="text-black">Hindi</option>
        </select>

        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded font-semibold">
          Sign In
        </button>
      </div>
    </div>
  );
}