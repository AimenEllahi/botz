import React from "react";

const SignupForm = () => {
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">SignUp</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 text-sm mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tool" className="block text-gray-600 text-sm mb-2">
            Tool of Choice
          </label>
          <select
            id="tool"
            name="tool"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="ui_path">UI Path</option>
            <option value="blue_prism">Blue Prism</option>
            <option value="automation_anywhere">Automation Anywhere</option>
            <option value="power_automate">Power Automate</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="pin" className="block text-gray-600 text-sm mb-2">
            Pin Code
          </label>
          <input
            type="text"
            id="pin"
            name="pin"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Pin Code"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
