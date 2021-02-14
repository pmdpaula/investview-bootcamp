import styled from 'styled-components'
import { propToStyle } from '../../../../theme/utils/propToStyle'

interface BoxProps {
  display: string
  flexDirection: string
  justifyContent: string
  flex: number
  flexWrap: string
  backgroundImage: string
  backgroundRepeat: string
  backgroundPosition: string
}

export const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`
