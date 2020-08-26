import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

function Home() {
  return (
    <View>
      <Text>HOME</Text>
    </View>
  );
}

Home.navigationOptions = {
  title: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={35} color={tintColor} />
  ),
};

export default Home;
