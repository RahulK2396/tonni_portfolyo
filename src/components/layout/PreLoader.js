import React from "react";
import { useEffect } from "react";
import { preloader } from "../../utilits.js";

const PreLoader = () => {
  useEffect(() => {
    preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line" />
    </div>
  );
};
export default PreLoader;
