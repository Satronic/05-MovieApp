import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: widthDevice } = Dimensions.get('window')

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets(); // Asegura un espacio seguro para salir del notch
  const { movies, isLoading } = useMovies();

  if (isLoading) {
    return (
      <LoadingIndicator />
    )
  }

  return (
    <ScrollView>
      <View style={{
        flex: 1,
        top: top,
        // padding: 10,
        backgroundColor: '#131313'
      }}>
        <View style={{
          height: 370,
          paddingTop: 10,
          backgroundColor: '#131313'
        }}>
          <Carousel
            data={movies.nowPlaying}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={widthDevice}
            itemWidth={240}
          />
        </View>
      </View>

      <HorizontalSlider title='Populares' movies={movies.popular}/>
      <HorizontalSlider title='Mejor calificadas' movies={movies.topRated}/>
      <HorizontalSlider title='Próximos estrenos' movies={movies.upcoming}/>
    </ScrollView>

  )
}
