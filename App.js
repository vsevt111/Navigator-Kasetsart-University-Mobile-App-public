import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Pages/Home';
import HomeBus from './Pages/HomeBus';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
console.disableYellowBox = true;
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        barStyle={{ backgroundColor: '#0B9663' }}
        tabBarOptions={{
          activeTintColor: '#FFFFFF',
          showIcon: true,
          showLabel: false,
          activeBackgroundColor: '#6CC0A1',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="ios-navigate" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen 
          name="Bus" 
          component={HomeBus}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="md-bus" color={color} size={35} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}