import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { MovieFull } from '../interfaces/movieApiInterface';
import { Cast } from '../interfaces/movieCreditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastCard } from './CastCard';

interface MovieDetailsProps {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: MovieDetailsProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.ratingsContainer}>
                <Icon name="star-outline" size={15} color="yellow" />
                <Text style={styles.ratingsText}>{movieFull.vote_average}</Text>
                <Text style={styles.genresText}>
                    {movieFull.genres.map(genre => genre.name).join(' - ')}
                </Text>
            </View>
            <Text style={styles.title}>Sinopsis</Text>
            <Text style={styles.text}>{movieFull.overview}</Text>
            <Text style={styles.title}>Reparto</Text>
            <FlatList
                data={cast}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CastCard actor={item} />}
                horizontal={true}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    genresText: {
        color: 'gray'
    },
    ratingsContainer: {
        flexDirection: 'row',
        // paddingVertical: 2
    },
    text: {
        color: 'white'
    },
    ratingsText: {
        color: 'white',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
        paddingVertical: 10
    }
})