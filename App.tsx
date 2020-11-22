import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store, persistor } from './src/redux/store';
import { useSelector } from 'react-redux';
import { ApplicationState } from './src/redux/store';

import Login from './src/screens/Login';
import Contacts from './src/screens/Contacts';
import Chat from './src/screens/Chat';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Contacts"
                component={Contacts}
                options={{ headerLeft: null }}
              />
              <Stack.Screen name="Chat" component={Chat} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
