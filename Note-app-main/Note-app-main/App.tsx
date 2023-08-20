import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotetakingInputs from './components/NotetakingInputs';
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditNoteScreen from './Screens/EditNoteScreen';
import { RootStackParamList } from './types';
import { useFocusEffect } from '@react-navigation/native';
import { NewNoteButton } from './components/NewNoteButton';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {  
  return (
    <NavigationContainer>
       <StatusBar style="auto" />
      <Stack.Navigator>
      <Stack.Screen 
       name="Home" component={HomeScreen}
       options={{      
          headerTitle: "All notes",
          headerRight: () => 
          (<NewNoteButton />)
        }}/>
      
      <Stack.Screen name="EditNote" component={EditNoteScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    backgroundColor:"#ffb70342",
    width:"100%",
    height:200,
    paddingHorizontal:20,
    paddingTop: 30,
    paddingBottom:20,
  }
});
