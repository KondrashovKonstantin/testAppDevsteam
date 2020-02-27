import React from 'react'
import {View, Image, Dimensions} from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom';



const DetailsPage = (props) => {
    let res = props.route.params.width/props.route.params.height

    return (
        <View style={{flex:1, justifyContent: "center"}}>
               <ImageZoom cropWidth={Dimensions.get('screen').width}
               cropHeight={Dimensions.get('screen').height}
               imageWidth={Dimensions.get('screen').width}
               imageHeight={Dimensions.get('screen').width/res}>
                    <Image source={{uri:props.route.params.source}} style={{width: Dimensions.get('screen').width, height: Dimensions.get('screen').width/res}} />
               </ImageZoom> 
               </View>
    )
}

export default DetailsPage