import React from 'react'
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native'

const Card = (props) => {
    return (
        <>
            <View style={styles.cardWrapper}>
                <View>
                    <Image
                        style={styles.img}
                        source={{ uri: props.source }} 
                        />
                </View>
                <Text style={styles.lbl}>Author: <Text style={styles.authorName}>{props.fullname}</Text></Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: 'column',
        width: Dimensions.get('screen').width -20,
        height: Dimensions.get('screen').width + 30,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    img:{ 
        width: Dimensions.get('screen').width-40, 
        height: Dimensions.get('screen').width-40, 
        borderRadius: 20,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10
    },
    lbl:{
        fontWeight: "bold", 
        marginTop: 10,
        marginLeft: 15
    },
    authorName:{
        fontWeight: "normal"
    }

  });
  
export default Card