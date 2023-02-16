import React, { useEffect, useState, Children, cloneElement } from "react";
import "./Carousel.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PageWidth = 450;

export default function Carousel({ children }) {
  const [carouselPages, setCarouselPages] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setCarouselPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PageWidth}px`,
            maxWidth: `${PageWidth}px`,
          },
        });
      })
    );
  }, []);

  function handlerLeftArrow() {
    setOffset((prevOffset) => {
      const newOffset = prevOffset + PageWidth;
      // rotating
      // if (newOffset === 450) {
      //   return -900;
      // }
      return Math.min(newOffset, 0);
    });
  }
  function handlerRightArrow() {
    setOffset((prevOffset) => {
      const newOffset = prevOffset - PageWidth;
      const maxOffset = -(PageWidth * (carouselPages.length - 1));
      // rotating
      // if (newOffset === -1350) {
      //   return 0;
      // }
      return Math.max(newOffset, maxOffset);
    });
  }

  return (
    <div className="carouselContainer">
      <FiChevronLeft className="arrow" onClick={handlerLeftArrow} />
      <div className="carouselWindow">
        <div
          className="carouselItems"
          style={{
            transform: `translateX(${offset}px)`,
          }}>
          {carouselPages}
        </div>
      </div>
      <FiChevronRight className="arrow" onClick={handlerRightArrow} />
    </div>
  );
}
