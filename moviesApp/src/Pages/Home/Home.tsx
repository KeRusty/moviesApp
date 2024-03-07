import React from 'react';
import { SafeAreaView, Text } from 'react-native';

// Styles
import styles from './Home-styles';

function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>THIS IS THE MIDDLE</Text>
        </SafeAreaView>
    )
}

export default Home;