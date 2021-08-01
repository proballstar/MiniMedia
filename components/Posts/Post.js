import React, {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import PostCard from './PostCard'
import Constants from 'expo-constants'
import firebase from 'firebase'

export default function Post() {
    const [ Result, setResult ] = useState([])

    firebase.firestore().collection('PostCollection').doc('PostDocument')
        .get()
        .then(doc => doc.data())
        .then(data => setResult(data.Post))
    return (
        <View>
           <SafeAreaView>
           <ScrollView scrollEnabled={true}  contentContainerStyle={{ flexGrow: 1}}>
               <View style={styles.statBar}></View>
               {Result.map((item, key) => {
                        return (
                            <PostCard userHandle={item.userHandle} content={item.content} likes={item.likes}/>
                        )
                        })}
            </ScrollView>            
            </SafeAreaView>
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

//<

