import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

export default ({route, navigation}) => {
  let [people, setPeople] = useState(route.params ? route.params : {});

  let [phones] = useState(
    route.params.listPhones ? route.params.listPhones : {},
  );

  let [address] = useState(
    route.params.listAddress ? route.params.listAddress : {},
  );

  let [codCountry, setCodCountry] = useState(people.listPhones.codCountry);
  let [codArea, setCodArea] = useState(people.listPhones.codArea);
  let [numPhone, setNumPhone] = useState(people.listPhones.numPhone);
  let [descPhone, setDescPhone] = useState(descPhone);

  let [street, setStreet] = useState(people.listAddress.street);
  let [numberStreet, setNumberStreet] = useState(
    people.listAddress.numberStreet,
  );
  let [state, setState] = useState(people.listAddress.state);
  let [city, setCity] = useState(people.listAddress.city);
  let [tipoAddress, setTipoAddress] = useState(people.listAddress.typeAddress);

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

  const savePeople = () => {
    axios
      .post('http://10.0.2.2:8080/people', {
        id: people.id,
        firstName: people.firstName,
        lastName: people.lastName,
        company: people.company,
        listPhones: [
          {
            codCountry: codCountry,
            codArea: codArea,
            numPhone: numPhone,
            typePhone: {
              id: descPhone,
            },
          },
        ],
        listAddress: [
          {
            street: street,
            numberStreet: numberStreet,
            state: state,
            city: city,
            typeAddress: {
              id: tipoAddress,
            },
          },
        ],
      })
      .then(function (response) {
        Alert.alert('Salvar contato', 'Contato salvo com sucesso!');
      })
      .catch(function (error) {
        Alert.alert('Salvar contato', 'Não foi possível salvar o contato.');
      });
  };
  return (
    <ScrollView>
      <View style={style.form}>
        <Text style={style.campo}>Name</Text>
        <TextInput
          style={style.input}
          onChangeText={firstName => setPeople({...people, firstName})}
          value={people.firstName}
        />

        <Text style={style.campo}>Last Name</Text>
        <TextInput
          style={style.input}
          onChangeText={lastName => setPeople({...people, lastName})}
          value={people.lastName}
        />

        <Text style={style.campo}>Company</Text>
        <TextInput
          style={style.input}
          onChangeText={company => setPeople({...people, company})}
          value={people.company}
        />

        <Text style={style.campo}>Phone's List</Text>
        <View>
          <FlatList
            keyExtractor={phone => phone.id.toString()}
            data={phones}
            renderItem={getPhoneUser}
          />
          <View style={style.espaco} />
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={style.inputCodPhone}
              placeholder="DDI"
              onChangeText={text => setCodCountry(text)}
            />
            <TextInput
              style={style.inputCodAreaPhone}
              placeholder="DDD"
              onChangeText={text => setCodArea(text)}
            />
            <TextInput
              style={style.inputPhone}
              placeholder="Phone number"
              onChangeText={text => setNumPhone(text)}
            />
          </View>
          <View style={style.typePhone}>
            <Picker
              selectedValue={descPhone}
              onValueChange={value => setDescPhone(value)}>
              <Picker.Item label="Mobile" value="1" />
              <Picker.Item label="Home" value="2" />
              <Picker.Item label="Work" value="3" />
              <Picker.Item label="Home Fax" value="4" />
              <Picker.Item label="Work Fax" value="5" />
            </Picker>
          </View>
        </View>
        <Text style={style.campo}>Address</Text>
        <View>
          <FlatList
            keyExtractor={address => address.id.toString()}
            data={address}
            renderItem={getAddressUser}
          />
          <View style={style.espaco} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={style.inputPhone}
            placeholder="Street"
            onChangeText={text => setStreet(text)}
            value={street}
          />
          <TextInput
            style={style.inputCodAreaPhone}
            placeholder="Nº"
            onChangeText={text => setNumberStreet(text)}
          />
          <TextInput
            style={style.inputCodAreaPhone}
            placeholder="State"
            onChangeText={text => setState(text)}
          />
          <TextInput
            style={style.inputCity}
            placeholder="City"
            onChangeText={text => setCity(text)}
            value={city}
          />
        </View>
        <View style={style.typePhone}>
          <Picker
            selectedValue={tipoAddress}
            onValueChange={value => setTipoAddress(value)}>
            <Picker.Item label="Home" value="1" />
            <Picker.Item label="Work" value="2" />
          </Picker>
        </View>
        <Button
          title="Salvar"
          onPress={() => {
            savePeople(people);
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
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },
  campo: {
    fontSize: 20,
    color: 'gray',
  },
  typePhone: {
    width: '40%',
    color: 'gray',
  },
  inputCity: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '20%',
  },
  inputPhone: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '60%',
  },
  inputCodPhone: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '10%',
  },
  inputCodAreaPhone: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '10%',
  },
});
