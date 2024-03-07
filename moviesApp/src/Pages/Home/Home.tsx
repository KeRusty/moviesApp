import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, Alert, FlatList } from 'react-native';
import { fetchData } from '../../Utils/API/APIClass';
import { useDispatch, useSelector } from 'react-redux';
import { storeMovies } from '../../Utils/Redux/MoviesSlice';

// Components
import MovieBox from '../../Components/MovieBox/MovieBox';

// Styles
import styles from './Home-styles';

function Home() {
    const dispatch = useDispatch();
    const movies = useSelector((state: any) => state.movies);

    const [loading, setLoading] = useState(false)

    const getData = async () => {
        setLoading(true)
        try {
            const result = await fetchData('?q=Fast');
            const { description }: any = result ? result : {}
            dispatch(storeMovies(description))
            setLoading(false)
        } catch (error: any) {
            setLoading(false)
            Alert.alert('Error Occured', 'Network related error occured');
        }
    }

    useEffect(() => {
        getData();
    }, []);


    const renderItem = useCallback(({ item, index }: any) => {
        console.log(item, 'rendereditem')
        return (
            <MovieBox
                key={index}
                title={item["#TITLE"]}
                actors={item["#ACTORS"]}
                year={item["#YEAR"]}
            />
        )
    }, [])

    const keyExtract = useCallback(({ index }: any) => index?.toString(), [])

    return (
        <SafeAreaView style={styles.container}>
            {!loading &&
                movies.description.length > 0 &&
                <FlatList
                    data={movies.description}
                    renderItem={renderItem}
                    keyExtractor={keyExtract}
                    showsVerticalScrollIndicator={false}
                />
            }
        </SafeAreaView>
    )
}

export default Home;