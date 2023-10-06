import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { getMovieWithId, getTvWithID } from '../../services/api';

const MoreDetails = ({ route }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (route.params.id.id === 42) {
      setIsLoading(false);
      return;
    }

    loadData();
  }, [isFocused]);

  const loadData = async () => {
    let movieData;
    if (route.params.type === 'movie') {
      movieData = await getMovieWithId(route.params.id.id);
    } else {
      movieData = await getTvWithID(route.params.id.id);
    }
    setMovieDetails(movieData);
    setIsLoading(false);
    navigation.setOptions({ headerTitle: movieData.title || movieData.original_name });
  };

  if (!isFocused) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <>
          <Text style={styles.title}>{movieDetails.title || movieDetails.original_name}</Text>
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` }} style={styles.image} />
          <Text style={styles.description}>{movieDetails.overview}</Text>
          <View style={styles.details}>
            <Text style={styles.popularity}>Popularity: {movieDetails.popularity}</Text>
            <Text style={styles.releaseDate}>
              Release Date: {movieDetails.release_date || movieDetails.first_air_date}
            </Text>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    marginTop: 20,
  },
  description: {
    marginTop: 20,
    color: '#999999',
    fontSize: 16,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  popularity: {
    fontSize: 14,
  },
  releaseDate: {
    fontSize: 14,
  },
});

export default MoreDetails;
