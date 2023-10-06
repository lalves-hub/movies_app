import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import MoviesList from '../lists/MoviesList';
import { getPopularTV } from '../../services/api';
//import DropdownComponent from '../lists/Dropdown';


const TvShowScreen = () => {
    const [tvData, setTvData] = useState([]);
  
    useEffect(() => {
      // Fetch the movie data
      // Assuming fetchData is a function that fetches the data
      getPopularTV().then(data => {
          
        setTvData(data);
       // console.log("setTVVVVVData: ", data)
      });
    }, []);
  
    return (
      <View>
          {/* <DropdownComponent /> */}
        {/* Render the MoviesList component and pass the movie data */}
        <MoviesList data={tvData} />
      </View>
    );
  };

export default TvShowScreen;