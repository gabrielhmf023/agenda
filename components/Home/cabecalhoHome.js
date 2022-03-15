import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export default props => {
  const navigation = useNavigation();

  return (
    <View style={styles.conteiner}>
      <View style={styles.buttonPhone}>
        <Icon name="phone" size={25} color="white" />
      </View>
      <Text style={styles.titulo}>Agenda</Text>
      <View style={styles.buttonSearch}>
        <Button
          onPress={() => {
            navigation.navigate('Search');
          }}
          type="clear"
          icon={<Icon name="search" size={25} color="white" />}
        />
      </View>
      <View style={styles.buttonAdd}>
        <Button
          onPress={() => {
            navigation.navigate('CreateContactForm');
          }}
          type="clear"
          icon={<Icon name="add" size={25} color="white" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: 'orange',
    alignContent: 'center',
    top: 5,
    left: 130,
  },
  buttonAdd: {
    position: 'absolute',
    left: 200,
  },
  buttonSearch: {
    position: 'absolute',
    left: 160,
  },
  buttonPhone: {
    position: 'absolute',
    backgroundColor: 'orange',
    right: 205,
    top: 10,
  },
  titulo: {
    color: 'white',
    fontSize: 30,
  },
});
