import React from 'react'
import {Text, TextInput, Alert, View, StyleSheet, Button, TouchableHighlight} from 'react-native'
import useForm from '../hooks/useForm'

export default ({navigation}) => {
    const initialState = {
        email: '',
        password: ''
    }
    const onSubmit = (value) => {
        fetch('https://serverless.simon-caceres.vercel.app/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type' : 'Application/json'
            },
            body:JSON.stringify(value),
        })
        .then(x => x.text())
        .then(x => {
            if(x === 'usuario creado con exito') {
                return Alert.alert(
                    'Exito',
                    x,
                    [
                        {text: 'Ir al Inicio', onPress: () => navigation.navigate('Login')}
                    ]
                )
            }
            Alert.alert(
                'Error',
                x
            )
        })
    }

    const {subscribe, handleSubmit, inputs } = useForm(initialState, onSubmit)
    return (
        <View style={styles.container}>
             <Text style={styles.title}> Registrarme:</Text>
             <TextInput 
                style={styles.input} 
                placeholder='Email' 
                autoCapitalize='none'
                value={inputs.email}
                onChangeText={subscribe('email')}
             />
             <TextInput 
                autoCapitalize='none'
                style={styles.input} 
                placeholder='Password' 
                value={inputs.password}
                onChangeText={subscribe('password')}
                secureTextEntry={true}
             />
             <Button 
                title='Enviar' 
                onPress={handleSubmit} 
             />
            <TouchableHighlight 
                style={styles.touchBtn} 
                onPress={() => navigation.navigate('Login')}
            >
                <Text >
                    Volver al inicio
                </Text>
            </TouchableHighlight>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 2,
        alignSelf: 'stretch',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 15
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    touchBtn: {
        color: 'blue',
        marginTop: 20
    }
})