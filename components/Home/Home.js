import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Contact from '../Contacts/Contact';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Contact />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
