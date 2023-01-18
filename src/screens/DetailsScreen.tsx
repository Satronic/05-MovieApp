import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

interface DetailsScreenProps extends StackScreenProps<RootStackParams, 'DetailsScreen'> { };

const width = Dimensions.get('screen').width;

export const DetailsScreen = ({ route, navigation }: DetailsScreenProps) => {

  const movie = route.params;

  const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, movieFull, cast } = useMovieDetails(movie.id);
  // console.log('State: ', JSON.stringify(state, null, 4));

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: urlImage
          }}
        />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.pop()}
        >
          <Icon name="arrow-back-outline" color="white" size={36} />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.subTitle}>{movie.original_title}</Text>
        </View>
        {isLoading
          ? <LoadingIndicator />
          :
          <MovieDetails movieFull={movieFull!} cast={cast} />
          // <Text style={styles.subTitle}>{movie.overview}</Text>
        }
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    // alignItems: 'center',
    backgroundColor: '#131313'
  },
  backButton: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    borderColor: 'white',
    borderRightWidth: 1,
    position: 'absolute',
    elevation: 20,
    top: 10,
    left: 10
  },
  image: {
    // display: 'none',
    width: width,
    height: width * 1.5,
    borderRadius: 20
  },
  textContainer: {
    padding: 10
  },
  subTitle: {
    color: 'gray'
  },
  title: {
    color: 'yellow',
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 2
  }
})