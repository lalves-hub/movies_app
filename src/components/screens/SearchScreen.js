import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { searchMultiWithInput, searchMovieWithInput } from '../../services/api';
import MoviesList from '../lists/MoviesList';
import DropdownSearch from '../lists/DropdownSearch';
import { AntDesign } from '@expo/vector-icons';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [movieData, setMovieData] = useState([]);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState('multi');
  const [hasSearch, setHasSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchInputChange = (text) => {
    setSearchText(text);
    setHasSearch(true);
  };

  const handleDropdownChange = (value) => {
    setSelectedDropdownValue(value.value);
  };

  const handleSearch = async () => {
    try {
      setIsLoading(true);
  
      if (searchText.trim() === '') {
        setIsLoading(false);
        setHasSearch(true);  
        return; 
      }
  
      let data;
      if (selectedDropdownValue === 'multi') {
        data = await searchMultiWithInput(searchText);
      } else if (selectedDropdownValue === 'movie') {
        data = await searchMovieWithInput(searchText);
      }
  
      // Update hasSearch based on whether data is empty or not
      setHasSearch(data.length > 0);
  
      setTimeout(() => {
        setMovieData(data);
        setIsLoading(false);
      }, 400);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Search Movie/TV Show name *</Text>
        <TextInput
          style={styles.input}
          placeholder="i.e. James Bond, CSI"
          value={searchText}
          onChangeText={handleSearchInputChange}
        />
      </View>
      <View style={styles.controlsContainer}>
        <DropdownSearch
          dataDropD={[
            { label: 'Multi', value: 'multi' },
            { label: 'Movie', value: 'movie' }
          ]}
          onValueChange={handleDropdownChange}
          placeholder="Multi"
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <AntDesign name="search1" size={20} color="white" style={styles.searchIcon} />
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      {!hasSearch && searchText === '' && (
        <View style={styles.centeredTextContainer}>
          <Text style={styles.centeredText}>
            Please, initiate a search!
    </Text>
        </View>
      )}
      {hasSearch && searchText.trim() === '' && (
        <View style={styles.centeredTextContainer}>
          <Text style={styles.centeredText}>
            Please, insert a search value first!
    </Text>
        </View>
      )}




      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
          <MoviesList data={movieData} type={selectedDropdownValue} />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    width: '100%',
  },
  search: {
    marginBottom: 15,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  searchButton: {
    marginTop: 23,
    backgroundColor: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    height: 40,
    width: 150
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  searchIcon: {
    marginRight: 5,
  },
  centeredTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    fontSize: 24,  
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey'
  },
});

export default SearchScreen;
