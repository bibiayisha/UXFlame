// Third party imports
import PropTypes from "prop-types";

export const FeaturedShortsProps = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      imageurl: PropTypes.string.isRequired,
      // videoLink: PropTypes.string,
      heading: PropTypes.string.isRequired,
      subtext: PropTypes.string.isRequired,
    })
  ).isRequired,
};
