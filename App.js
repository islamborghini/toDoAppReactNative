import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, KeyboardAvoidingView,  TouchableOpacity } from 'react-native';
import Note from './components/Note';
export default function App() {
  
  const[note, setNote] = useState();
  const [noteItems, setNoteItems] = useState([]);

  const handleAddNote = (note) =>{
    if (note == null) {
    alert("Note cannot be empty");
    return;
    }
    else{
    setNoteItems([...noteItems, note])
    setNote(null);
    }
  }

  const deletionAlert= ()=>{
    alert("Long press to delete")
  }

  const completeNote = (index) =>{
    let itemsCopy = [...noteItems];
    itemsCopy.splice(index, 1);
    setNoteItems(itemsCopy);
    alert("You deleted the note")
  }
  return (
    <View style={styles.container}>

      {/*Today's tasks*/}
        <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Your notes</Text>
            
            <View style = {styles.items}>
              {/*This is where the tasks will go*/}
              {
                noteItems.map((item, index)=>{
                  return (
                    <TouchableOpacity key={index} 
                    onPress={()=>deletionAlert()} 
                    onLongPress={()=>completeNote(index)}>
                        <Note key={index} text={item}></Note>
                       
                    </TouchableOpacity>
                  )
                })
              }
            </View>
        </View>
        
        {/*Write a note*/}
        <KeyboardAvoidingView 
          behaviour={Platform.OS === "ios"?"padding":"height"}
          style={styles.writeNoteWrapper}
          >
            <TextInput style={styles.input} placeholder={'Write a note'}value = {note} onChangeText={text => setNote(text)}/>

        <TouchableOpacity onPress={()=>handleAddNote(note)}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',

  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#FFF"
  },
  items:{
    marginTop: 30,
  },
  writeNoteWrapper:{
    position:'absolute',
    bottom:60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  input:{
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper:{
    width: 60, 
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60, 
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText:{},

});