import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, Alert, FlatList } from 'react-native';
import { fetchData } from '../../Utils/API/APIClass';
import { useDispatch, useSelector } from 'react-redux';
import { storeMovies } from '../../Utils/Redux/MoviesSlice';
import { saveSearch } from '../../Utils/Redux/SearchSlice';
import { NavigationProp } from "@react-navigation/native";

// Components
import Loader from '../../Components/Loader/Loader';
import SearchBox from '../../Components/SearchBox/SearchBox';
import MovieBox from '../../Components/MovieBox/MovieBox';
import QuickSearch from '../../Wrappers/QuickSearch/QuickSearch';

// Styles
import styles from './Home-styles';

function Home({ navigation }: HomeProps) {
    const dispatch = useDispatch();
    const movies = useSelector((state: any) => state.movies);
    const searches = useSelector((state: any) => state.searches)
    const { searchQuick }: any = searches ? searches : {}
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [defaultSearchValue, setDefaultSearchValue] = useState('Dune')

    const getData = useCallback(async (isSearch?: boolean, searchValue?: string) => {
        setLoading(true)
        try {
            const result = await fetchData(`?q=${isSearch ? searchValue : defaultSearchValue}`);
            const { description }: any = result ? result : {}
            dispatch(storeMovies(description))
            setLoading(false)
        } catch (error: any) {
            setLoading(false)
            Alert.alert('Error Occured', 'Network related error occured');
        }
    }, [])

    useEffect(() => {
        if (searchQuick.length === 0) {
            getData();
        } else {
            getData(true, searchQuick);
        }
    }, [searchQuick]);

    const runSearch = (isQuickSearch?: boolean, text?: string) => {
        if (!isQuickSearch) {
            dispatch(saveSearch(searchText))
            getData(true, searchText)
        } else {
            getData(true, text)
        }
    }

    const renderItem = useCallback(({ item, index }: any) => {
        return (
            <MovieBox
                key={index}
                title={item["#TITLE"]}
                actors={item["#ACTORS"]}
                year={item["#YEAR"]}
                image={item['#IMG_POSTER']}
                movieId={item['#IMDB_ID']}
                navigation={navigation}
            />
        )
    }, [])

    const keyExtract = useCallback((item: any) => item['#IMDB_ID'], []);

    return (
        <SafeAreaView style={styles.container}>
            {loading && <Loader />}
            {!loading &&
                <SearchBox
                    placeholder={'Search...'}
                    onChangeText={setSearchText}
                    runSearch={() => runSearch()}
                />
            }
            {!loading &&
                <QuickSearch
                    runSearch={runSearch}
                />
            }
            {!loading &&
                movies.description.length > 0 &&
                <FlatList
                    contentContainerStyle={styles.flatlist}
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

interface HomeProps {
    navigation: NavigationProp<any, any>;
}
