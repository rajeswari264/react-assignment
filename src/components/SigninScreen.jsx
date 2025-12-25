import React from "react";
import { useNavigate } from "react-router-dom";

const SigninScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start h-full px-6 pt-4 bg-gray-100 border border-gray-100">
      {/* Heading */}
      <h5 className="text-xl font-semibold text-gray-900 mb-2">
        Signin to your <br /> PopX account
      </h5>

      <p className="text-gray-400 text-sm mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <div className="relative mb-6">
        <label className="absolute -top-2 left-3 px-3 bg-gray-100 text-xs text-purple-600">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-purple-500"
        />
      </div>
      <div className="relative mb-8">
        <label className="absolute -top-2 left-3 bg-gray-100 px-3 text-xs text-purple-600">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-purple-500"
        />
      </div>

      <button
        className="w-full !bg-gray-300 !border-gray-300 py-2 text-white rounded-md text-sm font-medium cursor-pointer"
        onClick={() => navigate("/profile")}
      >
        Login
      </button>
    </div>
  );
};

export default SigninScreen;
