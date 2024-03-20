import React from "react";
import { Fragment, useEffect, useState } from "react";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import Isotope from "isotope-layout";
import vector5 from "../img/svg/vector5.svg"
import { connect } from "react-redux";

const Portfolio = (props) => {
  const [activeDetailsPopup, setActiveDetailsPopup] = useState(false);
  // Isotope
  useEffect(() => {
    dataImage();
    setTimeout(() => {
      new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
      });
    }, 500);
  }, []);
  return (
    <Fragment>
      <DetailsPopup
        show={activeDetailsPopup}
        close={() => setActiveDetailsPopup(false)}
      />
      <div className="tonni_tm_section" id="portfolio">
        <div className="tonni_tm_portfolio">
          <div className="container">
            <div className="tonni_tm_main_title" data-type="centered">
              <div className="title">
                <h3>Latest Projects</h3>
              </div>
              <div className="subtitle">
                <p>
                  Fusce sollicitudin eros id ex maximus gravida non vitae ante.
                  Cras ac mi a dolor suscipit rutrum ut vitae mi.
                </p>
              </div>
            </div>
            <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
              <ul className="gallery_zoom grid">
               
                {props.PortfolioDetails?.projects
                .filter(item => item.enabled)
                .sort((a, b) => a.sequence - b.sequence).map((item,idx) => {
                    return <li>
                      <div className="list_inner">
                      <div>
                        <img src={item.image.url} alt="" />
                        {/* <div
                          className="main"
                          data-img-url={item.image.url}
                        /> */}
                      </div>
                      <div className="details">
                        <span className="category">
                        {item.githuburl &&
                        <a
                          className=""
                          href={item.githuburl}
                        >GitHub</a>
                    }
                        </span>
                        {item.title && <h3 className="title">{item.title}</h3>}
                        <img className="svg" src={vector5} alt="" />
                      </div>
                      {item.liveurl &&
                        <a
                          className="tonni_tm_full_link popup-youtube"
                          href={item.liveurl}
                        />
                    }
                    </div>
                    </li>
               
                })}
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (PortfolioReducer) => {
  return {
    PortfolioDetails: PortfolioReducer.PortfolioDetails.PortfolioDetails[0]
  }
}
export default connect(mapStateToProps,null)(Portfolio);
