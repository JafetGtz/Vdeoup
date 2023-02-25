import React, { useEffect, useState } from 'react'


import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'

import { CameraRoll } from '@react-native-camera-roll/camera-roll'
const { width } = Dimensions.get('window');
const ITEM_MARGIN = 5;


const Gallery = () => {
    const [albumList, setAlbumList] = useState([])
    const [imageList, setImageList] = useState([])

    useEffect(() => {
        getAlbums();
    }, [])

    const getAlbums = async () => {
        const result = await CameraRoll.getAlbums({ assetType: 'Photos' })
        console.log(result, 'albunes')
        setAlbumList(result)
        getPhotosByAlbum(result[0].title)
    }

    const getPhotosByAlbum = async (albumName) => {
        const result = await CameraRoll.getPhotos({
            first: 10,
            groupName: albumName,
            assetType: 'Photos',
            include: ['fileSize', 'filename', 'imageSize', 'location']

        })
        const list = []
        result.edges.forEach((item) => {
            list.push(item.node.image.uri)
        })
        console.log(list)
        setImageList(list)
    }

    const renderPhotos = () => {
        return imageList.length > 0 && imageList.map((item, index) => (
            <Image
                source={{ uri: item }}
                style={{ width: (width / 4) , height: 150, margin: ITEM_MARGIN }}
                key={index}
            />
        ));
    };


    

    return (

        <View style={{ padding: 20, alignItems: 'center', flex: 1, backgroundColor: 'black' }}>
            <View style={{  width: '90%', flexDirection: 'row', justifyContent: 'space-around' }}>
            {albumList.map((item, index) => {
          return (
            <TouchableOpacity    key={index} onPress={() => {
              getPhotosByAlbum(item.title)
            }} style={{ marginBottom: 10, }}>
              <Text style={{  color: 'white' }}> {item.title} </Text>
            </TouchableOpacity>
          )
        })}
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <ScrollView contentContainerStyle={{ padding: ITEM_MARGIN }} showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{renderPhotos()}</View>
                </ScrollView>
            </View>
        </View>

    )
}



export default Gallery