import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';

export default ({route, navigation}) => {
  let [people] = useState(route.params ? route.params : {});
  let [phones] = useState(
    route.params.listPhones ? route.params.listPhones : {},
  );
  let [address] = useState(
    route.params.listAddress ? route.params.listAddress : {},
  );

  function getPhoneUser({item: phone}) {
    return (
      <ListItem key={phone.id} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{phone.typePhone.descPhone}</ListItem.Title>
          <ListItem.Subtitle>
            {phone.codCountry} {phone.codArea} {phone.numPhone}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }

  function getAddressUser({item: address}) {
    return (
      <ListItem key={address.id} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{address.typeAddress.typeAddress}</ListItem.Title>
          <ListItem.Subtitle>
            {address.street} {address.numberStreet} {address.state}{' '}
            {address.city}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }

  return (
    <ScrollView>
      <View style={style.form}>
        <Text style={style.campo}>Name</Text>
        <Text style={style.info}>{people.firstName}</Text>

        <Text style={style.campo}>Last Name</Text>
        <Text style={style.info}>{people.lastName}</Text>

        <Text style={style.campo}>Company</Text>
        <Text style={style.info}>{people.company}</Text>

        <View style={style.espaco} />

        <Text style={style.campo}>
          <Icon name="phone" size={25} color="orange" /> Phone's List
        </Text>
        <View>
          <FlatList
            keyExtractor={phone => phone.id.toString()}
            data={phones}
            renderItem={getPhoneUser}
          />
          <View style={style.espaco} />
        </View>

        <Text style={style.campo}>
          <Icon name="home" size={25} color="orange" /> Addres's List
        </Text>

        <View>
          <FlatList
            keyExtractor={address => address.id.toString()}
            data={address}
            renderItem={getAddressUser}
          />
          <View style={style.espaco} />
        </View>

        <View style={style.espaco} />

        <Button
          title="Fechar"
          onPress={() => {
            navigation.goBack();
          }}
          color="orange"
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  form: {
    padding: 20,
  },
  espaco: {
    padding: 20,
  },
  campo: {
    fontSize: 25,
    color: 'black',
  },
  info: {
    fontSize: 20,
    color: 'gray',
  },
  phones: {
    padding: 10,
    borderColor: 'black',
    borderRadius: 1,
  },
});
