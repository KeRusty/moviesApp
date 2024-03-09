import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { appColors } from './src/Utils/Colors/colors';

// Components
import RootNavigation from './src/Utils/Navigation/RootNavigation';

function App(): React.JSX.Element {

  useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBarStyle('light-content', true);
      StatusBar.setBackgroundColor(appColors.gold);
    }

  }, []);

  return (
    <NavigationContainer >
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
