import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Column, Row } from '../ui/layout'
import { Text } from '../ui/text/text'
import { theme } from '../ui/theme'

const WeatherWeek = () => {
  const weatherWeekData = useSelector(store => store.weatherWeek)

  const groupDate = (arr) => {
    return arr.reduce((groups, item) => {
      const date = item.dt_txt.split(' ')[ 0 ]
      if (!groups[ date ]) {
        groups[ date ] = []
      }
      groups[ date ].push(item)
      return groups
    }, {})
  }

  const groups = groupDate(weatherWeekData.data.list || [])
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      items: groups[ date ]
    }
  })

  return (
    <Row
      justifyContent='space-evenly'
      pt={50}
      pb={50}
      flexWrap='wrap'
    >
      {
        groupArrays.map(item => {
          const date = new Date(item.date).toLocaleDateString('ru-RU', {
            day: 'numeric',
            year: 'numeric',
            month: 'short'
          })
          return (
            <Box
              m={10}
              width={315}
              key={item.date}
            >
              <Column
                alignItems='center'
                bg='white'
                borderRadius={theme.radii.medium}
                pb={11}
              >
                <Text>{date}</Text>
                <Column alignItems='flex-start'>
                  {
                    item.items.map(day => (
                      <Row
                        key={day.dt}
                        justifyContent='center'
                      >
                        <Box
                          height={50}
                          width={50}
                          justifyContent='center'
                          alignItems='center'
                          border='text'
                        >
                          <Text>{new Date(day.dt * 1000).toLocaleTimeString().substr(0, 5)}</Text>
                        </Box>
                        <Box
                          height={50}
                          width={50}
                          justifyContent='center'
                          alignItems='center'
                          border='white'
                        >
                          <Text>{Math.round(day.main.temp)}°</Text>
                        </Box>
                        <Box
                          height={50}
                          width={50}
                          justifyContent='center'
                          alignItems='center'
                          border='white'
                        >
                          <Column alignItems='center'>
                            <Text fontSize='tiny'>Ощущ.</Text>
                            <Text>{Math.round(day.main.feels_like)}°</Text>
                          </Column>
                        </Box>
                        <Box
                          height={50}
                          width={50}
                          justifyContent='center'
                          alignItems='center'
                          border='white'
                        >
                          <Column alignItems='center'>
                            <Text fontSize='tiny'>Влаж.</Text>
                            <Text>{Math.round(day.main.humidity)}%</Text>
                          </Column>
                        </Box>
                        <Box
                          height={50}
                          width={50}
                          justifyContent='center'
                          alignItems='center'
                          border='white'
                        >
                          <Column alignItems='center'>
                            <Text fontSize='tiny'>Ветер</Text>
                            <Text>{Math.round(day.wind.speed)}м/с</Text>
                          </Column>
                        </Box>
                        <Box
                          height={50}
                          width={50}
                          justifyContent='center'
                          alignItems='center'
                          border='white'
                        >
                          <img
                            style={{ width: 50, height: 50 }}
                            src={`http://openweathermap.org/img/wn/${day.weather[ 0 ].icon}@2x.png`}
                            alt=''
                          />
                        </Box>
                      </Row>
                    ))
                  }
                </Column>
              </Column>
            </Box>
          )
        })
      }

    </Row>
  )
}

export default WeatherWeek
