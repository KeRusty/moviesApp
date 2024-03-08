import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// Styles
import styles from './RecentSearches-styles';

function RecentSearches({ title, runSearch }: RecentSearchesProps) {

    const callRunSearch = (text: string) => {
        setTimeout(() => {
            runSearch(true, text);
        }, 500)

    }
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => callRunSearch(title)}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default RecentSearches;

interface RecentSearchesProps {
    title: string;
    runSearch?: any;
}