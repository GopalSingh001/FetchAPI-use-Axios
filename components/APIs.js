import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Btn from './Btn';
import axios from 'axios';
const APIs = () => {
  const [data, setData] = useState([]);

  const baseURL = "https://jsonplaceholder.typicode.com"
  const getAPI = () => {
    axios({
      method: "GET",
      url: `${baseURL}/posts`
    }).then(res => setData(res.data)).catch(err => console.log(err))
  }

  const postAPI=()=>{
    axios({
      method:'POST',
      url:`${baseURL}/posts`,
    body:JSON.stringify({
      id:101,
      title:'this is my title',
      body:'this is my new body ....'
    })
    }).then((res)=>console.log(res)).catch(err=>console.log(err))
  }

  const patchAPI=()=>{
  axios({
    method:"PATCH",
    url:`${baseURL}/posts/20`,
    body:JSON.stringify({
      title:'Gopal Singh',
    })
  }).then(res=>console.log(res)).catch(err=>console.log(err))
  }

  const deleteAPI=()=>{
    axios({
      method:"DELETE",
      url:`${baseURL}/posts/20`
    }).then(res=>console.log(res)).catch(err=>console.log(err))

  }
  return (
    <View>
      <Text style={styles.header}>
        APIs
      </Text>

      <View style={{
        flexDirection:'row',
         gap:20,
          marginStart:35,
          flexWrap:'wrap'
         
      }}>
        

        <Btn title="GET" Press={getAPI} />
      <Btn title="POST" Press={postAPI} />


      <Btn title="PATCH" Press={patchAPI} />
      <Btn title="DELETE" Press={deleteAPI} />


      </View>
      <FlatList
        style={{
          marginBottom: 280
        }}
        data={data}
        ListEmptyComponent={() => (<Text
          style={{
            fontSize: 40,
            color: 'black',
            textAlign: 'center',

          }}>
          No Data
        </Text>
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <View style={{
          paddingHorizontal: 10,
          borderBottomColor: 'gray',
          borderWidth: 1,
          paddingBottom: 10,
          paddingTop: 10

        }}>
          <Text style={{
            fontSize: 22, color: 'black'
          }}>
            <Text style={{
              color: 'green'
            }}> Id:</Text>{item.id}</Text>


          <Text style={{
            fontSize: 22, color: 'black'
          }}
            numberOfLines={1}>
            <Text style={{
              color: 'orange'
            }}> Title:</Text> {item.title}</Text>


          <Text style={{
            fontSize: 22, color: 'black'
          }}
            numberOfLines={1}>
            <Text style={{
              color: ''
            }}> Body:</Text>{item.body}</Text>
        </View>}
      />

    </View>
  );
}
const styles = StyleSheet.create({

  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default APIs;
