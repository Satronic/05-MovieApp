import { useState, useEffect } from 'react';
import movieAPI from '../api/movieApi';
import { MovieFull } from '../interfaces/movieApiInterface';
import { MovieCredits, Cast } from '../interfaces/movieCreditsInterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export const useMovieDetails = (moviId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () => {
        const movieDetailsPromise = await movieAPI.get<MovieFull>(`/${moviId}`);
        const movieCreditsPromise = await movieAPI.get<MovieCredits>(`/${moviId}/credits`);

        const [movieDetailsResponse, movieCreditsResponse] = await Promise.all([movieDetailsPromise, movieCreditsPromise]);

        // console.log(JSON.stringify(response.data, null, 4));
        setState({
            isLoading: false,
            movieFull: movieDetailsResponse.data,
            cast: movieCreditsResponse.data.cast
        })
    };

    useEffect(() => {
        getMovieDetails();
    }, [])

    return state;
}
