import React from 'react';
import { TouchableOpacity, Text } from 'react-native'

// Styles
import styles from './RecentSearches-styles';

function RecentSearches({ title }: RecentSearchesProps) {
    return (
        <TouchableOpacity
            style={styles.container}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default RecentSearches;

interface RecentSearchesProps {
    title: string;
}