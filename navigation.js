import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react'
import RestaurantScreen from './screens/RestaurantScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import OrderPreparing from './screens/OrderPreparing';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();


export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Place Order"  component={OrderPreparing} />
        <Stack.Screen name="Delivery"  component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}