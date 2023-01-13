import React from 'react';
import { View, Text } from 'react-native';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { useMovies } from '../hooks/useMovies';


export const HomeScreen = () => {

  const { allMovies, isLoading } = useMovies();

  if (isLoading) {
    return (
      <LoadingIndicator />
    )
  }

  return (
    <View>
      <Text>Home Screen</Text>
      <Text>{JSON.stringify(allMovies[0], null, 4)}</Text>
    </View>
  )
}
