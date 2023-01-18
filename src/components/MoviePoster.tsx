import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { GradientContext } from '../context/GradientContext';
import { Movie } from '../interfaces/movieApiInterface';

interface MoviePosterProps {
    movie: Movie,
    width?: number,
    height?: number
}

export const MoviePoster = ({ movie, width = 220, height = 330 }: MoviePosterProps) => {

    const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();

    const { colors } = useContext(GradientContext)

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={{
                ...styles.containerImage,
                width,
                height,
                borderRadius: width / 10,
                margin: width / 25
            }}
            onPress={() => navigation.navigate('DetailsScreen', movie)}
        >
            <Image
                style={{
                    ...styles.image,
                    width,
                    height,
                    borderRadius: width / 15,
                    borderColor: colors.secondary
                }}
                source={{
                    uri: urlImage
                }}
            />
        </TouchableOpacity>
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
        borderWidth: 1
    }
});
