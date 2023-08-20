import {TextInput,StyleSheet,Button, View, Text } from 'react-native'
import React,{useState,useEffect,useLayoutEffect} from 'react'
import { getnote } from '../services/noteStoreService';
import EditNoteScreen from '../Screens/EditNoteScreen';
import { saveNote } from '../services/noteStoreService';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '../types';
import { DeleteNote } from './DeleteNote';
import { SaveNote } from './SaveNote';

type Props = {
    noteId:string | undefined
};

const NotetakingInputs: React.FC<Props> = ({ noteId}) => {
    
  const [text,setText] = useState<string>("");
  const navigation = useNavigation<ScreenNavigationProp>();
  

useLayoutEffect(()=>{
      navigation.setOptions({
        headerLeft:()=><SaveNote id={noteId ?? ""} text={text} />,
      });
    }, [navigation,text,noteId])

 useEffect(() => {
  if(noteId){
    getnote(noteId).then(result => setText(result?.text ?? ""))
  }
 }, [])
  return (
    <>
    <TextInput 
    multiline={true}
    style={styles.textInput}
    value={text}
    onChangeText={setText}
    autoFocus={true}
    />
    </>
  )
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
      fontSize:16,
      flex:1,
      paddingHorizontal:20,
      paddingTop: 30,
      paddingBottom:20,
    }
  });

export default NotetakingInputs