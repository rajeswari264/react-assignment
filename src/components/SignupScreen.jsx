import React from "react";
import { useNavigate } from "react-router-dom";

const SignupScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full flex justify-center pt-4 bg-gray-100 border border-gray-100">
      <div className="w-[375px] px-6 py-1">
        <div className="text-xl font-bold text-gray-900 mb-5">
          <div>Create your</div>
          <div>PopX account</div>
        </div>

        <div className="relative mb-5">
          <label className="absolute -top-2 left-3 bg-gray-100 px-3 text-xs text-purple-600">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="relative mb-5">
          <label className="absolute -top-2 left-3 bg-gray-100 px-3 text-xs text-purple-600">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="relative mb-5">
          <label className="absolute -top-2 left-3 bg-gray-100 px-3 text-xs text-purple-600">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Marry Doe"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="relative mb-5">
          <label className="absolute -top-2 left-3 bg-gray-100 px-3 text-xs text-purple-600">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Marry Doe"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="relative mb-4">
          <label className="absolute -top-2 left-3 bg-gray-100 px-3 text-xs text-purple-600">
            Company name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs focus:outline-none focus:border-purple-500"
          />
        </div>

        <p className="text-xs text-gray-900 mb-3">
          Are you an Agency?<span className="text-red-500">*</span>
        </p>

        <div className="flex items-center gap-6 mb-20">
          <label className="flex items-center gap-2 text-xs">
            <input
              type="radio"
              name="agency"
              defaultChecked
              className="accent-#6C25FF w-4 h-4"
            />
            Yes
          </label>

          <label className="flex items-center gap-2 text-xs">
            <input
              type="radio"
              name="agency"
              className="accent-#6C25FF w-4 h-4"
            />
            No
          </label>
        </div>
        <button
          className="w-full bg-[#6C25FF] text-white py-2 rounded-md text-sm font-medium"
          onClick={() => navigate("/profile")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignupScreen;
