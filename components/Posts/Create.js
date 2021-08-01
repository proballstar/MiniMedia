import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput, HelperText, Headline } from 'react-native-paper'
import Constants from 'expo-constants'
import firebase from 'firebase'
import { SvgXml } from 'react-native-svg'
import CameraSVG from '../SVG/camera.svg.js'

export default function Create() {

    async function createPost() {
        
        let res = await firebase.firestore().collection('Users').doc(firebase.auth().currentUser.uid).get()
        setUserHandle(res.data().userHandle)
        await firebase.firestore().collection('PostCollection').doc('PostDocument')
            .update({
                Post: firebase.firestore.FieldValue.arrayUnion({ userHandle: 'Connie Made', content: postText, uid: firebase.auth().currentUser.uid, likes: 0})
            })
       
    }

    const [ postText, setPostText ] = useState('')
    const [ currentData, setCurrentData ] = useState([])
    const [ userHandle ,setUserHandle ] = useState('')
    const [ responceData, setResponceData] = useState()

    return (
        <View>
            <View style={styles.statBar}/>
            <Text style={styles.header}>Create a new Post</Text>
            <View style={{ padding: 20 }}></View>
                
            <View style={styles.midDistance}></View>

            <View style={styles.center}>

                <Text style={styles.helpText}>Content:</Text>

                <TextInput id="fname" style={styles.inputs} onChangeText={text => setPostText(text)} value={postText}/>
                
            </View>
            
            <View style={{ padding: 20}}></View>

            <TouchableOpacity style={styles.buttonStyles} onPress={createPost}>
                <Text style={{ textAlign: 'center' }}>
                    Create Post
                </Text>
            </TouchableOpacity>
            
            <View style={{ padding: 40}}></View>

            <SvgXml xml={CameraSVG} width="400px" height="250px"/>
        </View>
    )
    
}
const styles = StyleSheet.create({
    helpText: { fontWeight: 'bold', fontSize: 20},
    inputs: { width: 350, height: 100},
    center: { paddingLeft: 40},
    midDistance: { padding: 10},
    header: { color: '#1E88E5', textAlign: 'center', fontSize: 24, fontWeight: 'bold' },
    statBar: { padding: Constants.statusBarHeight },
    buttonStyles: { backgroundColor: '#1E88E5', padding: 20, width: 350, borderRadius: 15, textAlign: 'center', marginLeft: 40}
})