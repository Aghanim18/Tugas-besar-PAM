import React from 'react';
import {StatusBar} from 'expo-status-bar';


import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';


import Routes from './src/routes';


import configureStore from './src/config/store';
const {persistor, store} = configureStore();



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor="#fff" style="auto" translucent={false} />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
