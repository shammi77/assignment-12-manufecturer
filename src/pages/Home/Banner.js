import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-75">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/JtGjn0J/download1.jpg" className="w-full" alt="" />
        <div className="absolute flex justify-between transhtmlForm -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/5jrqrXw/download-1.jpg" className="w-full" alt="" />
        <div className="absolute flex justify-between transhtmlForm -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/C6dBybF/download.jpg" className="w-full" alt="" />
        <div className="absolute flex justify-between transhtmlForm -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="" className="w-full" alt="" />
        <div className="absolute flex justify-between transhtmlForm -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
