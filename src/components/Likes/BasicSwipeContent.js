import React from "react";
import PropTypes from "prop-types";

import "./BasicSwipeContent.css";

const BasicSwipeContent = ({ label, position }) => (
  <div className={`basic-swipeable-list__item-content-${position}`}>
    <span className={`basic-img-${position}`}></span>
  </div>
);

BasicSwipeContent.propTypes = {
  label: PropTypes.string,
  position: PropTypes.oneOf(["left", "right"]).isRequired,
};

export default BasicSwipeContent;
