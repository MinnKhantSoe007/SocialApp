import { Provider } from 'react-redux';
import NavigationStack from './src/navigation/navigation';
import { store } from './src/store';
import { Text, VIew } from 'react-native';
import { persistStore } from 'redux-persist';
import { injectStore } from './src/services/axiosConfig';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store)

export default function App() {

    injectStore(store);

    return (

        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <NavigationStack />
            </PersistGate>
        </Provider>

    );
}

