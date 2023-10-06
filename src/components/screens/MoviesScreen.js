import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MoviesList from '../lists/MoviesList';
import { getPopularMovies, getNowPlaying } from '../../services/api';
import DropdownComponent from '../lists/Dropdown';

const MoviesScreen = () => {
  const [movieData, setMovieData] = useState([]);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState(null);

 // useEffect(() => {
    // Fetch the movie data based on the selected dropdown value
    const fetchMovieData = async () => {
      try {
        if (selectedDropdownValue === 'popular') {
          const dataPopularMovies = await getPopularMovies();
          //console.log('Popular Movies:', dataPopularMovies);
          setMovieData(dataPopularMovies);
        } else if (selectedDropdownValue === 'now_playing') {
          const dataNowPlaying = await getNowPlaying();
          //console.log('Now Playing Movies:', dataNowPlaying);
          setMovieData(dataNowPlaying);
        }
      } catch (error) {
        //console.error('Error fetching movie data:', error);
        // Handle error, show an error message, etc.
      }
    };
  
    if (selectedDropdownValue) {
      fetchMovieData();
    }
 // }, [selectedDropdownValue]);  

  const handleDropdownChange = (value) => {
    
    setSelectedDropdownValue(value.value);
  };

  return (
    <>
      <View>
        <DropdownComponent
          dataDropD={[
            { label: 'Popular', value: 'popular' },
            { label: 'Now Playing', value: 'now_playing'} ,
            { label: 'Top Rated ', value: 'top_rated' },
            { label: 'Upcoming ', value: 'upcoming' }
          ]}
          onValueChange={(e)=>handleDropdownChange(e)}
        />
      </View>
      <View>
        {/* Pass the correct data prop based on selectedDropdownValue */}
        <MoviesList data={movieData} type = "movie" />
      </View>
    </>
  );
};

export default MoviesScreen;
