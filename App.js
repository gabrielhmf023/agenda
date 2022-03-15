import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './components/Home/Home';
import CabecalhoHome from './components/Home/cabecalhoHome';

import contactForm from './components/Form/contactForm';
import CabecalhoForm from './components/Form/cabecalhoForm';

import contactInfo from './components/Contacts/contactInfo';
import CabecalhoContact from './components/Contacts/cabecalhoContact';

import Search from './components/Search/search';
import CabecalhoSearch from './components/Search/CabecalhoSearch';

import createContactForm from './components/Form/createContactForm';

const Stack = createNativeStackNavigator();

export default props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerTitle: () => <CabecalhoHome />,
            headerStyle: {
              backgroundColor: 'orange',
            },
          }}
        />

        <Stack.Screen
          name="ContactForm"
          component={contactForm}
          options={{
            title: 'ContactForm',
            headerTitle: () => <CabecalhoForm />,
            headerStyle: {
              backgroundColor: 'orange',
            },
          }}
        />

        <Stack.Screen
          name="CreateContactForm"
          component={createContactForm}
          options={{
            title: 'CreateContactForm',
            headerTitle: () => <CabecalhoForm />,
            headerStyle: {
              backgroundColor: 'orange',
            },
          }}
        />

        <Stack.Screen
          name="ContactInfo"
          component={contactInfo}
          options={{
            title: 'ContactInfo',
            headerTitle: () => <CabecalhoContact />,
            headerStyle: {
              backgroundColor: 'orange',
            },
          }}
        />

        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: 'Pesquisar Contato',
            headerTitle: () => <CabecalhoSearch />,
            headerStyle: {
              backgroundColor: 'orange',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
