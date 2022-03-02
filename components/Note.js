import React from 'react';
import {View, Text,Image, StyleSheet, TouchableOpacity} from 'react-native';

const Note = (props) =>{
    return(
        <View style={styles.item}>
            <Image style={styles.square} source={require('../assets/pin.png')} ></Image>
                <Text style={styles.itemText}>{props.text}</Text>
        <View style={styles.circular}></View>
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

    },
    circular:{
        width: 12,
        height: 12,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5,

    },
});

export default Note;