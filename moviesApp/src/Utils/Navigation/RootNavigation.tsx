import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Home from '../../Pages/Home/Home';

const RootStack = createNativeStackNavigator();

function RootNavigation() {
    return (
        <RootStack.Navigator>

            <RootStack.Screen
                name="HomeScreen"
                component={Home}
            />

        </RootStack.Navigator>
    );
}

export default React.memo(RootNavigation);