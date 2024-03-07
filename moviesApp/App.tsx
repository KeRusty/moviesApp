import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Components
import RootNavigation from './src/Utils/Navigation/RootNavigation';

function App(): React.JSX.Element {

  return (
    <NavigationContainer >
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
