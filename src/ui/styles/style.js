import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core'
import bg from '../../assets/bg.jpg'
import { theme } from '../theme'

export const useStyles = makeStyles({
  form: {
    width: '90%',
    marginBottom: 50
  },
  root: {
    //backgroundColor: 'hsl(199, 98%, 48%)',
  },
  grid: {
    marginTop: 20
  }
})

export const Background = styled('div')(() => ({
  background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.418)), url(${bg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}))

export const BackgroundTitle = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: theme.colors.white,
  color: 'text',
  paddingBottom: '1.67em',
  borderRadius: theme.radii.medium
}))
