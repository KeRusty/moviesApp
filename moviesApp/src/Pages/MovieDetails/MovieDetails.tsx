import React, { useState, useEffect } from 'react';
import { SafeAreaView, Alert, Text, ScrollView, View, TouchableOpacity, Linking } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { fetchData } from '../../Utils/API/APIClass';
import { useSelector, useDispatch } from 'react-redux';
import { storeSelectedMovie } from '../../Utils/Redux/MoviesSlice';
import FastImage from 'react-native-fast-image'

// Components
import Loader from '../../Components/Loader/Loader';

// Styles
import styles from './MovieDetails-styles';

function MovieDetails({ navigation, route }: MovieDetailsProps) {
    const dispatch = useDispatch();
    const movies = useSelector((state: any) => state.movies);
    const { movieSingle }: any = movies ? movies : {}
    console.log(route.params)
    const routeData = route.params ? route.params : {};

    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true)
        try {
            const result = await fetchData(`?tt=${routeData.movieId}`);
            dispatch(storeSelectedMovie(result))
            setLoading(false)
        } catch (error: any) {
            console.log(error, 'error')
            setLoading(false)
            Alert.alert('Error Occured', 'Network related error occured');
        }
    }

    useEffect(() => {
        getData()
    }, [routeData]);

    return (
        <SafeAreaView style={styles.container}>

            {loading && <Loader />}

            {!loading &&
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >

                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>{movieSingle.short?.name}</Text>
                        <View style={styles.nameContainerInner}>
                            <Text style={styles.nameTextLower}>{`${movieSingle.top?.releaseYear?.year} - ${movieSingle.storyLine?.certificate?.rating}`}</Text>
                        </View>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <View style={styles.imageContainer}>
                            <FastImage
                                style={styles.image}
                                source={{
                                    uri: movieSingle.short?.image,
                                    priority: FastImage.priority.normal,
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>

                        <View style={styles.descriptionTextContainer}>
                            <Text style={styles.descriptionText}>{movieSingle.short?.description}</Text>
                        </View>

                    </View>

                    <View style={styles.actorsContainer}>
                        <Text style={styles.actionTextHeading}>{`ACTORS`}</Text>

                        {movieSingle.short?.actor.map((item: any, index: number) => {
                            return (
                                <TouchableOpacity key={index} style={styles.actorsItemsContainer} onPress={() => Linking.openURL(item.url)}>
                                    <Text style={styles.actionTextDesc}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })

                        }
                    </View>

                    <View style={styles.actorsContainer}>
                        <Text style={styles.actionTextHeading}>{`REVIEWS (${movieSingle.top?.reviews?.total})`}</Text>

                        {movieSingle.top?.featuredReviews?.edges.map((item: any, index: number) => {
                            return (
                                <View key={index} style={styles.actorsItemsContainer}>
                                    <Text style={styles.ratingTextDesc}>{item.node.text.originalText.plainText}</Text>
                                    <Text style={styles.ratingTextDescAlt}>{`By: ${item.node.author.nickName}`}</Text>
                                </View>
                            )
                        })

                        }
                    </View>

                    <View style={styles.actorsContainer}>
                        <Text style={styles.actionTextHeading}>{`KEYWORDS (${movieSingle.top?.keywords.total})`}</Text>

                        <View style={styles.keyWordsMainContainer}>
                            {movieSingle.top?.keywords?.edges.map((item: any, index: number) => {
                                return (
                                    <View key={index} style={styles.keyWordsContainer}>
                                        <Text style={styles.ratingTextDesc}>{`${item.node.text}`}</Text>
                                    </View>
                                )
                            })}
                        </View>



                    </View>



                </ScrollView>
            }



        </SafeAreaView>
    )
}

export default MovieDetails;

interface MovieDetailsProps {
    navigation: NavigationProp<any, any>;
    route: any
}
