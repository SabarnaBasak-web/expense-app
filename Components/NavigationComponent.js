import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import HomeScreen from '../Screens/HomeScreen';
import AddExpenseScreen from '../Screens/AddExpenseScreen';
const NavigationComponent = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const StackScreens = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen component={HomeScreen} name="Home" />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={StackScreens}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Add" component={AddExpenseScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationComponent;

const styles = StyleSheet.create({});
