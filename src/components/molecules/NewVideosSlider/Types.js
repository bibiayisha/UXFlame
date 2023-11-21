// Third party imports
import PropTypes from "prop-types";

export const NewVideosSliderProps = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      imageurl: PropTypes.string.isRequired,
      videoLink: PropTypes.string,
    })
  ).isRequired,
};
