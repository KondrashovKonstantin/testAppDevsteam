import React from 'react'
import {View, Image, Dimensions} from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom';



const DetailsPage = (props) => {
    let ratio = props.route.params.width/props.route.params.height
    const wdth = Dimensions.get('screen').width
    const hght = Dimensions.get('screen').height
    return (
        <View style={{flex:1, justifyContent: "center"}}>
               <ImageZoom cropWidth={wdth}
               cropHeight={hght}
               imageWidth={wdth}
               imageHeight={wdth/ratio}>
                    <Image source={{uri:props.route.params.source}} style={{width: wdth, height: wdth/ratio}} />
               </ImageZoom> 
               </View>
    )
}

export default DetailsPage