import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';

const { width: widthDevice } = Dimensions.get('window')

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
      // flex: 1,
      top: top -10,
      // backgroundColor: 'green'
    }}>
      {/* <MoviePoster movie={allMovies[1]} /> */}
      <Carousel
        data={allMovies}
        renderItem={({ item }: any) => <MoviePoster movie={item} />}
        sliderWidth={widthDevice}
        itemWidth={250}
      />
    </View>
  )
}
