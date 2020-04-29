/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// // import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';;
//
// const styles = StyleSheet.create({
//   map: {
//     height: '100%',
//     width: '100%',
//   },
// });

// function MapApp() {
//   return (
//     <MapView
//       provider={PROVIDER_GOOGLE}
//       style={styles.map}
//       initialRegion={{
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       }}
//     />
//   )
// }
// export default MapApp;

import * as React from 'react';
import { Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
export default class App extends React.Component {
  constructor() {
   super()
   this.state = {
     jsonData: []
   }
 }
  componentDidMount() {
    fetch('https://api.covid19api.com/summary', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          jsonData: json.Countries,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <ScrollView>
       <View style={{ paddingTop: 30 }}>
       {
        this.state.jsonData.map((item) => {
          return (
            <TouchableOpacity>
              <Text>Country: {item.Country}</Text>
              <Text>Confirmed cases: {item.TotalConfirmed}</Text>
              <Text>Deaths cases: {item.TotalDeaths}</Text>
              <Text>Recovered cases: {item.TotalRecovered}</Text>
            </TouchableOpacity>
          );
        })
      }
       </View>
      </ScrollView>
    );
  }
}
