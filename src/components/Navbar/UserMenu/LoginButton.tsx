import { useNavigate } from "react-router-dom";
const LoginButton = () => {
      const navigate = useNavigate();
  return (
    <button
    onClick={() => navigate("/login")}
      className="px-4 py-2 text-sm shadow-lg hover:scale-105 transition-transform font-semibold rounded-md"
      style={{
        backgroundColor: "#10B981",
        color: "white",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#059669")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#10B981")}
    >
      Login
    </button>
  );
};

export default LoginButton;
