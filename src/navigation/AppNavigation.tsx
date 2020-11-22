import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Contacts from '../screens/Contacts';
import Chat from '../screens/Chat';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{ title: 'Contacts' }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        initialParams={{ user: 'Chat' }}
      />
    </Stack.Navigator>
  );
}
