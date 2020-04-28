import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const ClassificaConsumo = (props) => {

    //const { navigation } = props
    const { route } = props
    const { res } = route.params
    const { msg } = route.params

    return (
        <View>            
            <Text>O Consumo médio do seu veículo é de {res} KM/L</Text>
            <Text>{msg}</Text>


        </View>
    )
}

export default ClassificaConsumo

const styles = StyleSheet.create({})
