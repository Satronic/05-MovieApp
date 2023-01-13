import React from 'react';
import { View, Text } from 'react-native';
import { useMovies } from '../hooks/useMovies';


export const HomeScreen = () => {

  const { allMovies } = useMovies();

  return (
    <View>
      <Text>Home Screen</Text>
      <Text>{JSON.stringify(allMovies[0], null, 4)}</Text>
    </View>
  )
}
