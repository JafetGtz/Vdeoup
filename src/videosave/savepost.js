import { StackActions, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native'

let windowHeight = Dimensions.get('window').height
let windowWidth = Dimensions.get('window').height


import { Feather, FontAwesome5 } from '@expo/vector-icons'

export default function SavePostScreen(props) {
    const [description, setDescription] = useState('')
    const [requestRunning, setRequestRunning] = useState(false)
    const navigation = useNavigation()


    const handleSavePost = () => {

    }

    if (requestRunning) {
        return (
            <View style={styles.uploadingContainer}>
                <ActivityIndicator color='red' size='large' />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={{
                width: '100%', height: (windowHeight * 0.25),
                alignItems: 'center', justifyContent: 'center'
            }}>
                <Image
                    style={styles.mediaPreview}
                    source={{ uri: props.route.params.source }}
                />
            </View>

            <View style={styles.formContainer}>
                <View style={styles.containerd}>
                    <Text style={styles.label}>Titulo:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa un titulo"
                        placeholderTextColor="#A9A9A9"
                    />
                </View>
                <View style={styles.containerd}>
                    <Text style={styles.label}>Descripción:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa una descripción"
                        placeholderTextColor="#A9A9A9"
                    />
                </View>
                <View style={styles.containerd}>
                    <Text style={styles.label}>hashtag:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa hashtags"
                        placeholderTextColor="#A9A9A9"
                    />
                </View>
                

            </View>
            <View style={styles.spacer} />
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.cancelButton}>
                    <FontAwesome5 name="eraser" size={24} color="white" />
                    <Text style={styles.cancelButtonText}>borrador</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleSavePost()}
                    style={styles.postButton}>
                    <Feather name="corner-left-up" size={24} color="white" />
                    <Text style={styles.postButtonText}>Post</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: 'black'
    },
    uploadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    spacer: {
        flex: 1
    },
    formContainer: {
        margin: 20,
        flexDirection: 'column'
    },
    buttonsContainer: {
        flexDirection: 'row',
        margin: 20,
    },
    inputText: {
        paddingVertical: 10,
        marginRight: 20,
        flex: 1
    },
    mediaPreview: {
        aspectRatio: 9 / 16,
        backgroundColor: 'black',
        width: '60%',
        height: '100%'
    },
    cancelButton: {
        alignItems: 'center',
        flex: 1,
        borderColor: 'lightgray',
        borderWidth: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 4,
        marginRight: 10
    },
    postButton: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ff4040',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 4,
        marginRight: 10
    },
    cancelButtonText: {
        marginLeft: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    postButtonText: {
        marginLeft: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white'
    },
    input: {
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
    },
    containerd: {
        width: '90%',
        marginBottom: 20,
        alignSelf: 'center',
      },
});

