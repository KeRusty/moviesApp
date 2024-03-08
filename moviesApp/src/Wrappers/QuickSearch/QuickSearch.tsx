import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { appColors } from '../../Utils/Colors/colors';
import { clearSearches } from '../../Utils/Redux/SearchSlice';

// Components
import RecentSearches from '../../Components/RecentSearches/RecentSearches';

// Styles
import styles from './QuickSearch-styles';

function QuickSearch() {
    const dispatch = useDispatch();
    const searches = useSelector((state: any) => state.searches)

    const { searchResults }: any = searches ? searches : {}

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                contentContainerStyle={styles.scroller}
            >
                {searchResults.length > 0 &&
                    searchResults.slice(0, 5).map((item: string, index: number) => {
                        return (
                            <RecentSearches
                                key={index}
                                title={item}
                            />
                        )
                    })
                }
                {searchResults.length > 0 &&
                    <TouchableOpacity
                        style={styles.clearButton}
                        onPress={() => dispatch(clearSearches())}
                    >
                        <Icon
                            name="close-outline"
                            size={18}
                            color={appColors.black}
                        />
                    </TouchableOpacity>
                }
            </ScrollView>
        </View>
    )
}

export default QuickSearch