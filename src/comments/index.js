import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import SwipeModalUpDown from 'react-native-swipe-modal-up-down';
import { Feather, FontAwesome5, Ionicons, FontAwesome } from '@expo/vector-icons'


export const Comentarios = () => {
  const [mostrarModal, setMostrarModal] = useState(true);
  const [comentarios, setComentarios] = useState([
    {
      id: 1,
      autor: 'Usuario 1',
      texto: '¡Muy buen video!',
    },
    {
      id: 2,
      autor: 'Usuario 2',
      texto: 'Excelente explicación',
    },
  ]);
  const [nuevoComentario, setNuevoComentario] = useState('');

  const toggleModal = () => {
    setMostrarModal(!mostrarModal);
  };

  const handleSubmit = () => {
    if (nuevoComentario.trim() === '') {
      return;
    }
    const id = comentarios.length + 1;
    const nuevoComentarioObj = {
      id,
      autor: 'Nuevo usuario',
      texto: nuevoComentario,
    };
    setComentarios([...comentarios, nuevoComentarioObj]);
    setNuevoComentario('');
  };

  return (
    <View style={styles.contenedor}>
      <TouchableOpacity onPress={toggleModal}>
        <FontAwesome name="comment-o" size={30} color="#555" />
        <Text style={styles.texto}>Ver comentarios</Text>
      </TouchableOpacity>
      <SwipeModalUpDown
        isVisible={mostrarModal}
        modalContent={
          <View style={styles.modal}>
            <FlatList
              data={comentarios}
              renderItem={({ item }) => (
                <View style={styles.comentario}>
                  <Text style={styles.autor}>{item.autor}</Text>
                  <Text style={styles.textoComentario}>{item.texto}</Text>
                  <TouchableOpacity>
                    <Text style={styles.respuesta}>Responder</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            <View style={styles.formulario}>
              <Text style={styles.tituloFormulario}>Añadir comentario</Text>
              <TextInput
                style={styles.input}
                onChangeText={setNuevoComentario}
                value={nuevoComentario}
                placeholder="Escribe aquí tu comentario"
              />
              <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
                <Text style={styles.textoBoton}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        onSwipeOut={toggleModal}
        onBackdropPress={toggleModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    contenedor: {
      alignItems: 'center',
    },
    texto: {
      color: '#555',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 5,
    },
    modal: {
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      maxHeight: '80%',
    },
    comentario: {
      marginBottom: 10,
    },
    autor: {
      fontWeight: 'bold',
    },
    textoComentario: {
      marginTop: 5,
    },
    respuesta: {
      color: '#428bca',
      marginTop: 5,
    },
    formulario: {
      marginTop: 10,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      paddingTop: 10,
    },
    tituloFormulario: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    input: {
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    boton: {
      backgroundColor: '#428bca',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignSelf: 'flex-end',
    },
    textoBoton: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  