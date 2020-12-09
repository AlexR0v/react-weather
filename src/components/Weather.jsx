import React, { useEffect, useState } from 'react'
import { Button, CircularProgress, Container, Grid, List, SwipeableDrawer, TextField } from '@material-ui/core'
import { Box, Column, Row } from './ui/layout'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather, getWeatherWeek } from '../api'
import { Text } from './ui/text/text'
import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from './ui/styles/styles'
import { notifyWarning } from '../Notification'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import WeatherWeek from './WeatherWeek'

const Weather = () => {
  const styles = useStyles()
  const dispatch = useDispatch()
  const dataOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }
  const [town, setTown] = useState('')
  const [openMenu, setOpenMenu] = useState(false)

  const weatherData = useSelector(store => store.weather)

  useEffect(() => {
    dispatch(getWeather('Ростов-на-Дону', 'ru'))
    dispatch(getWeatherWeek('Ростов-на-Дону', 'ru'))
  }, [])


  const onSubmit = async (e) => {
    e.preventDefault()
    if (town) {
      dispatch(getWeather(town, 'ru'))
      setOpenMenu(false)
    } else {
      notifyWarning('Введите название города')
    }
  }
  return (
    <Grid
      className={styles.root}
    >
      <SwipeableDrawer
        anchor='left'
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        onOpen={() => setOpenMenu(true)}
      >
        <Box width={[265, 320, 320]}>
          <Column alignItems='center'>
            <Text
              as='h2'
              color='semiBlack'
            >
              Введите название города
            </Text>
            <form
              className={styles.form}
              onSubmit={onSubmit}
              noValidate
              autoComplete='off'
            >
              <Column alignItems='center'>
                <TextField
                  className={styles.form}
                  value={town}
                  onChange={(e) => {
                    setTown(e.target.value)
                  }}
                  label='Город'
                />
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  disableElevation
                >
                  Узнать погоду
                </Button>
              </Column>
            </form>
          </Column>
        </Box>
      </SwipeableDrawer>
      <Container className={styles.root}>
        <Box
          width='fit-content'
          p={16}
          style={{ cursor: 'pointer' }}
          onClick={() => setOpenMenu(true)}
        >
          <MenuIcon
            fontSize='large'
            htmlColor='white'
          />
        </Box>
        {
          weatherData.loading ? <CircularProgress /> :
          <Grid
            container
            direction='column'
            alignItems='center'
          >
            {
              Object.values(weatherData.data).length !== 0 ?
              <>
                <List>

                </List>
                <Text as='h1'>{weatherData.data.name}</Text>
                <Text>Данные
                      на {new Date(weatherData.data.dt * 1000).toLocaleDateString('ru-RU', dataOptions)}</Text>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.data.weather[ 0 ].icon}@2x.png`}
                  alt=''
                />
                <Text fontSize='large'>{Math.round(weatherData.data.main.temp)}°</Text>
                <Row
                  mt={20}
                  width={300}
                  justifyContent='space-evenly'
                >
                  <Text>Max {Math.round(weatherData.data.main.temp_max)}°</Text>
                  <Text>Min {Math.round(weatherData.data.main.temp_min)}°</Text>
                </Row>
                <Text>{weatherData.data.weather[ 0 ].description}</Text>
                <Text mt={10}>Ощущается как {Math.round(weatherData.data.main.feels_like)}°</Text>
                <Text mt={10}>Облачность {weatherData.data.clouds.all}%</Text>
                <Row
                  width={300}
                  flexDirection={['column', 'row', 'row']}
                  alignItems='center'
                  justifyContent='space-evenly'
                >
                  <Text mt={20}>Атм. давление {weatherData.data.main.pressure}hPa</Text>
                  <Text mt={20}>Влажность {weatherData.data.main.humidity}%</Text>
                </Row>
                <Row
                  width={300}
                  flexDirection={['column', 'row', 'row']}
                  alignItems='center'
                  justifyContent='space-evenly'
                >
                  <Text mt={20}>Скорость ветра {weatherData.data.wind.speed} м/с</Text>
                  <Text mt={20}>Направление {weatherData.data.wind.deg}</Text>
                </Row>
                <Row
                  mt={20}
                  width={300}
                  justifyContent='space-evenly'
                >
                  <Text>{weatherData.data.coord.lat} c.ш.</Text>
                  <Text>{weatherData.data.coord.lon} в.д.</Text>
                </Row>
                <Row
                  mt={20}
                  width={265}
                  justifyContent='space-between'
                >
                  <Box>
                    <ArrowUpwardIcon
                      htmlColor='white'
                      fontSize='small'
                    />
                    <WbSunnyIcon
                      htmlColor='white'
                      fontSize='small'
                    />
                    <Text>{new Date(weatherData.data.sys.sunrise * 1000).toLocaleTimeString().substr(0, 5)}</Text>
                  </Box>
                  <Box>
                    <Text>{new Date(weatherData.data.sys.sunset * 1000).toLocaleTimeString().substr(0, 5)}</Text>
                    <ArrowDownwardIcon
                      htmlColor='white'
                      fontSize='small'
                    />
                    <WbSunnyIcon
                      htmlColor='white'
                      fontSize='small'
                    />
                  </Box>
                </Row>
              </> :
              <CircularProgress />
            }
          </Grid>
        }
      </Container>
      {
        Object.values(weatherData.data).length !== 0 ?
        <WeatherWeek /> : null
      }
    </Grid>
  )
}

export default Weather
