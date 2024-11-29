import { NavLink, useLocation } from "react-router-dom";
import { Dropdown } from "antd";
import {
  UserOutlined,
  FileDoneOutlined,
  CloseSquareOutlined,
  StarOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useState } from "react";

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Mobil menyu holati
  const handleMenuClick = (e) => {
    console.log("Menu item clicked:", e.key);
  };

  const items = [
    { label: "Manage My Account", key: "1", icon: <UserOutlined /> },
    { label: "My Order", key: "2", icon: <FileDoneOutlined /> },
    { label: "My Cancellations", key: "3", icon: <CloseSquareOutlined /> },
    { label: "My Reviews", key: "4", icon: <StarOutlined /> },
    { label: "Logout", key: "5", icon: <LogoutOutlined /> },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const location = useLocation();

  return (
    <div className="max-w-[1440px] mx-auto px-5 relative">
    
      <div className="flex justify-between items-center mt-4 gap-10">
        <div className="hidden sm:block">
          <h3 className="text-2xl font-bold text-gray-800">Exclusive</h3>
        </div>

        <div className="hidden md:flex gap-12">
          {["Home", "Contact", "About", "signUp"].map((path, index) => (
            <NavLink
              to={path}
              key={index}
              className={`font-mono text-base hover:underline ${
                location.pathname === path ? "font-bold text-red-500" : ""
              }`}
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </NavLink>
          ))}
        </div>

        {/* Search Bar and Icons */}
        <div className="flex justify-between w-full md:w-auto items-center gap-4">
          {/* Search */}
          <div className="bg-gray-100 flex items-center px-3 py-2 rounded-md w-full md:w-auto">
            <input
              className="h-full w-full bg-transparent outline-none text-[12px]"
              type="text"
              placeholder="What are you looking for?"
            />
            <i className="fa-solid fa-magnifying-glass text-lg text-gray-600 cursor-pointer"></i>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <NavLink to="wishlist">
              <i className="fa-regular fa-heart text-2xl text-gray-700 cursor-pointer hover:text-green-500 transition"></i>
            </NavLink>
            <NavLink to="cart">
              <i className="fa-solid fa-cart-shopping text-2xl text-gray-700 cursor-pointer hover:text-green-500 transition hidden lg:block"></i>
            </NavLink>
            <Dropdown menu={menuProps} trigger={["hover", "click"]} placement="bottomRight">
              <div className="cursor-pointer flex items-center justify-center w-8 h-8 bg-red-500 rounded-full hover:bg-red-600 transition-all">
                <UserOutlined style={{ fontSize: "20px", color: "white" }} />
              </div>
            </Dropdown>

            {/* Mobile Menu Icon */}
            <i
              className={`fa-solid ${
                menuOpen ? "fa-times" : "fa-bars"
              } block lg:hidden text-xl text-gray-800 cursor-pointer`}
              onClick={() => setMenuOpen(!menuOpen)}
            ></i>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="bg-white w-[75%] max-w-[300px] h-full p-6 flex flex-col gap-6 shadow-lg relative z-20"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl font-bold text-gray-800">Menu</h3>
          {["home", "contact", "about", "signUp"].map((path, index) => (
            <NavLink
              to={path}
              key={index}
              onClick={() => setMenuOpen(false)}
              className={`font-mono text-base hover:text-red-500 ${
                location.pathname === path ? "font-bold text-red-500" : ""
              }`}
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </NavLink>
          ))}
        </div>
      </div>

      <hr className="mt-4" />
    </div>
  );
}

export default Topbar;
