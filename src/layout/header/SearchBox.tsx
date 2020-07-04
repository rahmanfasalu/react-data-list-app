import React, { useState } from "react";
import "./searchbox.style.scss";

function SearchBox(): JSX.Element {
  const [activeClass, setActiveClass] = useState("");
  const [animateClass, setAnimateClass] = useState("");
  return (
    <div className="wrapper">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          className={`input ${activeClass}`}
        />
        <div
          className={`btn ${animateClass}`}
          onClick={(event: React.MouseEvent) => {
            if (activeClass) {
              setAnimateClass("");
              setActiveClass("");
            } else {
              setAnimateClass("animate");
              setActiveClass("active");
            }
          }}
        >
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
