import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import movieAPI from '../api/movieApi';
import { MovieApiNowPlaying } from '../interfaces/movieApiInterface';

export const HomeScreen = () => {

  useEffect(() => {
    movieAPI.get<MovieApiNowPlaying>('/now_playing')
      .then(response => console.log(JSON.stringify(response.data.results, null, 4)))
  }, [])

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}
