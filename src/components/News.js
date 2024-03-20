import React from "react";
import { Fragment, useState } from "react";
import Slider from "react-slick";
import BlogPopup from "./popup/BlogPopup";
import partner1 from "../img/partners/1.png" 
import partner2 from "../img/partners/2.png" 
import partner3 from "../img/partners/3.png" 
import partner4 from "../img/partners/4.png" 
import partner5 from "../img/partners/5.png" 
import partner6 from "../img/partners/6.png" 
import partner7 from "../img/partners/7.png" 
import partner8 from "../img/partners/8.png" 
import icon9 from "../img/svg/icon9.svg"
import icon8 from "../img/svg/icon8.svg"
import icon5 from "../img/svg/icon5.svg"
import icon10 from "../img/svg/icon10.svg"
import news1 from "../img/news/1.jpg"
import news2 from "../img/news/2.jpg"
import news3 from "../img/news/3.jpg"
import thumb3137 from "../img/thumbs/37-31.jpg"

const News = () => {
  const props = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const blogData = [
    {
      title: "Morisson Says when the musics over turn light",
      img: news1,
      dec: [
        "Tonni is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
        "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
        "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
      ],
      date: "22 May-2022",
    },
    {
      title: "How to be appreciated for your hard work",
      img: news2,
      dec: [
        "Tonni is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
        "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
        "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
      ],
      date: "15 May-2022",
    },
    {
      title: "Standard size of business agency Consulating",
      img: news3,
      dec: [
        "Tonni is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
        "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
        "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
      ],
      date: "07 May-2022",
    },
  ];
  const [activeBlogData, setActiveBlogData] = useState();
  const [activeBlog, setActiveBlog] = useState(false);
  return (
    <Fragment>
      <BlogPopup
        close={() => setActiveBlog(false)}
        show={activeBlog}
        blogData={activeBlogData}
      />
      <div className="tonni_tm_section" id="news">
        <div className="tonni_tm_news">
          <div className="container bigger">
            <div className="news_inner">
              <div className="container">
                <div className="tonni_tm_main_title" data-type="flex">
                  <div className="title">
                    <span>Our Blog</span>
                    <h3>Latest News &amp; Articles</h3>
                  </div>
                  <div className="subtitle">
                    <p>
                      Fusce sollicitudin eros id ex maximus gravida non vitae
                      ante. Cras ac mi a dolor suscipit rutrum ut vitae mi.
                    </p>
                  </div>
                </div>
                <div className="news_list">
                  <ul>
                    {blogData.map((blog, i) => (
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay={`0.${i * 2}s`}
                        key={i}
                      >
                        <div className="list_inner">
                          <div className="image">
                            <img src={thumb3137} alt="" />
                            <div
                              className="main"
                              data-img-url={blog.img}
                              style={{ backgroundImage: `url(${blog.img})` }}
                            />
                            <a
                              className="tonni_tm_full_link c-pointer"
                              onClick={() => {
                                setActiveBlog(true);
                                setActiveBlogData(blog);
                              }}
                            />
                          </div>
                          <div className="details">
                            <span className="date">{blog.date}</span>
                            <h3 className="title">
                              <a
                                className="c-pointer"
                                onClick={() => {
                                  setActiveBlog(true);
                                  setActiveBlogData(blog);
                                }}
                              >
                                {blog.title}
                              </a>
                            </h3>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <span className="shape">
                    <img className="svg" src={icon8} alt="" />
                  </span>
                  <span className="shape2">
                    <img
                      className="svg anim_circle"
                      src={icon5}
                      alt=""
                    />
                  </span>
                  <span className="shape3">
                    <img className="svg" src={icon10} alt="" />
                  </span>
                </div>
                <div
                  className="tonni_tm_partners wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <div className="tonni_tm_main_title" data-type="centered">
                    <div className="title">
                      <h3>Trusted Partners</h3>
                    </div>
                    <div className="subtitle">
                      <p>
                        Fusce sollicitudin eros id ex maximus gravida non vitae
                        ante. Cras ac mi a dolor suscipit rutrum ut vitae mi.
                      </p>
                    </div>
                  </div>
                  <div className="partners_list">
                    <Slider {...props} className="owl-carousel">
                      <div className="item">
                        <a href="#">
                          <img src={partner1} alt="" />
                        </a>
                      </div>
                      <div className="item">
                        <a href="#">
                          <img src={partner2} alt="" />
                        </a>
                      </div>
                      <div className="item">
                        <a href="#">
                          <img src={partner3} alt="" />
                        </a>
                      </div>
                      <div className="item">
                        <a href="#">
                          <img src={partner4} alt="" />
                        </a>
                      </div>
                      <div className="item">
                        <a href="#">
                          <img src={partner5} alt="" />
                        </a>
                      </div>
                      <div className="item">
                        <a href="#">
                          <img src={partner6} alt="" />
                        </a>
                      </div>
                      <div className="item">
                        <a href="#">
                          <img src={partner7} alt="" />
                        </a>
                      </div>
                      <div className="item">
                        <a href="#">
                          <img src={partner8} alt="" />
                        </a>
                      </div>
                    </Slider>
                    <span className="shape">
                      <img
                        className="svg anim_circle"
                        src={icon9}
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Empowering 230,000+Businesses with Innovation{" "}
                      <a href="#">trusted clients.</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default News;
