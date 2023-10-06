import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import MoviesList from '../lists/MoviesList';
import { getPopularMovies, getNowPlaying, getTopRatedMovies, getUpcoming } from '../../services/api';
import DropdownComponent from '../lists/Dropdown';

const MoviesScreen = ({ navigation }) => {
  const [movieData, setMovieData] = useState([]);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState('popular');
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovieData = async (selectedValue) => {
    try {
      setIsLoading(true);

      let data = [];
      if (selectedValue === 'popular') {
        data = await getPopularMovies();
      } else if (selectedValue === 'now_playing') {
        data = await getNowPlaying();
      } else if (selectedValue === 'top_rated') {
        data = await getTopRatedMovies();
      } else if (selectedValue === 'upcoming') {
        data = await getUpcoming();
      }

      // Simulates delay for loading to show
      await new Promise((resolve) => setTimeout(resolve, 400));

      setMovieData(data);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchMovieData(selectedDropdownValue);
  }, [selectedDropdownValue]);

  const handleDropdownChange = (value) => {
    setSelectedDropdownValue(value.value);
    fetchMovieData(value.value);
  };

  return (
    <>
      <View>
        <DropdownComponent
          dataDropD={[
            { label: 'Popular', value: 'popular' },
            { label: 'Now Playing', value: 'now_playing' },
            { label: 'Top Rated', value: 'top_rated' },
            { label: 'Upcoming', value: 'upcoming' }
          ]}
          onValueChange={handleDropdownChange}
          placeholder={'Popular'}
        />
      </View>

      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <View>
          <MoviesList data={movieData} type="movie" navigation={navigation} />
        </View>
      )}
    </>
  );
};

export default MoviesScreen;
