import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MoreDetails from '../screens/MoreDetails'
import MoviesList from '../lists/MoviesList';

const MoviesContainer = ({ id, title, popularity, release_date, imageUrl, poster_path, overview,type }) => {
    //console.log('title', title)
    const navigation = useNavigation();

    const handleMoreDetails = (id) => {

        navigation.navigate('MoreDetails', {
            id,
            type
        });

    };


    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.popularity}>Popularity: {popularity}</Text>
                <Text style={styles.release_date}>Release Date: {release_date}</Text>
                <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() => handleMoreDetails({id})}>
                    <Text style={styles.detailsButtonText}>More Details</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: 80,
        height: 120,
        marginRight: 10,
    },
    details: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    popularity: {
        marginBottom: 5,
    },
    release_date: {
        marginBottom: 5,
    },
    detailsButton: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 5,
        width: 240
    },
    detailsButtonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default MoviesContainer;