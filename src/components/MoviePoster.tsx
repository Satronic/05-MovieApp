import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieApiInterface';

interface MoviePosterProps {
    movie: Movie
}

export const MoviePoster = ({movie}: MoviePosterProps) => {

    const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <View style={styles.containerImage}>
            <Image
                style={styles.image} 
                source={{
                    uri: urlImage
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    containerImage: {
        flex: 1,
        margin: 10
    },
    image: {
        width: 260,
        height:390,
        borderRadius: 20
    }
});
