import { isMoment } from 'moment';
import React from 'react';
import {Provider} from 'react-redux'
import Store from './Store/configureStore'
import {  StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation/Navigation'
export default class App extends React.Component {


  render(){
  return (
    <View style={[styles.container, styles.horizontal]}>
          <Provider store={Store}>
          <Navigation/>
          </Provider>

    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal:{
    flexDirection : "row",
    justifyContent:"space-around",
    padding : 10
  }
});
