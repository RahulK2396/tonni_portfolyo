import React, { useEffect } from "react";
import { scroll_ } from "../../utilits.js";
import facebook from "../../img/svg/social/facebook.svg"
import twitter from "../../img/svg/social/twitter.svg"
import skype from "../../img/svg/social/skype.svg"
import vimeo from "../../img/svg/social/vimeo.svg"
import logo from "../../img/logo/logo.png"
import { connect } from "react-redux";

const Header = (props) => {
  useEffect(() => {
    window.addEventListener("scroll", scroll_);
  }, []);

  return (
    <div className="tonni_tm_header">
      <div className="container bigger">
        <div className="header_in">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <span className="ccc" />
          </div>
          <div className="follow">
            <span>Follow Us:</span>
            <ul>
            {props.PortfolioDetails?.social_handles.map((item,idx) =>{
                      return <li>
                         <a href={item.url}>
                        <img
                          className="svg"
                          src={item.image.url}
                          alt=""
                        />
                      </a>
                      </li>
                    })}
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (PortfolioReducer) => {
  return {
    PortfolioDetails: PortfolioReducer.PortfolioDetails.PortfolioDetails[0]
  }
}
export default connect(mapStateToProps, null)(Header);

