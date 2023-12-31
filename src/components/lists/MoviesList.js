import { getPopularMovies } from '../../services/api';
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import MoviesContainer from '../containers/MovieContainer'


const MoviesList = ({data,type}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(data);
        // Fetch popular movies when component mounts
        //getPopularMovies().then(data => {
            //setMovies(data);
            //console.log('sim!!!!', data);
        //});
        
    }, [data]);
    //console.log("MOVIE DATAA", movies)

    const renderItem = ({ item }) => (
        <MoviesContainer
            id = {item.id}
            title={item.title || item.original_name}
            popularity={item.popularity}
            release_date={item.release_date || item.first_air_date}
            imageUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            poster_path={item.poster_path}
            overview={item.overview}
            type = {type}
        />
    );

    return (
        <>
        
        <View>
        <FlatList
            data={movies} 
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    movieItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    poster: {
        width: 80,
        height: 120,
        marginRight: 10,
    },
    movieDetails: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    releaseDate: {
        marginBottom: 5,
    },
    overview: {
        fontSize: 12,
    },
});

export default MoviesList;
