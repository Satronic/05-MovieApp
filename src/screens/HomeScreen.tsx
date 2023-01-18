import React, { useContext } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getImageColors';
import { GradientContext } from '../context/GradientContext';

const { width: widthDevice } = Dimensions.get('window')

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets(); // Asegura un espacio seguro para salir del notch
  const { movies, isLoading } = useMovies();

  const { setMainColors } = useContext(GradientContext)

  const getPosterColor = async (index: number) => {
    const movie = movies.nowPlaying[index];
    const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { primary = 'transparent', secondary = 'transparent'} = await getImageColors(urlImage);
    // console.log('Colors: ', primary, secondary);
    setMainColors({
      primary,
      secondary
    })
  };

  if (isLoading) {
    return (
      <LoadingIndicator />
    )
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{
          flex: 1,
          top: top,
          // padding: 10,
          // backgroundColor: '#131313'
        }}>
          <View style={{
            height: 370,
            paddingTop: 10,
            // backgroundColor: '#131313'
          }}>
            <Carousel
              data={movies.nowPlaying}
              renderItem={({ item }: any) => <MoviePoster movie={item} />}
              sliderWidth={widthDevice}
              itemWidth={240}
              onSnapToItem={(index) => getPosterColor(index)}
            />
          </View>
        </View>

        <HorizontalSlider title='Populares' movies={movies.popular} />
        <HorizontalSlider title='Mejor calificadas' movies={movies.topRated} />
        <HorizontalSlider title='Próximos estrenos' movies={movies.upcoming} />
      </ScrollView>
    </GradientBackground>
  )
}
