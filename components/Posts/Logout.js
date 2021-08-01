import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import firebase from 'firebase'

export default function Logout() {
    function logout() {
        firebase.auth().signOut()
    }
    return (
        <View>
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                <View style={styles.statBar}/>
                <TouchableOpacity style={styles.buttonStyles} onPress={logout}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Logout</Text>
                </TouchableOpacity>
            </View>
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