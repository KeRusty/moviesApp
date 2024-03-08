import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { appColors } from '../../Utils/Colors/colors';

// Styles
import styles from './Header-styles';

function Header({ navigation, route }: HeaderProps) {
    console.log(route.name)
    return (
        <SafeAreaView style={styles.container}>
            {route.name !== "HomeScreen" &&
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <Icon
                        name="arrow-back-outline"
                        size={30}
                        color={appColors.white}
                    />
                </TouchableOpacity>
            }
            {route.name !== "HomeScreen" &&
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{route.name === "MovieDetailsScreen" ? "Details" : "Home"}</Text>
                </View>
            }

        </SafeAreaView>
    )
}

export default Header;

interface HeaderProps {
    navigation: any;
    route: any;
}