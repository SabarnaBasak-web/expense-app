import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../Colors/Colors';
//Screens
import HomeScreen from '../Screens/HomeScreen';
import AddExpenseScreen from '../Screens/AddExpenseScreen';
const NavigationComponent = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const StackScreens = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          component={HomeScreen}
          name="Home"
          options={{
            title: 'Account',
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'GoogleSans-Bold',
              fontWeight: '500',
              fontSize: 22,
            },
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={StackScreens}
          options={{
            headerShown: false,
            tabBarLabel: 'Wallet',
            tabBarIcon: ({color}) => (
              <Icon name="wallet" color={color} size={26} />
            ),
            tabBarLabelStyle: {
              fontFamily: 'GoogleSans-Bold',
              fontSize: 12,
            },
            tabBarActiveBackgroundColor: Colors.primary,
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: Colors.primary,
            tabBarInactiveBackgroundColor: '#fff',
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddExpenseScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="plus-circle" size={26} color={color} />
            ),
            tabBarActiveBackgroundColor: Colors.primary,
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: Colors.primary,
            tabBarInactiveBackgroundColor: '#fff',
            tabBarLabelStyle: {
              fontFamily: 'GoogleSans-Bold',
              fontSize: 12,
            },
          }}
        />
        <Tab.Screen
          name="Expense List"
          component={AddExpenseScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="list" size={26} color={color} />
            ),
            tabBarActiveBackgroundColor: Colors.primary,
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: Colors.primary,
            tabBarInactiveBackgroundColor: '#fff',
            tabBarLabelStyle: {
              fontFamily: 'GoogleSans-Bold',
              fontSize: 12,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationComponent;

const styles = StyleSheet.create({});
