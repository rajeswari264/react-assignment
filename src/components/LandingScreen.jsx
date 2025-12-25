import { useNavigate } from "react-router-dom";

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end h-full px-6 bg-gray-100 border border-gray-100">
      <h3 className="text-xl font-bold mb-2">Welcome to PopX</h3>
      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <button
        onClick={() => navigate("/signup")}
        className="!bg-[#507BFF] text-sm text-white rounded-lg py-2 mb-3"
      >
        Create Account
      </button>

      <button
        onClick={() => navigate("/signin")}
        className="!bg-purple-200 mb-8 text-sm text-black py-2 rounded-lg"
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default LandingScreen;
