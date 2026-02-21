import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import { getRemainingTime } from "../utils/sesion";

export default function Navbar({ setIsOpen }) {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getRemainingTime();

      if (remaining <= 0) {
        logout();
        navigate("/", { replace: true });
      } else {
        setTimeLeft(Math.floor(remaining / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [logout, navigate]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-xl"
        >
          ☰
        </button>

        <div>
          <p className="font-medium">
            Welcome, {user?.name}
          </p>
          <p className="text-xs text-gray-500">
            Session expires in: {minutes}:
            {seconds.toString().padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 text-sm">
        <span>
          Cart ({totalItems})
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}