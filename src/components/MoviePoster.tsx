import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieApiInterface';

interface MoviePosterProps {
    movie: Movie
}

export const MoviePoster = ({ movie }: MoviePosterProps) => {

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
        // marginTop: 20,
        // backgroundColor: 'green',
        padding: 30,
        alignItems: 'center',
    },
    image: {
        width: 240,
        height: 360,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 6.27
        // elevation: 5,
    }
});
