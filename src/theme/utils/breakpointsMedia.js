/* eslint-disable no-undef */
import { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import { breakpoints } from '../index';

const breakpointsMedia = cssByBreakpoint => {
  const breakpointNames = Object.keys(breakpoints);

  return breakpointNames
    .filter(breakpointName => Boolean(cssByBreakpoint[breakpointName]))
    .map(
      breakpointName => css`
        @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
          ${cssByBreakpoint[breakpointName]}
        }
      `,
    );
};

export default breakpointsMedia;

breakpointsMedia.propTypes = {
  cssByBreakpoint: PropTypes.string.isRequired,
};
