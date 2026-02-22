import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1️⃣ Remove login flag
    localStorage.removeItem("isLoggedIn");

    // 2️⃣ Redirect to login
    navigate("/login");
  };

  return (
    <div className="ml-64 bg-white shadow p-4 flex justify-end">
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
