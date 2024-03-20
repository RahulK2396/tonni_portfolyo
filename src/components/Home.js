import React, { useEffect, useState } from "react";
import hero1 from "../img/hero/1.jpg"
import arrowRight from "../img/svg/arrow-right.svg"
import downButton from "../img/svg/down_button.svg"
import icon5 from "../img/svg/icon5.svg"
import icon7 from "../img/svg/icon7.svg"
import icon3 from "../img/svg/icon3.svg"
import icon6 from "../img/svg/icon6.svg"
import icon1 from "../img/svg/icon1.svg"
import icon2 from "../img/svg/icon2.svg"
import store from "../Store";
import { connect } from "react-redux";

const Home = (props) => {
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    console.log("home", props.PortfolioDetails?.about?.avatar?.url);
    if(store.getState().PortfolioDetails.length){
      console.log(store.getState().PortfolioDetails.PortfolioDetails[0].avatar);
   setUserDetails(store.getState().PortfolioDetails.PortfolioDetails[0].about)
    }
  }, [store.getState().PortfolioDetails.PortfolioDetails])

  const dataurl = props.PortfolioDetails?.about.avatar.url
  console.log(dataurl,"fgfgfhfhgg");
  return (
    <div className="tonni_tm_section" id="home">
      <div className="tonni_tm_hero">
        <div className="background" style={{backgroundImage: `url(${props.PortfolioDetails?.about.avatar.url})`, backgroundPosition:'left', backgroundSize:'cover'}} >
          {/* <div className="image" > */}
          {/* <img className="image" src={props.PortfolioDetails?.about.avatar.url} alt="Avatar" /> */}
            {/* </div> */}
          {/* <div className="overlay" /> */}
        </div>
        <div className="container">
          <div className="content">
            <div className="content_in">
              <h3 className="name">
                <span>I</span> am
                <br />
                {props.PortfolioDetails?.about.name}.
              </h3>
              <span className="welcome">{props.PortfolioDetails?.about.subTitle}</span>
              {/* <span className="welcome">Welcome to my Agency</span> */}
              <div className="tonni_tm_button">
                <a className="anchor" href="#portfolio">
                  See All Projects{" "}
                  <img className="svg" src={arrowRight} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="tonni_tm_down">
            <a className="anchor" href="#about">
              <img className="svg" src={downButton} alt="" />
            </a>
          </div>
        </div>
        <div className="play_button">
          <a
            className="popup-youtube"
            href="//www.youtube.com/embed/7e90gBu4pas?autoplay=1"
          />
        </div>
        <span className="shape1">
          <img className="svg anim_circle" src={icon5} alt="" />
        </span>
        <span className="shape2">
          <img className="svg" src={icon7} alt="" />
        </span>
        <span className="shape3">
          <img className="svg" src={icon3} alt="" />
        </span>
        <span className="shape4">
          <img className="svg anim_circle" src={icon6} alt="" />
        </span>
        <span className="shape5">
          <img className="svg" src={icon1} alt="" />
        </span>
        <span className="shape6">
          <img className="svg anim_circle" src={icon5} alt="" />
        </span>
        <span className="shape7">
          <img className="svg" src={icon2} alt="" />
        </span>
      </div>
    </div>
  );
};
const mapStateToProps = (PortfolioReducer) => {
  console.log('stste', PortfolioReducer.PortfolioDetails.PortfolioDetails[0]);
  return {
    PortfolioDetails: PortfolioReducer.PortfolioDetails.PortfolioDetails[0]
  }
}
export default connect(mapStateToProps,null)(Home);
