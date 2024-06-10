import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiOutlineLogin, HiUserGroup, HiLink } from "react-icons/hi";

const Footer = () => {
  return (
    <div className={css.footerwrapper}>
      <hr />

      <div className={css.footer}>
        <div className={css.logo}>
          {/* <img src={Logo} alt="" /> */}
          <span>
            Body<b>CARE</b>
          </span>
        </div>

        <div className={css.block}>
          <div className={css.details}>
            <span>Contact Us</span>
            <span className={css.pngline}>
              <FaLocationDot className={css.icon} />
              <span>1035 chilli way, new york ,usa.</span>
            </span>

            <span className={css.pngline}>
              <FaPhoneFlip className={css.icon} />
              <span>04-706-855</span>
            </span>

            <span className={css.pngline}>
              <MdEmail className={css.icon} />
              <span>info@bodycare.com</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.details}>
            <span>Account</span>
            <span className={css.pngline}>
              <HiOutlineLogin className={css.icon} />
              <span>Sign Up <br /> Login</span>
            </span>
          </div>
        </div>

        {/* <div className={css.block}>
          <div className={css.details}>
            <span>Company</span>
            <span className={css.pngline}>
              <HiUserGroup className={css.icon} />
              <span>Lorem ipsum dolor sit</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.details}>
            <span>Resources</span>
            <span className={css.pngline}>
              <HiLink className={css.icon} />
              <span>Lorem ipsum dolor sit</span>
            </span>
          </div>
        </div> */}
      </div>

      <div className={css.copyright}>
        <span>Copyright &copy;2024 by BodyCARE</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
