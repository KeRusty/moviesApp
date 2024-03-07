import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// Styles
import styles from './MovieBox-styles';

function MovieBox({ title, actors, year }: MovieBoxProps) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.titleText}>{title} <Text style={styles.yearText}>{`(${year})`}</Text></Text>
            <Text>{actors}</Text>
        </TouchableOpacity>
    )
}

export default MovieBox;

interface MovieBoxProps {
    title: string,
    actors: string,
    year: number,
}
