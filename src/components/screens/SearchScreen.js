import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { searchMultiWithInput, searchMovieWithInput } from "../../services/api"
import MoviesList from "../lists/MoviesList"
import DropdownComponent from '../lists/Dropdown'

const SearchScreen = () => {
  //const [searchMedia, setSearchMedia] = useState('multi');
  const [searchText, setSearchText] = useState('');
  const [movieData, setMovieData] = useState([]);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState('multi');
  const handleSearchInputChange = (text) => {
    setSearchText(text);
  };

  const handleDropdownChange = (value) => {

    setSelectedDropdownValue(value.value);

  };

  useEffect(() => {
    //console.log("effect", movieData);

  }, [movieData])
  const handleSearch = () => {
    const searched = async () => {
      try {
        if (selectedDropdownValue === 'multi') {
          const data = await searchMultiWithInput(searchText)
          setMovieData(data);
          console.log(data[0]);
          console.log("type", selectedDropdownValue)
      } else if (selectedDropdownValue === 'movie') {
          const data = await searchMovieWithInput(searchText)
          setMovieData(data);
          console.log(data[0]);
          console.log("type!!", selectedDropdownValue)
      }
      } catch (error) {
        console.error('Error fetching movie data:', error);
        // Handle error, show an error message, etc.
      }
   
  } 
searched();
//console.log('Performing search for:', searchText);
//console.log("type!!", selectedDropdownValue)
};

return (
  <>
    <View >
      <View>
        <Text>Search Movie/TV Show name *</Text>
        <TextInput
          style={styles.input}
          placeholder="Search Movies"
          value={searchText}
          onChangeText={handleSearchInputChange}
        />
      </View>
      <DropdownComponent
      dataDropD={[
        { label: 'Multi', value: 'multi' },
        { label: 'Movie', value: 'movie' }
      ]}
      onValueChange={handleDropdownChange}
      placeholder={"Multi"}
    />
      <Button title="Search" onPress={handleSearch} />
      <MoviesList data={movieData} type={selectedDropdownValue} />
    </View>
    

  </>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    width: '100%',
  },
});

export default SearchScreen;
