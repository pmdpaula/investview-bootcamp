import styled, { css } from 'styled-components'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import { propToStyle } from '../../../theme/utils/propToStyle'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`

/* const buttonText = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.buttonText.fontSize};
    font-weight: ${theme.typographyVariants.buttonText.fontWeight};
    line-height: ${theme.typographyVariants.buttonText.lineHeight};
  `}
` */

export const TextStyleVariants = {
  smallestException,
  paragraph1,
  buttonText: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.buttonTextXs.fontSize};
      font-weight: ${theme.typographyVariants.buttonTextXs.fontWeight};
      line-height: ${theme.typographyVariants.buttonTextXs.lineHeight};
    `}
    ${breakpointsMedia({
      lg: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.buttonText.fontSize};
          font-weight: ${theme.typographyVariants.buttonText.fontWeight};
          line-height: ${theme.typographyVariants.buttonText.lineHeight};
        `}
      `
    })}
  `,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
      md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `
    })}
  `
}

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
`

export function Text({ variant, children, tag, ...props }) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  )
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1'
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf([
    'title',
    'paragraph1',
    'smallestException',
    'buttonText'
  ])
}
