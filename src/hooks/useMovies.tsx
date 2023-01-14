import { useEffect, useState } from 'react';
import movieAPI from '../api/movieApi';
import { Movie, MovieApiResponse } from '../interfaces/movieApiInterface';

interface MoviesResponse {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];

}

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [movies, setMovies] = useState<MoviesResponse>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: []
  });


  // const [allMovies, setAllMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const nowPlayingPromise = movieAPI.get<MovieApiResponse>('/now_playing');
    const pupularPromise = movieAPI.get<MovieApiResponse>('/popular');
    const topRatedPromise = movieAPI.get<MovieApiResponse>('/top_rated');
    const upcomingPromise = movieAPI.get<MovieApiResponse>('/upcoming');

    const moviesResponse = await Promise.all([nowPlayingPromise, pupularPromise, topRatedPromise, upcomingPromise]);

    setMovies({
      nowPlaying: moviesResponse[0]?.data.results,
      popular: moviesResponse[1].data.results,
      topRated: moviesResponse[2].data.results,
      upcoming: moviesResponse[3].data.results
    })

    setIsLoading(false); // La busqueda se ha completado
  }

  useEffect(() => {
    getMovies();
  }, [])

  return {
    movies,
    isLoading
  }
}
