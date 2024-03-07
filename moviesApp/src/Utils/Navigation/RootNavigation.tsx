import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import Header from '../../Components/Header/Header';

// Screens
import Home from '../../Pages/Home/Home';

const RootStack = createNativeStackNavigator();

function RootNavigation() {
    return (
        <RootStack.Navigator>

            <RootStack.Screen
                name="HomeScreen"
                component={Home}
                options={{
                    header: ({ navigation, route }) => (
                        <Header
                            navigation={navigation}
                            route={route}
                        />
                    )
                }}
            />

        </RootStack.Navigator>
    );
}

export default React.memo(RootNavigation);