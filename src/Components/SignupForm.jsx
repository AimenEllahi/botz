import React from "react";

const SignupForm = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center font-poppins">
      <div className="max-w-md w-1/2 p-6 bg-transparent rounded-md">
        <h2 className="text-4xl py-2 font-bold mb-4 bg-gradient-to-r !text-transparent bg-clip-text from-pink-500 to-orange-500 text-white">
          SignUp
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="inline-block font-bold bg-gradient-to-r text-transparent bg-clip-text from-pink-500 to-orange-500 text-lg mb-2"
            >
              Bot Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-md p-2 border-white bg-transparent border focus:border-orange-300 placeholder-white text-white placeholder-opacity-60 transition-all duration-300"
              placeholder="Bot123"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-bold bg-gradient-to-r text-transparent bg-clip-text from-pink-500 to-orange-500 text-lg mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md p-2 border-white bg-transparent border focus:border-orange-300 placeholder-white text-white placeholder-opacity-60 transition-all duration-300"
              placeholder="bot@example.com"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="tool"
              className="block font-bold bg-gradient-to-r text-transparent bg-clip-text from-pink-500 to-orange-500 text-lg mb-2"
            >
              Tool of Choice
            </label>
            <select
              id="tool"
              name="tool"
              className="w-full rounded-md p-2 border-white bg-transparent border focus:border-orange-300 placeholder-white text-white"
            >
              <option
                value="ui_path"
                className="disabled:bg-black !bg-black disabled:text-white"
              >
                UI Path
              </option>
              <option
                value="automation_anywhere"
                className="disabled:bg-black !bg-black disabled:text-white"
              >
                Automation Anywhere
              </option>
              <option
                value="blue_prism"
                className="disabled:bg-black !bg-black disabled:text-white"
              >
                Blue Prism
              </option>
              <option
                value="workfusion"
                className="disabled:bg-black !bg-black disabled:text-white"
              >
                Power Automate
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="pin"
              className="block font-bold bg-gradient-to-r text-transparent bg-clip-text from-pink-500 to-orange-500 text-lg mb-2"
            >
              Pin Code
            </label>
            <input
              type="text"
              id="pin"
              name="pin"
              className="w-full rounded-md p-2 border-white bg-transparent border focus:border-orange-300 placeholder-white text-white placeholder-opacity-60 transition-all duration-300"
              placeholder="1234"
            />
          </div>

          <button
            type="submit"
            className="w-1/3 bg-gradient-to-r from-pink-600 to-orange-500 text-white py-2 rounded-md hover:from-pink-700 hover:to-orange-600 focus:outline-none border-none"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
