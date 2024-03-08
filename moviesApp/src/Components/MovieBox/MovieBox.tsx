import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { appColors } from '../../Utils/Colors/colors';
import FastImage from 'react-native-fast-image'
import { NavigationProp } from "@react-navigation/native";

// Styles
import styles from './MovieBox-styles';

function MovieBox({ title, actors, year, image, movieId, navigation }: MovieBoxProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('MovieDetailsScreen', { movieId: movieId })}>
            <View style={styles.movieContainer}>
                <FastImage
                    style={styles.image}
                    source={{
                        uri: image,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{title} {year && <Text style={styles.yearText}>{`(${year})`}</Text>}</Text>
                    <Text style={styles.actorsText}>{actors}</Text>
                </View>
            </View>



            <Icon
                name="caret-forward-outline"
                size={15}
                color={appColors.black}
            />
        </TouchableOpacity>
    )
}

export default MovieBox;

interface MovieBoxProps {
    title: string,
    actors: string,
    year: number,
    image: string,
    movieId: string,
    navigation: NavigationProp<any, any>;
}
