import React from "react";
import layer from "../img/svg/layer.svg"
import design from  "../img/svg/design.svg"
import marketing from "../img/svg/marketing.svg"
import apps from "../img/svg/apps.svg"
import vector4 from '../img/svg/vector4.svg'
import { connect } from "react-redux";

const Service = (props) => {
  return (
    <div className="tonni_tm_section" id="service">
      <div className="tonni_tm_service">
        <div className="container bigger">
          <div className="service_in">
            <div className="container">
              <div className="tonni_tm_main_title" data-type="flex">
                <div className="title">
                  <span>Our Services</span>
                  <h3>What Can I Do</h3>
                </div>
                <div className="subtitle">
                  <p>
                    Fusce sollicitudin eros id ex maximus gravida non vitae
                    ante. Cras ac mi a dolor suscipit rutrum ut vitae mi.
                  </p>
                </div>
              </div>
              <div className="service_list">
                <ul>
                  {props.PortfolioDetails?.services.map((item, idx) =>{
                    if(item.enabled){
                      return <li>
                        <div className="list_inner">
                        <img className="svg" src={item.image.url} alt="" />
                        <div className="title">
                          <h3>{item.name}</h3>
                          {item.charge && <span>Charge : {item.charge}</span>}
                        </div>
                        <div className="text">
                          <p>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      </li>
                    }
                  })}
                </ul>
              </div>
            </div>
            <span className="shape">
              <img className="svg" src={vector4} alt="" />
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
export default connect(mapStateToProps,null)(Service);

