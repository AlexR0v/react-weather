import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'
import { theme } from './components/ui/theme'
import store from './redux/store'
import Weather from './components/Weather'

ReactDOM.render(
  <>
    <CssBaseline />
    <ToastContainer autoClose={2000} />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Weather />
      </ThemeProvider>
    </Provider>
  </>,
  document.getElementById('root')
)
