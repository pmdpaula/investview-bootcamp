/* eslint-disable indent */
import { css } from 'styled-components';
import breakpointsMedia from './breakpointsMedia';

// export function propToStyle(propName: string): Record<string, any> {
//   return (props: { [x: string]: any }) => {
const propToStyle = propName => props => {
  const propValue = props[propName];

  if (typeof propValue === 'object') {
    return css`
      ${breakpointsMedia({
        ...(propValue.xs && {
          xs: { [propName]: propValue.xs },
        }),
        ...(propValue.sm && {
          sm: { [propName]: propValue.sm },
        }),
        ...(propValue.md && {
          md: { [propName]: propValue.md },
        }),
        ...(propValue.lg && {
          lg: { [propName]: propValue.lg },
        }),
        ...(propValue.xl && {
          xl: { [propName]: propValue.xl },
        }),
      })}
    `;
  }

  return {
    [propName]: props[propName],
  };
};

export default propToStyle;
