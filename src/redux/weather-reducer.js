const GET_WEATHER_LOADING = 'GET_WEATHER_LOADING'
const GET_WEATHER_FAIL = 'GET_WEATHER_FAIL'
const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS'

const initialState = {
  loading: false,
  data: {},
  errorMsg: '',
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: '',
      }
    case GET_WEATHER_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: 'unable to find weather',
      }
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: action.data,
      }
    default:
      return state
  }
}

export const getWeatherLoading = () => ({ type: GET_WEATHER_LOADING })
export const getWeatherFail = () => ({ type: GET_WEATHER_FAIL })
export const getWeatherSuccess = (data) => ({ type: GET_WEATHER_SUCCESS, data: data })


export default weatherReducer
