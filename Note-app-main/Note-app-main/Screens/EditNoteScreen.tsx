import { View, Text, Button } from 'react-native'
import React,{useLayoutEffect} from 'react'
import NotetakingInputs from '../components/NotetakingInputs'
import { useNavigation, useRoute } from '@react-navigation/native';
import { EditScreenRouteProp, ScreenNavigationProp } from '../types';
import { deleteNote } from '../services/noteStoreService';
import { DeleteNote } from '../components/DeleteNote';

const EditNoteScreen: React.FC = () => {
    const route = useRoute<EditScreenRouteProp>();
    const navigation = useNavigation<ScreenNavigationProp>();
    const noteId= route.params.noteId;
    
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerTitle: noteId ? 'Edit note' : 'New note',
        headerRight: () => noteId ? (<DeleteNote noteId= {noteId} />):<></>
      })
    }, [navigation])
  return (
    <NotetakingInputs noteId={noteId}></NotetakingInputs>
  )
}

export default EditNoteScreen