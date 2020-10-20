import React from 'react'
import {Text, TextInput, View, StyleSheet, Button, TouchableHighlight, Alert, AsyncStorage} from 'react-native'
import useForm from '../hooks/useForm'

export default ({navigation}) => {
    const initialState = {
        email: '',
        password: ''
    }
    const onSubmit = (value) => {
        fetch('https://serverless.simon-caceres.vercel.app/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'Application/json'
            },
            body:JSON.stringify(value),
        })
        .then(x => x.text())
        .then(x => {
            try {
                return JSON.parse(x)
            } catch {
                throw x 
            }
        })
        .then (x => {
            //guarda el token en el storage del telefono
            AsyncStorage.setItem('token', x.token)
            navigation.navigate('Meals')
        })
        .catch( err => Alert.alert('Error', err))
    }
    //custom Hook
    const {subscribe, inputs, handleSubmit} = useForm(initialState, onSubmit)

    return (
        <View style={styles.container}>
             <Text style={styles.title}>Iniciar Sesion:</Text>
             <TextInput 
                value={inputs.email} 
                onChangeText={subscribe('email')} 
                style={styles.input} 
                placeholder='Email' 
                autoCapitalize='none'
            />
             <TextInput 
                value={inputs.password}
                 onChangeText={subscribe('password')} 
                 style={styles.input} 
                 placeholder='Password' 
                 secureTextEntry={true}
                 autoCapitalize='none'
            />
             <Button 
                title='Iniciar Sesión' 
                onPress={handleSubmit} 
            />
             <TouchableHighlight 
                style={styles.touchBtn} 
                onPress={() => navigation.navigate('Register')}
             >
                 <Text >
                     Registrarme
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