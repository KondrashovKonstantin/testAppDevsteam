import React from 'react'
import Card from './Card'
import {View, Platform, ScrollView, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { setPhotos, getPhotos, toggleIsFetching } from '../../redux/photosReducer';


class ViewPage extends React.Component {


    componentDidMount() {
        this.props.getPhotos(this.props.page);
    }


    render() {
        let cardsArray = this.props.photos.map(currentItem =>
                    <Card 
                    key={currentItem.id} 
                    fullname={currentItem.user.name} 
                    sourceSmall={currentItem.urls.small} 
                    sourceFull={currentItem.urls.full}  
                    width={currentItem.width} 
                    height={currentItem.height}
                    navigation={this.props.navigation} />
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
