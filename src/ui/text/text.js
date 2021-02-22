import styled from '@emotion/styled'
import { color, overflow, space, system, typography } from 'styled-system'
import { theme } from '../theme'

export const Text = styled.span(
  system({
    wordBreak: true,
    whiteSpace: true,
    textTransform: true,
    textOverflow: true,
    textDecoration: true,
    cursor: true,
  }),
  color,
  space,
  overflow,
  typography
)

Text.defaultProps = {
  color: theme.colors.text,
}
