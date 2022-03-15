import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default (props, {route}) => {
  return (
    <ScrollView>
      <View style={styles.conteiner}>
        <Text style={styles.titulo}>Pesquisar Contato</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: 'orange',
    alignContent: 'center',
    top: 5,
  },
  buttonSearch: {
    position: 'absolute',
    backgroundColor: 'orange',
    top: 20,
    left: 300,
  },
  titulo: {
    color: 'white',
    fontSize: 25,
    textAlign: 'left',
  },
});
