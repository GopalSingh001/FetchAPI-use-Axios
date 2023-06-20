/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
 
import {
   Text,
  View,
} from 'react-native';
import Axios from './components/Axios';
import APIs from './components/APIs';

 
 

 
function App(): JSX.Element {
 

 

  return (
    <View>
{/* <Axios/> */}
 <APIs/>
    </View>
  );
}
 

export default App;
