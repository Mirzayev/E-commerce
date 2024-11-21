import { NavLink, useLocation } from "react-router-dom";
import { Button, Dropdown } from "antd";
import {UserOutlined} from '@ant-design/icons'

function Topbar() {

  const handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };

  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  const items = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
  ]

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const location = useLocation()
  return (
    <div className="max-w-[1440px] mx-auto px-5">
      <div className=" flex justify-between items-center mt-4 gap-10">
        <div className="hidden sm:block">
          <h3 className="text-2xl font-bold ">Exclusive</h3>
        </div>
        <div className="md:flex hidden  gap-12">
        <NavLink to='/home' className= { ` font-mono text-base hover:underline  translation ${location.pathname === "/home" } `} >
          Home
          </NavLink>
          <NavLink to='contact' className={`font-mono text-base hover:underline  translation ${location.pathname === "/contact"}`}>
          Contact
          </NavLink>
        
          <NavLink to='about' className={`font-mono text-base hover:underline  translation ${location.pathname === "/about"}`}>
          About
          </NavLink>
          <NavLink to='signUp' className={`font-mono text-base hover:underline  translation ${location.pathname === "/signUp"}`}>
          Sign Up
          </NavLink>
        </div>

        <div className="flex justify-between w-full md:w-auto items-center gap-4">
          <div className="bg-slate-100 flex justify-between items-center gap-2 px-3 py-2 rounded-md w-full md:w-auto">
            <input className="h-full w-full bg-transparent outline-none text-[12px]" type="text" placeholder="What are you looking for?" />
            <i className="fa-solid fa-magnifying-glass text-lg cursor-pointer"></i>
          </div>
        <div className="flex items-center gap-4">
        <i className="fa-regular fa-heart text-2xl cursor-pointer hover:text-green-500 transition"></i>
          <i className="fa-solid fa-cart-shopping text-2xl cursor-pointer hover:text-green-500 transition"></i>
          <i className="md:hidden fa-solid fa-bars text-2xl hover:text-slate-400 transition-all"></i>
          <Dropdown.Button className="" menu={menuProps} placement="bottom" icon={<UserOutlined />}>
      
    </Dropdown.Button>
        </div>
        </div>
      </div>
      <hr  className="mt-4"/>
    </div>
  );
}

export default Topbar;
