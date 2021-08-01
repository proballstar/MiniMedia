import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image,  } from 'react-native'
import { HelperText, Headline, TextInput } from 'react-native-paper'
import Constants from 'expo-constants'
import firebase from 'firebase'
import CameraSVG from '../SVG/camera.svg.js'
import { SvgXml } from 'react-native-svg'

export default function Register() {

    const [ fname, setFName ] = useState('')
    const [ lname, setLName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ passw, setPassw ] = useState('')


    function register() {
        
        console.log(` Mr/Mrs ${fname} ${lname} with secret email and passwords of ${email} and ${passw} respectively`)
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, passw)
          .then((result) => {
              firebase.firestore().collection('Users').doc(firebase.auth().currentUser.uid).set({
                  userHandle: `${fname} ${lname}`,
                  email: email,
                  uid: firebase.auth().currentUser.uid
              })
          })
    }


    return (
        <View>
            <View style={styles.statBar} ></View>

            <Text style={styles.header}>Register to let your voice be heard in Mini Media</Text>

            <View style={{ padding: 20 }}></View>

            <View>
                
            <View style={styles.midDistance}></View>

            <View style={styles.center}>

                <Text style={styles.helpText}>First Name:</Text>

                <TextInput id="fname" style={styles.inputs} onChangeText={text => setFName(text)} value={fname}/>
                
            </View>
            
            <View style={styles.midDistance}></View>

            <View style={styles.center}>

                <Text style={styles.helpText}>Last Name:</Text>

                <TextInput id="lname" style={styles.inputs} onChangeText={text => setLName(text)} value={lname} />

            </View>
            
            <View style={styles.midDistance}></View>

            <View style={styles.midDistance}></View>

            <View style={styles.center}>

                <Text style={styles.helpText}>Email Address: </Text>
                
                <TextInput id="email" style={styles.inputs} onChangeText={text => setEmail(text)} value={email} />

            </View>
            
            <View style={styles.midDistance}></View>

            <View style={styles.center}>

                <Text style={styles.helpText}>Password: </Text>
                
                <TextInput id="password" style={styles.inputs} onChangeText={text => setPassw(text)} value={passw} underlineColorAndroid='transparent'/>

            </View>

            <View style={{ padding: 20}}></View>

            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.buttonStyles} onPress={register}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <SvgXml xml={CameraSVG} width="450px"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    helpText: { fontWeight: 'bold', fontSize: 20},
    inputs: { width: 350 },
    center: { paddingLeft: 40},
    midDistance: { padding: 3},
    header: { color: '#1E88E5', textAlign: 'center', fontSize: 24, fontWeight: 'bold', justifyContent: 'center' },
    statBar: { padding: Constants.statusBarHeight },
    buttonStyles: { backgroundColor: '#1E88E5', padding: 20, width: 350, borderRadius: 15, textAlign: 'center'}
})

