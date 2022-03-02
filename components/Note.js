import React from 'react';
import {View, Text,Image, StyleSheet,TextInput, TouchableOpacity} from 'react-native';

const Note = (props) =>{
    return(
        <View style={styles.item}>
            <Image style={styles.square} source={require('../assets/pin.png')} ></Image>
                <TextInput multiline = {true} style={styles.itemText}>{props.text}</TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#FFF", 
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap:'wrap'
    },
    square:{
        width: 24, 
        height: 24,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15

    },
    itemText:{
        maxWidth:'80%', 
        height: '100%',
        width: '100%'

    },
    circular:{
        width: 12,
        height: '100%',
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5,

    },
});

export default Note;