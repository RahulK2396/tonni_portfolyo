import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import icon9 from "../img/svg/icon9.svg";
import icon12 from "../img/svg/icon12.svg";
import quote from "../img/svg/quote.svg";
import thumb3745 from "../img/thumbs/37-45.jpg"

const Testimonials = (props) => {
  const [active, setActive] = useState(null);
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    if (props.PortfolioDetails) {
      setActive(props.PortfolioDetails.testimonials[0]);
      setTestimonialData(props.PortfolioDetails.testimonials);
    }
  }, [props.PortfolioDetails]);

  const activeDotFun = (value, i) => {
    setActive(value);
    let data = [...testimonialData];
    data.push(data[i]);
    data.splice(i, 1);
    setTestimonialData(data);
  };

  const activeImg = (value, key) => { 
    console.log("active",active , active["review"], key, active['image'].url)
    if(key == "image"){

      return active && active[key]?.url === value ? "active" : "";
    }
    else {
      return active && active[key] === value ? "active" : "";
    }
  }

  return (
    <div className="tonni_tm_section">
      <div className="tonni_tm_testimonials">
        <div className="container">
          <div className="testimonials_inner wow fadeInUp" data-wow-duration="1s">
            <span className="shape">
              <img className="svg anim_circle" src={icon9} alt="" />
            </span>
            <span className="shape2">
              <img className="svg" src={icon12} alt="" />
            </span>
            <div className="leftpart">
              <ul>
                {testimonialData.map((item, idx) => (
                  <li key={idx} className={activeImg(item.image.url, "image")} data-index={idx}>
                    <div className="image">
                      <img src={thumb3745} alt="" />
                      <div className="main" data-img-url={item.img} style={{ backgroundImage: `url(${item.image.url})` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rightpart">
              <div className="rightpart_in">
                <div className="main_title">
                  <h3>
                    <span className="big">
                      Testimonials
                      <span className="small">
                        Testimonials
                        <img className="svg" src={quote} alt="" />
                      </span>
                    </span>
                  </h3>
                </div>
                <div className="quotes">
                  <ul>
                    {testimonialData.map((item, idx) => (
                      <li key={idx} className={activeImg(item.review, "review")} data-index={idx}>
                        <p>{item.review}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="details">
                  <div className="infos">
                    <div className="avatars">
                      <ul className="grid-sort">
                        {testimonialData.map((review, i) => (
                          <li key={i} className={`grid-item ${i}`}>
                            <span onClick={() => activeDotFun(review, i)}>
                            <div
                                
                                style={{
                                  backgroundImage: `url(${
                                    review && review.image.url
                                  })`,
                                }}
                              />
                            </span>
                            <span className="hidden">{i+1}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="short">
                      <ul className="name">
                        {testimonialData.map((item, idx) => (
                          <li key={idx} className={activeImg(item.name, "name")} data-index={idx}>
                            <h3>{item.name}</h3>
                          </li>
                        ))}
                      </ul>
                      <ul className="job">
                        {testimonialData.map((item, idx) => (
                          <li key={idx} className={activeImg(item.job, "job")} data-index={idx}>
                            <span>{item.job}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
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
export default connect(mapStateToProps, null)(Testimonials);
