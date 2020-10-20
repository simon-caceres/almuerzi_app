import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';



export default ({name, onPress}) => {
    return(
        <TouchableOpacity  onPress={onPress} style={styles.container}>
            <Text style={styles.text} >{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        height: 60,
        justifyContent: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 2
    },
    text: {
        fontSize: 18
    }
})