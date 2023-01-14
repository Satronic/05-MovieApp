import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';


export const HomeScreen = () => {

  const { top } = useSafeAreaInsets(); // Asegura un espacio seguro para salir del notch
  const { allMovies, isLoading } = useMovies();

  if (isLoading) {
    return (
      <LoadingIndicator />
    )
  }

  return (
    <View style={{
      top
    }}>
      <MoviePoster movie={allMovies[1]}/>
    </View>
  )
}
