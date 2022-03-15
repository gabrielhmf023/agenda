import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, FlatList, View, Alert} from 'react-native';
import {ListItem, Avatar, Icon, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

export default props => {
  let [contatos, setContatos] = useState([]);

  const navigation = useNavigation();

  //FUNCTIONS

  const deletePeople = people => {
    axios
      .delete(`http://10.0.2.2:8080/people/${people.id}`)
      .then(resposta => {
        Alert.alert('Excluir Contato', 'Contato excluído com sucesso!');
      })
      .catch(erro => {
        Alert.alert('Excluir Contato', 'Erro ao excluir o contato');
      });
  };

  function confirmPeopleDeletion(people) {
    Alert.alert('Excluir Contato', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          deletePeople(people);
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  useEffect(() => {
    axios
      .get('http://10.0.2.2:8080/people/')
      .then(resposta => {
        setContatos(resposta.data);
      })
      .catch(erro => {
        console.warn('Erro em fazer a conexão com o servidor');
      });
  }, []);

  function getUserItem({item: people}) {
    return (
      <ListItem
        key={people.id}
        bottomDivider
        onPress={() => {
          navigation.navigate('ContactInfo', people);
        }}>
        <Avatar
          source={{
            uri: 'https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_1280.png',
          }}
        />

        <ListItem.Content>
          <ListItem.Title>
            {people.firstName} {people.lastName}
          </ListItem.Title>

          <ListItem.Subtitle>{people.company}</ListItem.Subtitle>

          <ListItem.Content style={estilos.editButton}>
            <Button
              onPress={() => navigation.navigate('ContactForm', people)}
              type="clear"
              icon={<Icon name="edit" size={25} color="orange" />}
            />
          </ListItem.Content>
          <ListItem.Content style={estilos.deleteButton}>
            <Button
              onPress={() => confirmPeopleDeletion(people)}
              type="clear"
              icon={<Icon name="delete" size={25} color="red" />}
            />
          </ListItem.Content>
        </ListItem.Content>
      </ListItem>
    );
  }

  return (
    <ScrollView>
      <View>
        <View style={estilos.contatos}>
          <Icon name="people" size={25} color="white" />
        </View>
        <FlatList
          keyExtractor={people => people.id.toString()}
          data={contatos}
          renderItem={getUserItem}
        />
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  editButton: {
    position: 'absolute',
    display: 'flex',
    alignContent: 'flex-end',
    marginLeft: 240,
    marginBottom: 20,
  },
  deleteButton: {
    position: 'absolute',
    display: 'flex',
    alignContent: 'flex-end',
    marginLeft: 280,
    marginBottom: 20,
  },
  contatos: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'orange',
    textAlign: 'left',
  },
});
