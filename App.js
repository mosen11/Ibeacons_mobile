import React, {Component} from 'react';

import { StyleSheet, Text, View } from 'react-native';

// import RNbeaconArticle from './src/components/RNbeaconArticle'


export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        {/*<RNbeaconArticle/>*/}
        <Text>Open up App.js to start working on your app! smnf Mosen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
