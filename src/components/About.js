import React from "react";
import photoshop from "../img/svg/photoshop.svg"
import xd from "../img/svg/xd.svg"
import figma from "../img/svg/figma.svg"
import flower from "../img/about/flower.png"
import dots from "../img/about/dots.png"
import icon1 from "../img/svg/icon1.svg"
import { connect } from "react-redux";

const About = (props) => {
  return (
    <div className="tonni_tm_section" id="about">
      <div className="tonni_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="left_inner">
                <div className="year">
                  <h3>{props.PortfolioDetails?.about?.exp_year}</h3>
                  <span className="rounded">
                    <img src={flower} alt="" />
                  </span>
                </div>
                <div className="experience">
                  <h3>+</h3>
                  <p>years experience</p>
                  <span className="shape">
                    <img src={dots} alt="" />
                  </span>
                  <span className="circle_shape">
                    <img className="svg" src={icon1} alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>{props.PortfolioDetails?.about.quote}</span>
                <h3>{`I'm`} Looking For {props.PortfolioDetails?.about.title}.</h3>
              </div>
              <div className="text">
                <p>
                {props.PortfolioDetails?.about.description}
                </p>
              </div>
              <div className="dodo_progress">
                <ul>
                  {props.PortfolioDetails?.skills.map((item, idx) => {
                    if(item.enabled){
                    return <li>
                      <div className="list_inner">
                      <div
                        className="progress_inner skillsInner___"
                        data-value={item.percentage}
                        data-color={`#0${item.sequence}`}
                      >
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                        <div className="percent">
                          <img
                            className="svg"
                            src={item.image.url}
                            alt=""
                          />
                          <span className="number">{item.percentage}%</span>
                        </div>
                      </div>
                    </div>
                    </li>
                    }
                  })}
                  
                </ul>
              </div>
            </div>
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
export default connect(mapStateToProps,null)(About);
