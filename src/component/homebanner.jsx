import React from "react";
function homebanner() {
  return (
    <div class="relative h-screen w-full">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg"
        alt="background"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-black/70 "></div>

      <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 class="text-white text-3xl md:text-5xl font-extrabold max-w-2xl">
          Unlimited movies, <br></br>shows, and more
        </h1>

        <p class="text-white text-lg md:text-xl mt-4">
          Starts at ₹149. Cancel at any time.
        </p>

        <p class="text-white text-sm md:text-base mt-4 mb-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div class="flex flex-col md:flex-row gap-3 w-full max-w-xl">
          <input
            type="email"
            placeholder="Email address"
            class="flex-1 px-4 py-3 rounded bg-black/60 border border-gray-500 text-white placeholder-gray-300 focus:outline-none"
          />

          <button class="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded flex items-center justify-center">
            Get Started
            <span class="ml-2">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default homebanner;