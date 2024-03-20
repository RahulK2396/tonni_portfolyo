import React from "react";
import vector6 from "../img/svg/vector6.svg"
import icon8 from "../img/svg/icon8.svg"
import icon9 from "../img/svg/icon9.svg"
import icon10 from "../img/svg/icon10.svg"
import icon5 from "../img/svg/icon5.svg"
import { connect } from "react-redux";
const TimeLine = (props) => {
  return (
    <div className="tonni_tm_section">
      <div className="tonni_tm_timeline">
        <div className="container bigger">
          <div className="timeline_inner">
            <div className="container">
              <div className="tonni_tm_main_title" data-type="flex">
                <div className="title">
                  <span>Experience</span>
                  <h3>Creative Timeline</h3>
                </div>
                <div className="subtitle">
                  <p>
                    Fusce sollicitudin eros id ex maximus gravida non vitae
                    ante. Cras ac mi a dolor suscipit rutrum ut vitae mi.
                  </p>
                </div>
              </div>
              <div className="timeline_list">
                <span className="line" />
                <ul>
                  {props.PortfolioDetails?.timeline
                    // Filter out only the enabled items
                    .filter(item => item.enabled)
                    // Sort the items based on their sequence
                    .sort((a, b) => a.sequence - b.sequence)
                    // Map through the sorted and filtered items and render them
                    .map((item, index) => (
                      <li className="wow fadeInUp" data-wow-duration="1s" key={index}>
                        <ul className="items">
                          <li>
                            <div className="list_inner">
                              <div className="details">
                                {/* Render job title and position */}
                                <p>{item.jobLocation}</p>
                                <div className="title">
                                  <h3>{item.jobTitle}</h3>
                                  <span>{item.jobPosition}</span>
                                </div>
                                <div className="text">
                                  {/* Render job description */}
                                  <p>{item.summary}</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="year">
                                {/* Render job date */}
                                <span>{`${new Date(item.startDate).getFullYear()} - ${new Date(item.endDate).getFullYear()}`}</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="image">
                                {/* Render company name or education institution */}
                                <p>{item.company_name || item.institution}</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    ))}

                </ul>
              </div>
            </div>
            <span className="shape">
              <img className="svg" src={vector6} alt="" />
            </span>
            <span className="shape2">
              <img className="svg" src={icon8} alt="" />
            </span>
            <span className="shape3">
              <img className="svg anim_circle" src={icon9} alt="" />
            </span>
            <span className="shape4">
              <img className="svg anim_circle" src={icon5} alt="" />
            </span>
            <span className="shape5">
              <img className="svg" src={icon10} alt="" />
            </span>
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
export default connect(mapStateToProps, null)(TimeLine);
