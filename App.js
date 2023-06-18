import { Button, StyleSheet, Text, View,TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3Icon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import About from './components/About';

const Tab = createBottomTabNavigator();

export default function App() {
  const [inp, onChangeinp] = useState("");
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// 
// 
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 10,
  },
  input: {
    borderRadius: 5,
    flex:1,
  },
  searchconatiner: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  word: {
    fontSize: 18,
    marginLeft: 50,
  },
  
});
