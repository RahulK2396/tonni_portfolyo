import React, { useEffect } from "react";
import { Fragment } from "react";
import { dataImage, stickyNav, wowJsAnimation } from "../../utilits.js";
import PreLoader from "./PreLoader";
import ImageView from "../popup/ImageView";
import VideoPopup from "../popup/VideoPopup";

const Layout = ({ children, title }) => {
  useEffect(() => {
    dataImage();
    wowJsAnimation();
    window.addEventListener("scroll", stickyNav);

    // Update title on component mount and whenever `title` prop changes
    document.title = title ? `Tonni | ${title}` : "Tonni | Home";

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("scroll", stickyNav);
    };
  }, [title]); // Add `title` to the dependency array

  return (
    <Fragment>
      <header>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </header>
      <PreLoader />
      <VideoPopup />
      <ImageView />
      <div className="tonni_tm_all_wrap" data-magic-cursor="show">
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;
