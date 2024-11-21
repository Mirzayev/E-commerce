import { NavLink, useLocation } from "react-router-dom";
import { Dropdown } from "antd";
import {
  UserOutlined,
  FileDoneOutlined,
  CloseSquareOutlined,
  StarOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

function Topbar() {
  const handleMenuClick = (e) => {
    console.log("Menu item clicked:", e.key);
  };

  const items = [
    {
      label: "Manage My Account",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "My Order",
      key: "2",
      icon: <FileDoneOutlined />,
    },
    {
      label: "My Cancellations",
      key: "3",
      icon: <CloseSquareOutlined />,
    },
    {
      label: "My Reviews",
      key: "4",
      icon: <StarOutlined />,
    },
    {
      label: "Logout",
      key: "5",
      icon: <LogoutOutlined />,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const location = useLocation();
  return (
    <div className="max-w-[1440px] mx-auto px-5">
      <div className="flex justify-between items-center mt-4 gap-10">
        <div className="hidden sm:block">
          <h3 className="text-2xl font-bold">Exclusive</h3>
        </div>
        <div className="md:flex hidden gap-12">
          <NavLink
            to="/home"
            className={`font-mono text-base hover:underline ${
              location.pathname === "/home" ? "font-bold text-red-500" : ""
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="contact"
            className={`font-mono text-base hover:underline ${
              location.pathname === "/contact" ? "font-bold text-red-500" : ""
            }`}
          >
            Contact
          </NavLink>
          <NavLink
            to="about"
            className={`font-mono text-base hover:underline ${
              location.pathname === "/about" ? "font-bold text-red-500" : ""
            }`}
          >
            About
          </NavLink>
          <NavLink
            to="signUp"
            className={`font-mono text-base hover:underline ${
              location.pathname === "/signUp" ? "font-bold text-red-500" : ""
            }`}
          >
            Sign Up
          </NavLink>
        </div>

        <div className="flex justify-between w-full md:w-auto items-center gap-4">
          <div className="bg-slate-100 flex justify-between items-center gap-2 px-3 py-2 rounded-md w-full md:w-auto">
            <input
              className="h-full w-full bg-transparent outline-none text-[12px]"
              type="text"
              placeholder="What are you looking for?"
            />
            <i className="fa-solid fa-magnifying-glass text-lg cursor-pointer"></i>
          </div>
          <div className="flex items-center gap-4">
            <i className="fa-regular fa-heart text-2xl cursor-pointer hover:text-green-500 transition"></i>
            <i className="fa-solid fa-cart-shopping text-2xl cursor-pointer hover:text-green-500 transition"></i>
            <Dropdown
              menu={menuProps}
              trigger={["hover", "click"]}
              placement="bottomRight"
            >
              <div className="cursor-pointer flex items-center justify-center w-8 h-8 bg-red-500 rounded-full hover:bg-red-600 transition-all">
                <UserOutlined style={{ fontSize: "20px", color: "white" }} />
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  );
}

export default Topbar;
