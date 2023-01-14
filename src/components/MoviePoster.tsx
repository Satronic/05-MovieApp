import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieApiInterface';

interface MoviePosterProps {
    movie: Movie,
    width?: number,
    height?: number
}

export const MoviePoster = ({ movie, width = 220, height = 330 }: MoviePosterProps) => {

    const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <View style={{
            ...styles.containerImage,
            width,
            height,
            borderRadius: width / 10,
            margin: width / 25
        }}>
            <Image
                style={{
                    ...styles.image,
                    width,
                    height,
                    borderRadius: width / 15
                }}
                source={{
                    uri: urlImage
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    containerImage: {
        paddingBottom: 10,
        // margin: '1%',
        alignItems: 'center',
        shadowColor: "#fff",
        shadowOpacity: 0.5,
        shadowRadius: 6.27,
        elevation: 15,
    },
    image: {
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 0.3
    }
});
