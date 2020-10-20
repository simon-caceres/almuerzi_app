import React, {useEffect} from 'react'
import { ActivityIndicator, AsyncStorage, View} from 'react-native'


//logica para token si hay token desvia directo a la aplicacion, si no hay token te desvia al onboarding para registrarse o logearse
export default ({navigation}) => {

    useEffect(() => {
        AsyncStorage.getItem('token')
            .then(x => {
                navigation.navigate(x ? 'Root' : 'OnBoarding')
            })
    })

    return (
        <View>
            <ActivityIndicator />
        </View>
    )
}