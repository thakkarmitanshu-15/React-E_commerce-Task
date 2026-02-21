import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  const baseLink =
    "block px-4 py-2 rounded-md transition-colors duration-200";

  const activeLink =
    "bg-gray-800 text-white";

  const inactiveLink =
    "text-gray-400 hover:bg-gray-800 hover:text-white";

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-gray-900
          transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Brand */}
        <div className="px-6 py-6 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">
            E-Commerce
          </h2>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 text-sm font-medium">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive ? activeLink : inactiveLink
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive ? activeLink : inactiveLink
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive ? activeLink : inactiveLink
              }`
            }
          >
            Cart
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive ? activeLink : inactiveLink
              }`
            }
          >
            Profile
          </NavLink>
        </nav>
      </aside>
    </>
  );
}