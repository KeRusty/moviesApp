import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { fetchData } from '../../Utils/API/APIClass';

// Styles
import styles from './Home-styles';

function Home() {

    const getData = async () => {
        try {
            const result = await fetchData('?q=Dune');
            console.log(result, 'result')
        } catch (error: any) {
            console.log(error, 'error')
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text>THIS IS THE MIDDLE</Text>
        </SafeAreaView>
    )
}

export default Home;