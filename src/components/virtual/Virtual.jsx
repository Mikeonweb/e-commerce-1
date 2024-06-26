import React from "react";
import css from "./Virtual.module.css";
import shade from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";

const Virtual = () => {
  return (
    <div className={css.virtual}>
      <div className={css.left}>
        <span>Buy Right</span>
        <span>Nonthing beats the joy of buying the right skin care product</span>
        <span>
          <a href="#product">
            <button>Try Now</button>
          </a>
        </span>
        {/* <img src={shade} alt="" /> */}
      </div>

      <div className={css.right}>
        <div className={css.wrapper}>
          {/* using react compare image library */}
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
