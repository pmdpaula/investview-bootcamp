import { PropTypes } from 'prop-types';

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const defaultStyles = {
  borderRadius: '8px',
  transition: '200ms ease-in-out',
  fontFamily: "'Roboto', sans-serif",
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
  contentWidth: '1600px',
};

breakpoints.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

defaultStyles.propTypes = {
  borderRadius: PropTypes.string.isRequired,
  transition: PropTypes.string.isRequired,
  fontFamily: PropTypes.string.isRequired,
  boxShadow: PropTypes.string.isRequired,
};
