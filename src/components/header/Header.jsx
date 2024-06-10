import React, { useState } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { ImCart } from "react-icons/im";
import { CgMenuRound } from "react-icons/cg";

const Header = () => {
  // usestate command for mobile menu
  const [showMenu, setShowMenu] = useState(true);
  //toggle menu function
  const toggleMenu = () =>
    //this command tells the menu to open onclick but if its in open state then it should close
    setShowMenu((showMenu) => !showMenu);

  return (
    <div className={css.container}>
      <div className={css.logo}>
        {/* <img src={Logo} alt="Logo" /> */}
        <span>
          Body<b>CARE</b>
        </span>
      </div>

      <div className={css.right}>
        {/* mobile menu */}
        <div className={css.bars} onClick={toggleMenu}>
          <CgMenuRound />
        </div>

        <ul
          className={css.menu}
          style={{ display: showMenu ? "inherit" : "none" }}
        >
          {/* 
                        NOTICE: the display styling in the above menu div commands that if showMenu is true, return "inherit"(show) and if showMenu is false return "none"(hide)
                 */}
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>

        <input type="text" className={css.search} placeholder="Search" />

        <ImCart className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
