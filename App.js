import { Provider } from 'react-redux';
import NavigationStack from './src/navigation/navigation';
import { store } from './src/store';
import { Text, VIew } from 'react-native';

export default function App() {
    return (<Provider store={store}>
       <NavigationStack/>
    </Provider>)
}
 
