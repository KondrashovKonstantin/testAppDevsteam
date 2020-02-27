import React from 'react'
import Card from './Card'
import { TouchableHighlight, Text, View, Platform, ScrollView, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { setPhotos, getPhotos, toggleIsFetching } from '../../redux/photosReducer';


class ViewPage extends React.Component {


    componentDidMount() {
        this.props.getPhotos(this.props.page);
    }


    render() {
        let cardsArray = this.props.photos.map(currentItem =>
            <TouchableHighlight key={currentItem.id} onPress={() => this.props.navigation.navigate('Fullsize',{source:currentItem.urls.full, width: currentItem.width, height:currentItem.height})}>
                <View>
                    <Card  fullname={currentItem.user.name} source={currentItem.urls.small}  />
                </View>
            </TouchableHighlight>
        )
        return (
            <ScrollView>
                <View style={{ marginTop: Platform.OS === 'android' ? 30 : 0, }}>
                    {cardsArray}
                    <View style={{ margin: 15 }}>
                        {this.props.isFetching === false ?
                            <Button onPress={() => { this.props.getPhotos(this.props.page) }} title='Show More' color='black' /> :
                            <ActivityIndicator size="large" color="black" />
                        }
                    </View>
                </View>
            </ScrollView>

        )
    }
}

let mapStateToProps = (state) => {
    return { 
        photos: state.photosReducer.photos, 
        page: state.photosReducer.currentPage,
        isFetching: state.photosReducer.isFetching
    }
}

export default connect(mapStateToProps, {setPhotos, getPhotos})(ViewPage)
