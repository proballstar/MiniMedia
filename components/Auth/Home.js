import CameraSVG from "../SVG/camera.svg.js"
import StatsSVG from "../SVG/stats.svg.js"
import { SvgXml } from 'react-native-svg'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants';

export default function Home({ navigation }) {
    return (
        <View>
            <View style={styles.statBar}></View>
            <Text style={styles.header}>Mini Media</Text>
            <Text style={styles.subTitle}>Share your feelings with the world</Text>
            <View style={{ padding: 40}}></View>
            <SvgXml xml={StatsSVG} width="450px" height="75px"/>
            <View style={{ padding: 20 }}/>
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonStyles}><Text style={{ color: '#FFF', textAlign: 'center'}}>Login</Text></TouchableOpacity>
                <View style={{ padding: 5}}/>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.needAccount}><Text style={{ color: '#F2994A'}}>Need an account?</Text></TouchableOpacity>
            </View>
            <View style={{ padding: 40 }}/>
            <SvgXml xml={CameraSVG} width="400px" height="300px"/>
        </View>
    )
}

const styles = StyleSheet.create({
    helpText: { fontWeight: 'bold', fontSize: 20},
    inputs: { width: 350 },
    center: { paddingLeft: 40},
    midDistance: { padding: 3},
    header: { color: '#1E88E5', textAlign: 'center', fontSize: 45, fontWeight: 'bold', justifyContent: 'center' },
    statBar: { padding: Constants.statusBarHeight },
    subTitle: { color: '#F2994A', justifyContent: 'center', alignContent: 'center', textAlign: 'center', fontSize: 22, fontWeight: 'bold'},
    login: {},
    needAccount: {},
    buttonStyles: { backgroundColor: '#1E88E5', padding: 15, width: 250, borderRadius: 15, textAlign: 'center'}
})