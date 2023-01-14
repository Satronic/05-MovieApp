import { useEffect, useState } from 'react';
import movieAPI from '../api/movieApi';
import { Movie, MovieApiResponse } from '../interfaces/movieApiInterface';

export const useMovies= () => {

  const [isLoading, setIsLoading] = useState(true);
  const [allMovies, setAllMovies] = useState<Movie[]>([])

  const getMovies = async() => {
    const response = await movieAPI.get<MovieApiResponse>('/now_playing');
    const allMovies = response.data.results;
    setAllMovies(allMovies);
    setIsLoading(false); // La busqueda se ha completado
  }

  useEffect(() => {
    getMovies();
  }, [])

  return {
    allMovies,
    isLoading
  }
}
