import { useState } from "react";
import Card from "../card/card";
import "./slider.style.css";

type Slide = {
  id: number;
  content: string;
  backgroundColor: string;
};

type Slides = Slide[];

const slidesList: Slides = [
  {
    id: 1,
    content: "slide-1",
    backgroundColor: "#ffa",
  },
  {
    id: 2,
    content: "slide-2",
    backgroundColor: "#fcf",
  },
  {
    id: 3,
    content: "slide-3",
    backgroundColor: "#fc0",
  },
  {
    id: 4,
    content: "slide-4",
    backgroundColor: "#f93",
  },
  {
    id: 5,
    content: "slide-5",
    backgroundColor: "#fbe",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slidesList.length - 1);
    } else {
      setCurrentIndex((index) => index - 1);
    }
  };

  const handleRightSlide = () => {
    if (currentIndex === slidesList.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((index) => index + 1);
    }
  };

  return (
    <Card>
      <h4>4- Slider</h4>
      <div className="wrapper">
        <div
          className={`frame`}
          style={{ backgroundColor: slidesList[currentIndex].backgroundColor }}
        >
          <h5>{slidesList[currentIndex].content}</h5>
          <button className="btn left" onClick={handleLeftSlide}>
            {"<"}
          </button>
          <button className="btn right" onClick={handleRightSlide}>
            {">"}
          </button>
          <div className="circles">
            {slidesList.map((slide, index) => (
              <span
                key={slide.id}
                className="circle"
                onClick={() => setCurrentIndex(index)}
              >
                {currentIndex === index ? <>x</> : <>o</>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Slider;
