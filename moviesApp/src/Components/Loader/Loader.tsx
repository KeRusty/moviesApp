import React from 'react';
import { View, ActivityIndicator } from 'react-native'
import { appColors } from '../../Utils/Colors/colors';

// Styles
import styles from './Loader-styles';

function Loader() {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size={'large'}
                color={appColors.gold}
            />
        </View>
    )
}

export default Loader;