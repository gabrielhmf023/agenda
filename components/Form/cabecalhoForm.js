import React from 'react';
import {View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export default (props, {route}) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.conteiner}>
        <Text style={styles.titulo}>Informações do Contato</Text>
        <View style={styles.buttonClose}>
          <Button
            onPress={() =>
              Alert.alert('Descartar', 'Deseja descartar as mudanças ?', [
                {
                  text: 'Sim',
                  onPress: () => {
                    navigation.navigate('Home');
                  },
                },
                {
                  text: 'Não',
                },
              ])
            }
            type="clear"
            icon={<Icon name="close" size={25} color="white" />}
          />
        </View>
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
  buttonClose: {
    position: 'absolute',
    backgroundColor: 'orange',
    left: 300,
  },
  titulo: {
    color: 'white',
    fontSize: 25,
    textAlign: 'left',
  },
});
