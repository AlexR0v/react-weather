import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Weather from './components/Weather'
import './index.css'
import reduxStore from './redux/redux-store'
import { theme } from './ui/theme'

ReactDOM.render(
  <>
    <CssBaseline />
    <ToastContainer autoClose={2000} />
    <Provider store={reduxStore}>
      <ThemeProvider theme={theme}>
        <Weather />
      </ThemeProvider>
    </Provider>
  </>,
  document.getElementById('root')
)
