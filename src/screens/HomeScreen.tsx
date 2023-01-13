import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import movieAPI from '../api/movieApi';

export const HomeScreen = () => {

  useEffect(() => {
    movieAPI.get('/now_playing')
      .then(response => console.log(JSON.stringify(response.data, null, 4)))
  }, [])

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}
