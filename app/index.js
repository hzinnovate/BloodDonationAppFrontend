import React from 'react';
import MainSwitch from './Config/navigator'
import {Provider} from 'react-redux';
import { store, persistor } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react'
import { StyleSheet, View , Text} from 'react-native';

export default function Main() {
  return (
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
       <MainSwitch />
       </PersistGate>
    </Provider>
  );
}
// export default function Main(){
    // return(
        // <View>
            // <Text>Hello</Text>
        // </View>
    // )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
