import React from "react";
import { useSelector } from "react-redux";
import "../css/Carousel.css";
import { AddBackground } from "../redux/Actions/Actions";
import { useAppDispatch } from "../redux/app.hooks";
import { RootState } from "../redux/Store";

const Carousel = () => {
  const dispatch = useAppDispatch();
  const image = useSelector(
    (store: RootState) => store.UserManager.background_image
  );
  console.log(image);

  const carousel = (e: any) => {
    dispatch(AddBackground(e.target.src));
    console.log(image);
  };

  return (
    <div>
      <div className="carousel">
        <div className="carousel-num">
          <i>1</i>
          <i>2</i>
          <i>3</i>
        </div>
        <div className="carousel-stage" id="carousel">
          <div className="carousel-item">
            <div onClick={(e) => carousel(e)} className="carousel-content">
              <img
                className="carousel-image"
                src="https://64.media.tumblr.com/b116c0fd6ab60e05bbdf9de7d3449fde/c94348603ffd26e3-ae/s1280x1920/4cb23d31a04b427f787e4f7048318f806c5f382e.jpg"
                alt="cat"
              />
            </div>
          </div>
          <div className="carousel-item">
            <div onClick={(e) => carousel(e)} className="carousel-content">
              <img
                className="carousel-image"
                src="https://64.media.tumblr.com/e2fae2d22c00f60903c0e27f642e5c31/8cc5a7f4e87cb826-8d/s1280x1920/8a9f05a5f25b87cf3e1cbc962dd7e08924184ad5.jpg"
                alt="cat"
              />
            </div>
          </div>
          <div className="carousel-item">
            <div onClick={(e) => carousel(e)} className="carousel-content">
              <img
                className="carousel-image"
                src="https://64.media.tumblr.com/dd938982174091e1bab9e970fae42292/4c91eb5bbafb2fd2-f7/s1280x1920/82640ef9eca346d716a70ca9dc97849bf5af9a5b.jpg"
                alt="cat"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
