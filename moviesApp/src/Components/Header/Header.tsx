import React from 'react';
import { View } from 'react-native';

// Styles
import styles from './Header-styles';

function Header({ navigation, route }: HeaderProps) {
    return (
        <View style={styles.container}>

        </View>
    )
}

export default Header;

interface HeaderProps {
    navigation: any;
    route: any;
}