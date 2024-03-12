
import { AppRegistry } from 'react-native';
import App from './App';
import store from './src/Utils/Redux/store';
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
import 'react-native-gesture-handler';

const MoviesApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => MoviesApp);
