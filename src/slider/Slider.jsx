import React from "react";
import Carousel from "./carousel/Carousel";
import "./Slider.scss"

export default function Slider() {
  return (
    <Carousel>
      <div className="itemSlider mek">item 1</div>
      <div className="itemSlider erku">item 2</div>
      <div className="itemSlider ereq">item 3</div>
    </Carousel>
  );
}
