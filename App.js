import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import CarItem from './components/carItem';
import CarList from './components/carsList';
import Header from './components/header';


export default function App() {
  return (
    <View style={styles.container}>

      {/* <CarItem name='Model X'
        title='Starting at $64,000'
        image={require('./assets/images/ModelY.jpeg')}
      >
      </CarItem> */}
      <Header></Header>
      <CarList></CarList>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
