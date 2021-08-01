import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput, HelperText, Headline } from 'react-native-paper'
import Constants from 'expo-constants'
import firebase from 'firebase'
import CameraSVG from '../SVG/camera.svg.js'
import { SvgXml } from 'react-native-svg'

export default function Login() {

    
    const [ email, setEmail ] = useState('')
    const [ passw, setPassw ] = useState('')

    function login() {

        firebase.auth().signInWithEmailAndPassword(email, passw)
    }

    return (
        <View>  
            
            <View style={styles.statBar} ></View>
            
            <Text style={styles.header}>Welcome Back to Mini Media</Text>

            <View style={{ padding: 25 }}></View>
        
            <View style={styles.midDistance}></View>

            <View style={styles.center}>

                <Text style={styles.helpText}>Email Address: </Text>
                
                <TextInput id="email" style={styles.inputs} onChangeText={text => setEmail(text)} value={email} />

            </View>
            <View style={styles.midDistance}></View>

            <View style={styles.center}>

                <Text style={styles.helpText}>Password: </Text>
    
                <TextInput id="email" style={styles.inputs} onChangeText={text => setPassw(text)} value={passw} />

            </View>

            
            <View style={{ padding: 20}}></View>

            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.buttonStyles} onPress={login}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <View style={{ padding: 40}}></View>
            <SvgXml xml={CameraSVG} width="450"/>
        </View>
    )
}

const styles = StyleSheet.create({
    helpText: { fontWeight: 'bold', fontSize: 20},
    inputs: { width: 350},
    center: { paddingLeft: 40},
    midDistance: { padding: 10},
    header: { color: '#1E88E5', textAlign: 'center', fontSize: 24, fontWeight: 'bold' },
    statBar: { padding: Constants.statusBarHeight },
    buttonStyles: { backgroundColor: '#1E88E5', padding: 20, width: 350, borderRadius: 15, textAlign: 'center'}
})