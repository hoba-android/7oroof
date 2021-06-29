import React from 'react'
import { StyleSheet, Text, View , Image, TouchableOpacity, FlatList} from 'react-native'
import BookComponent from '../components/BookComponent';
import Books from '../data/dummy'
import { Ionicons } from '@expo/vector-icons';

const BooksScreen = () => {
   
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
           <FlatList 
           data={Books}
           style={{marginTop: 20}}
           keyExtractor ={item => item.id}
           renderItem = {({item}) => {
               console.log(item)
               return(
                   <BookComponent 
                  
                   book = {item}
                   />
               )
           }}
           
           />

         

        </View>
    )
}

export default BooksScreen

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
