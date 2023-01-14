import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Movie } from '../interfaces/movieApiInterface';
import { MoviePoster } from './MoviePoster';

interface HorizontalSliderProps {
    movies: Movie[];
    title: string
}

export const HorizontalSlider = ({ movies, title }: HorizontalSliderProps) => {
    return (
        <View style={{
            padding: 10,
            backgroundColor: '#131313'
        }}>
            <Text style={{
                color: 'white',
                fontSize: 18
            }}>{title}</Text>
            <FlatList
                data={movies}
                renderItem={({ item }) => <MoviePoster movie={item} width={110} height={165} />}
                horizontal={true}
            />
        </View>
    )
}
