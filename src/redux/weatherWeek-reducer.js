const GET_WEATHER_WEEK_LOADING = 'GET_WEATHER_WEEK_LOADING'
const GET_WEATHER_WEEK_FAIL = 'GET_WEATHER_WEEK_FAIL'
const GET_WEATHER_WEEK_SUCCESS = 'GET_WEATHER_WEEK_SUCCESS'

const initialState = {
  loading: false,
  data: {},
  errorMsg: '',
}

const weatherWeekReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_WEEK_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: '',
      }
    case GET_WEATHER_WEEK_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: 'unable to find weather',
      }
    case GET_WEATHER_WEEK_SUCCESS:
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

export const getWeatherWeekLoading = () => ({ type: GET_WEATHER_WEEK_LOADING })
export const getWeatherWeekFail = () => ({ type: GET_WEATHER_WEEK_FAIL })
export const getWeatherWeekSuccess = (data) => ({ type: GET_WEATHER_WEEK_SUCCESS, data: data })


export default weatherWeekReducer
