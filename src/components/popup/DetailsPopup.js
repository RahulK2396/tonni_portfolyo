import useClickOutside from "../../useClickOutside";
import thumb4 from "../../img/thumbs/4-2.jpg"
import portfolio5 from "../../img/portfolio/5.jpg";
import service1 from "../../img/service/1.jpg"
import service2 from "../../img/service/2.jpg"
import service3 from "../../img/service/3.jpg"

const DetailsPopup = ({ show, close }) => {
  let domNode = useClickOutside(() => {
    close();
  });
  return (
    <div className={`tonni_tm_modalbox ${show ? "opened" : ""}`}>
      <div className="box_inner" ref={domNode}>
        <div className="close">
          <a className="c-pointer" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src={thumb4} alt="" />
              <div
                className="main"
                data-img-url={portfolio5}
                style={{ backgroundImage: `url(${portfolio5})` }}
              />
            </div>
            <div className="portfolio_main_title">
              <span>
                <a href="#">Details</a>
              </span>
              <h3>Product Design</h3>
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                <p>
                  We live in a world where we need to move quickly and iterate
                  on our ideas as flexibly as possible.
                </p>
                <p>
                  {`Mockups are useful both for the creative phase of the project
                  - for instance when you're trying to figure out your user
                  flows or the proper visual hierarchy - and the production
                  phase when they phase when they will represent the target
                  product. Building mockups strikes the ideal balance ease of
                  modification.`}
                </p>
              </div>
              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">Client</span>
                    <span>Alvaro Morata</span>
                  </li>
                  <li>
                    <span className="first">Category</span>
                    <span>
                      <a href="#">Details</a>
                    </span>
                  </li>
                  <li>
                    <span className="first">Date</span>
                    <span>April 22, 2022</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="additional_images">
              <ul>
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src={thumb4} alt="" />
                      <div
                        className="main"
                        data-img-url={service1}
                        style={{ backgroundImage: `url(${service1})` }}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src={thumb4} alt="" />
                      <div
                        className="main"
                        data-img-url={service2}
                        style={{ backgroundImage: `url(${service2})` }}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src={thumb4} alt="" />
                      <div
                        className="main"
                        data-img-url={service3}
                        style={{ backgroundImage: `url(${service3})` }}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsPopup;
