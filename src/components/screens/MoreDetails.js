import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import {getMovieWithId, getTvWithID} from '../../services/api'

const MoreDetails = ({route}) => {
    //const route = useRoute();
   const [movieDetails, setMovieDetails] = useState({});
    const navigation = useNavigation(); // Get the navigation object
    //const [movieDetails, setMovieDetails] = useState(route.params)
    //console.log("route params 2: ", route.params);
    //const movieDetails  = route.params;
    let movieData ;
    
    useEffect(()=>{
        if(route.params.id.id==42){
            return
        }
        const movie = loadData();
        
       
      

    },[movieDetails])
    const loadData=async()=>{
        //console.log('movie dets', route.params.id.id)
       //console.log('movie dets', route.params.type)
       if(route.params.type=="movie")
       movieData =  await getMovieWithId(route.params.id.id)
       else
       movieData = await getTvWithID(route.params.id.id)
      
       setMovieDetails(movieData);
       return movieData;
        }
    // if (!movieDetails) {
    //     console.log('Movie details not found.');
    //     return null;
    // }

    // const { title, imageUrl, description, popularity, release_date } = movieDetails;

    return (
        <View style={styles.container}>
            {/* <Text>{route.params.id.type}</Text> */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Back to List</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{movieDetails.title || movieDetails.original_name}</Text>
            <Image source={{ uri: "https://image.tmdb.org/t/p/w500"+movieDetails.poster_path }} style={styles.image} />
            <Text style={styles.description}>{movieDetails.overview}</Text>
            <View style={styles.details}>
                <Text style={styles.popularity}>Popularity: {movieDetails.popularity}</Text>
                <Text style={styles.release_date}>Release Date: {movieDetails.release_date}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    backButtonText: {
        color: 'blue',
        fontSize: 16,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    image: {
        width: '100%',
        height: 300,
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
