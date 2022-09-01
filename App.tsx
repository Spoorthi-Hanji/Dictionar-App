
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer,RouteProp } from '@react-navigation/native';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import Home from './Home';
import Details from './Details';


export interface Stack{
  name: string;
  navigation: StackNavigationProp<any>;
  route: RouteProp<any>;
}
const Stack = createStackNavigator();

function App() {
  
   
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;