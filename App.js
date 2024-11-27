import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddToDoScreen from './src/screen/AddToDoScreen';
import ViewToDoScreen from './src/screen/ViewToDoScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ViewToDo">
          <Stack.Screen
            name="AddToDo"
            component={AddToDoScreen}
            options={{ title: 'Tambah To Do' }}
          />
          <Stack.Screen
            name="ViewToDo"
            component={ViewToDoScreen}
            options={{ title: 'Tampilkan To Do' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
