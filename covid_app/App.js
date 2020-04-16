/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';;

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  },
});

function MapApp() {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  )
}
export default MapApp;
