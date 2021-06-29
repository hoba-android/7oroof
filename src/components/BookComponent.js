import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

const BookComponent = ({book}) => {
   
    return (
        <View style={styles.main}>
           <Image
           source = {book.imgUrl}
           style={styles.img}
           />
           <View>
               <Text style={styles.title}>{book.title}</Text>
               <Text style={styles.subtitle}>Number of pages: {book.pages}</Text>
           </View>
        </View>
    )
}

export default BookComponent

const styles = StyleSheet.create({
    main: {
       
        width: 500,
        backgroundColor: 'white',
      flexDirection: 'row',
      padding: 10, 
      marginTop: 10
     

    },
    img: {
        width: 70,
        height: 90,
        resizeMode:'stretch',
        borderRadius: 10,
        marginRight: 10,        
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        fontSize: 12,
        color:'grey'
    }

})
