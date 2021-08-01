import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView} from 'react-native'

// export default function PostCard(props) {
//     return (
//         <View>
//             <Text style={{ color: '#1E88E5', textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>{props.userHandle}</Text>
//             <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, }}/>
//             <Text style={{ textAlign: 'center', fontWeight: 'bold'}}>{props.content}</Text>
//             <View style={{ padding: 20}}></View>
//         </View>
//     )
// }

export default function PostCard(props) {
    return (
        <>
            <SafeAreaView>
                <ScrollView scrollEnabled={true}  contentContainerStyle={{ flexGrow: 1}}>
                    <View style={styles.mainCardView}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{marginLeft: 12}}>
                                <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    fontWeight: 'bold',
                                    textTransform: 'capitalize',
                                }}>
                                {props.userHandle}:
                                </Text>
                                <View
                                style={{
                                    marginTop: 4,
                                    borderWidth: 0,
                                    width: '100%',
                                }}>
                                <Text
                                    style={{
                                    color: 'gray',
                                    fontSize: 20,
                                    }}>
                                    {props.content}
                                </Text>
                                </View>
                            </View>
                            </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    mainCardView: {
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 15,
      shadowColor: 'gray',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 14,
      marginTop: 6,
      marginBottom: 6,
      marginLeft: 16,
      marginRight: 16,
    },
  });