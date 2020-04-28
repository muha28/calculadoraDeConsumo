import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'



const CalculaConsumo = (props) => {

    const [ttlKm, setTtlKm] = useState("")
    const [ttlLitros, setTtlLitros] = useState("")
    const [resultado, setResultado] = useState("")
    const [msg, setMsg] = useState("")

    const { navigation } = props

    const calcularConsumo = () => {
        let res = ttlKm / ttlLitros
        if (res >= 0 && res < 4) {
            setResultado(res)
            setMsg("A Classificação de consumo do seu veículo é: E")
            navigation.navigate("ClassificaConsumo", {res})
            navigation.navigate("ClassificaConsumo", {msg})
        }else if (res > 4 && res <= 8){
            setResultado(res)
            setMsg("A Classificação de consumo do seu veículo é: D")
            navigation.navigate("ClassificaConsumo", {res})
            navigation.navigate("ClassificaConsumo", {msg})
        }else if (res > 8 && res <= 10){
            setResultado(res)
            setMsg("A Classificação de consumo do seu veículo é: C")
            navigation.navigate("ClassificaConsumo", {res})
            navigation.navigate("ClassificaConsumo", {msg})
        }else if (res > 10 && res <= 12){
            setResultado(res)
            setMsg("A Classificação de consumo do seu veículo é: B")
            navigation.navigate("ClassificaConsumo", {res})
            navigation.navigate("ClassificaConsumo", {msg})
        }else if (res > 12){
            setResultado(res)
            setMsg("A Classificação de consumo do seu veículo é: A")
            navigation.navigate("ClassificaConsumo", {res})
            navigation.navigate("ClassificaConsumo", {msg})
        }
    }

    const classificarConsumo = () => {
        
        if (res <= 4) {
            setMsg("A Classificação de consumo do seu veículo é: E")
            navigation.navigate("ClassificaConsumo", {res})
        } else if (res > 4 && res <= 8) {
            setMsg("A Classificação de consumo do seu veículo é: D")
        } else if (res > 8 && res <= 10) {
            setMsg("A Classificação de consumo do seu veículo é: C")
        } else if (res > 10 && res <= 12) {
            setMsg("A Classificação de consumo do seu veículo é: B")
        } else {
            setMsg("A Classificação de consumo do seu veículo é: A")
        }
    }

    const limparTela = () => {
        value = setTtlKm("")
        value = setTtlLitros("")
        res = setResultado("")
    }


    return (
        <View style={styles.container}>
            <Text>Insira a Kilometragem do veículo: </Text>
            <TextInput
                style={{ borderWidth: 1, width: '95%', borderColor: 'orange', }}
                value={`${ttlKm}`}
                res={`${resultado}`}
                onChangeText={(value) => setTtlKm(value)}
                keyboardType="numeric"
                placeholder=' Kilometragem '
            />
            <Text>Insira a quantidade de combustível utilizada: </Text>
            <TextInput
                style={{ borderWidth: 1, width: '95%', borderColor: 'orange', }}
                value={`${ttlLitros}`}
                res={`${resultado}`}
                onChangeText={(value) => setTtlLitros(value)}
                keyboardType="numeric"
                placeholder=' Litros '
            />
            <View style={{ width: "95%", marginTop: 5 }}>
                <Button
                    title="Calcular Consumo"
                    color="black"
                    onPress={calcularConsumo}
                />
            </View>
            <View style={{ width: "95%", marginTop: 5 }}>
                <Button
                    title="Limpar dados"
                    color="black"
                    onPress={limparTela}
                />
            </View>
        </View >
    )

}


export default CalculaConsumo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
});
