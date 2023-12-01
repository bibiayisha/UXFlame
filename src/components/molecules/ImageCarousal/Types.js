// Third party imports
import PropTypes from "prop-types";

export const ImageCarousalProps = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      subtext: PropTypes.string.isRequired,
      imageurl: PropTypes.string.isRequired,
      videoLink: PropTypes.string.isRequired,
    })
  ).isRequired,
  slidesToShow: PropTypes.number,
  smallHeading: PropTypes.string,
  bigHeading: PropTypes.string,
  margin: PropTypes.string,
  bgColor: PropTypes.bool,
};
