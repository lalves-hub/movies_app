import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import MoviesList from '../lists/MoviesList';
import { getPopularTV, getAiringToday, getTopRatedTV, getOnAir } from '../../services/api';
import DropdownComponent from '../lists/Dropdown';

const TvShowScreen = () => {
  const [tvData, setTvData] = useState([]);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState('popular');
  const [isLoading, setIsLoading] = useState(true);

  const fetchTvData = async () => {
    try {
      setIsLoading(true); 

      let data = [];
      if (selectedDropdownValue === 'popular') {
        data = await getPopularTV();
      } else if (selectedDropdownValue === 'airing_today') {
        data = await getAiringToday();
      } else if (selectedDropdownValue === 'top_rated') {
        data = await getTopRatedTV();
      } else if (selectedDropdownValue === 'on_air') {
        data = await getOnAir();
      }

      await new Promise((resolve) => setTimeout(resolve, 400));

      setTvData(data);
    } catch (error) {
      console.error('Error fetching TV data:', error);
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchTvData();
  }, [selectedDropdownValue]);

  const handleDropdownChange = (value) => {
    setSelectedDropdownValue(value.value);
  };

  return (
    <>
      <View>
        <DropdownComponent
          dataDropD={[
            { label: 'Airing Today', value: 'airing_today' },
            { label: 'On the Air', value: 'on_air' },
            { label: 'Popular', value: 'popular' },
            { label: 'Top Rated', value: 'top_rated' }
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
          <MoviesList data={tvData} />
        </View>
      )}
    </>
  );
};

export default TvShowScreen;
