import axios from 'axios'
import { notifyError } from '../Notification'
import { getWeatherFail, getWeatherLoading, getWeatherSuccess } from '../redux/weather-reducer'
import { getWeatherWeekFail, getWeatherWeekLoading, getWeatherWeekSuccess } from '../redux/weatherWeek-reducer'

export const getWeather = (town, country) => async dispatch => {
  try {
    dispatch(getWeatherLoading())
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${town},${country}&APPID=fc251eb05cfd5ba06753987914714cf5&lang=ru&units=metric`)
    await dispatch(getWeatherSuccess(res.data))
  } catch (err) {
    notifyError(err.response.data.message)
    console.error(err.response)
    dispatch(getWeatherFail())
  }
}

export const getWeatherCoord = (lat, lon) => async dispatch => {
  try {
    dispatch(getWeatherLoading())
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=fc251eb05cfd5ba06753987914714cf5&lang=ru&units=metric`)
    await dispatch(getWeatherSuccess(res.data))
  } catch (err) {
    notifyError(err.response.data.message)
    console.error(err.response)
    dispatch(getWeatherFail())
  }
}

export const getWeatherWeek = (town, country) => async dispatch => {
  try {
    dispatch(getWeatherWeekLoading())
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${town},${country}&APPID=fc251eb05cfd5ba06753987914714cf5&lang=ru&units=metric`)
    await dispatch(getWeatherWeekSuccess(res.data))
  } catch (err) {
    notifyError(err.response.data.message)
    console.error(err.response)
    dispatch(getWeatherWeekFail())
  }
}

export const getWeatherWeekCoord = (lat, lon) => async dispatch => {
  try {
    dispatch(getWeatherWeekLoading())
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=fc251eb05cfd5ba06753987914714cf5&lang=ru&units=metric`)
    await dispatch(getWeatherWeekSuccess(res.data))
  } catch (err) {
    notifyError(err.response.data.message)
    console.error(err.response)
    dispatch(getWeatherWeekFail())
  }
}
