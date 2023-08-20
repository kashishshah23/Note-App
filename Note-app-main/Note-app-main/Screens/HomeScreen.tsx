import {Button } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '../types';
import NotetakingInputs from '../components/NotetakingInputs';
import SaveNotesList from '../components/SaveNotesList';


const HomeScreen: React.FC  = () => {
  return (
    <>
    <SaveNotesList />
    </>
  )
}

export default HomeScreen;