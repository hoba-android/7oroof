import React from 'react'
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Intro = () => {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image 
            source ={require('../../assets/cr.png')}
            style={{width: 250, height: 300, resizeMode: 'contain', alignSelf:'center'}}
            />

            <Text style={styles.title}>Keep reading</Text>
            <Text style={styles.title}>You'll fall in love</Text>
            <Text style={styles.text}>A library of bite-sized ebooks and audiobooks on too many subjects and categories</Text>
            <TouchableOpacity style={styles.circleButton}>
            <Ionicons name="arrow-forward" size={38} color="white" />
            </TouchableOpacity>

        </View>
    )
}

export default Intro

const styles = StyleSheet.create({
    title:{
        fontSize: 40,
        alignSelf: 'center',
        fontWeight: 'bold'
    }, 
    text: {
        fontSize: 16,
       
        paddingHorizontal: 40,
        textAlign: 'center',
        paddingTop: 10,
    },
    circleButton: {
       width: 60,
       height: 60,
       borderRadius: 30,
       backgroundColor: '#0F18C6',
       marginTop: 35,
       alignItems: 'center',
       justifyContent: 'center'
    },
})
