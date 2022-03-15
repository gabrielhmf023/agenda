import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Alert,
  Button as B,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

export default ({route, navigation}) => {
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [company, setCompany] = useState('');

  let [codCountry, setCodCountry] = useState('');
  let [codArea, setCodArea] = useState('');
  let [numPhone, setNumPhone] = useState('');
  let [descPhone, setDescPhone] = useState('');

  let [codCountry2, setCodCountry2] = useState('');
  let [codArea2, setCodArea2] = useState('');
  let [numPhone2, setNumPhone2] = useState('');
  let [descPhone2, setDescPhone2] = useState('');

  let [street, setStreet] = useState('');
  let [numberStreet, setNumberStreet] = useState('');
  let [state, setState] = useState('');
  let [city, setCity] = useState('');
  let [tipoAddress, setTipoAddress] = useState('');

  let [street2, setStreet2] = useState('');
  let [numberStreet2, setNumberStreet2] = useState('');
  let [state2, setState2] = useState('');
  let [city2, setCity2] = useState('');
  let [tipoAddress2, setTipoAddress2] = useState('');

  const sendPeople = () => {
    axios
      .post('http://10.0.2.2:8080/people', {
        firstName: firstName,
        lastName: lastName,
        company: company,
        listPhones: [
          {
            codCountry: codCountry,
            codArea: codArea,
            numPhone: numPhone,
            typePhone: {
              id: descPhone,
            },
          },
          {
            codCountry: codCountry2,
            codArea: codArea2,
            numPhone: numPhone2,
            typePhone: {
              id: descPhone2,
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
          {
            street: street2,
            numberStreet: numberStreet2,
            state: state2,
            city: city2,
            typeAddress: {
              id: tipoAddress2,
            },
          },
        ],
      })
      .then(function (resposta) {
        Alert.alert('Salvar contato', 'Contato salvo com sucesso !');
      })
      .catch(function (error) {
        Alert.alert('Salvar contato', 'Erro ao salvar o contato.');
      });
  };

  return (
    <ScrollView>
      <View style={style.form}>
        <Text style={style.campo}>Name</Text>
        <TextInput
          style={style.input}
          onChangeText={text => {
            setFirstName(text);
          }}
          value={firstName}
        />

        <Text style={style.campo}>Last Name</Text>
        <TextInput
          style={style.input}
          onChangeText={text => {
            setLastName(text);
          }}
          value={lastName}
        />

        <Text style={style.campo}>Company</Text>
        <TextInput
          style={style.input}
          onChangeText={text => {
            setCompany(text);
          }}
          value={company}
        />

        <Text style={style.campo}>Phone's</Text>
        <View>
          <View style={style.espaco} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={style.inputCodPhone}
            placeholder="DDI"
            onChangeText={text => setCodCountry(text)}
            value={codCountry}
          />
          <TextInput
            style={style.inputCodAreaPhone}
            placeholder="DDD"
            onChangeText={text => setCodArea(text)}
            value={codArea}
          />
          <TextInput
            style={style.inputPhone}
            placeholder="Phone number"
            onChangeText={text => setNumPhone(text)}
            value={numPhone}
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

        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={style.inputCodPhone}
            placeholder="DDI"
            onChangeText={text => setCodCountry2(text)}
            value={codCountry2}
          />
          <TextInput
            style={style.inputCodAreaPhone}
            placeholder="DDD"
            onChangeText={text => setCodArea2(text)}
            value={codArea2}
          />
          <TextInput
            style={style.inputPhone}
            placeholder="Phone number"
            onChangeText={text => setNumPhone2(text)}
            value={numPhone2}
          />
        </View>
        <View style={style.typePhone}>
          <Picker
            selectedValue={descPhone2}
            onValueChange={value => setDescPhone2(value)}>
            <Picker.Item label="Mobile" value="1" />
            <Picker.Item label="Home" value="2" />
            <Picker.Item label="Work" value="3" />
            <Picker.Item label="Home Fax" value="4" />
            <Picker.Item label="Work Fax" value="5" />
          </Picker>
        </View>

        <Text style={style.campo}>Address's</Text>
        <View>
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
            value={numberStreet}
          />
          <TextInput
            style={style.inputCodAreaPhone}
            placeholder="State"
            onChangeText={text => setState(text)}
            value={state}
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

        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={style.inputPhone}
            placeholder="Street"
            onChangeText={text => setStreet2(text)}
            value={street2}
          />
          <TextInput
            style={style.inputCodAreaPhone}
            placeholder="Nº"
            onChangeText={text => setNumberStreet2(text)}
            value={numberStreet2}
          />
          <TextInput
            style={style.inputCodAreaPhone}
            placeholder="State"
            onChangeText={text => setState2(text)}
            value={state2}
          />
          <TextInput
            style={style.inputCity}
            placeholder="City"
            onChangeText={text => setCity2(text)}
            value={city2}
          />
        </View>
        <View style={style.typePhone}>
          <Picker
            selectedValue={tipoAddress2}
            onValueChange={value => setTipoAddress2(value)}>
            <Picker.Item label="Home" value="1" />
            <Picker.Item label="Work" value="2" />
          </Picker>
        </View>

        <View style={style.espaco} />

        <View>
          <B
            title="Salvar"
            onPress={() => {
              sendPeople();
              navigation.goBack();
            }}
            color="orange"
          />
        </View>
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
  campo: {
    fontSize: 20,
    color: 'gray',
  },
  buttonAddPhone: {
    position: 'absolute',
    left: 340,
    top: 285,
  },
  buttonAddAddress: {
    position: 'absolute',
    left: 340,
    top: 360,
  },
  buttonSave: {
    position: 'absolute',
    backgroundColor: 'orange',
    width: '80%',
    alignContent: 'center',
    top: 430,
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
});
