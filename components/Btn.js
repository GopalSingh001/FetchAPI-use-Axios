import React from 'react';
import { TouchableOpacity, Text,View } from 'react-native';

const Btn = ({title,Press}) => {
  return (
    <View style={{
        
         
         
        
    }}>
      <TouchableOpacity 
      style={{
        width:150,
        backgroundColor:'black',
        borderRadius:10,
        alignItems:'center',
         
        paddingVertical:10,
        // marginVertical:20
      }}
      onPress={Press}
      >
        <Text style={{fontSize:18,color:'white'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Btn;
