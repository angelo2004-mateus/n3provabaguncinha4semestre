import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Segments from './screens/Segments';
import Brands from './screens/Brands';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Associações', headerStyle: { backgroundColor: '#1e1e1e' }, headerTitleStyle: { color: '#fff' } }}
        />
        <Stack.Screen
          name="Segments"
          component={Segments}
          options={({ navigation }) => ({
            title: 'Segmentos',
            headerStyle: { backgroundColor: '#1e1e1e' },
            headerTitleStyle: { color: '#fff' },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}
              >
                <Icon name="arrow-back" size={24} color="#fff" />
                <Text style={{ color: '#fff', marginLeft: 5 }}>Voltar</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Brands"
          component={Brands}
          options={({ navigation }) => ({
            title: 'Marcas',
            headerStyle: { backgroundColor: '#1e1e1e' },
            headerTitleStyle: { color: '#fff' },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}
              >
                <Icon name="arrow-back" size={24} color="#fff" />
                <Text style={{ color: '#fff', marginLeft: 5 }}>Voltar</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
