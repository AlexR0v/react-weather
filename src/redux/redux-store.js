import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import weatherReducer from './weather-reducer'
import weatherWeekReducer from './weatherWeek-reducer'

const reducers = combineReducers({
  weather: weatherReducer,
  weatherWeek: weatherWeekReducer
})

const reduxStore = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)

export default reduxStore
