import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyle =
    "block py-2 px-4 rounded hover:bg-blue-800 transition";

  const activeStyle =
    "block py-2 px-4 rounded bg-blue-700";

  return (
    <div className="w-64 h-screen bg-blue-950 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">FuzzAds</h1>

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? activeStyle : linkStyle
        }
      >
        New Order
      </NavLink>

      <NavLink to="/orders" className={linkStyle}>
        Orders
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? activeStyle : linkStyle
        }
      >
        Services
      </NavLink>

      
      

      <NavLink to="/add-funds" className={linkStyle}>
        Add funds
      </NavLink>

      <NavLink to="/support" className={linkStyle}>
        Support
      </NavLink>

      <NavLink to="/affiliate" className={linkStyle}>
        Affiliate
      </NavLink>

      <NavLink to="/api" className={linkStyle}>
        API
      </NavLink>

      <NavLink to="/transfer-funds" className={linkStyle}>
        Transfer funds
      </NavLink>

      <NavLink to="/blogs" className={linkStyle}>
        Blogs
      </NavLink>
    </div>
  );
};

export default Sidebar;
