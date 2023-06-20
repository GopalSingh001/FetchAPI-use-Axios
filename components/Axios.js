import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
// import axios from 'axios';
const Axios = () => {
    const [data,setData]=useState('');
useEffect(()=>{
     Api();
    // addNewProduct();
},[])

// without use async await ...



/*
    const Api=()=>{
      axios.get('https://fakestoreapi.com/products/categories')
      .then(res=>{
        console.log(res.data);
      })
    }

    */

    // WITH async await 

    const Api=async () =>{
        const res=await axios.get('https://fakestoreapi.com/products/categories')
        console.log(res.data);
        setData(res.data)
    }


    // Add new Product use post method...


    /*
    const addNewProduct=async ()=>{
        const data={
            title:'test Product',
            price:20.3,
            description:'Nice Product',
            image:'https://i.pravatar.cc',
            category:'electronic',

        }

        const res=await axios.post('https://fakestoreapi.com/products',data);
        console.log('data',res.data);
    }

    */
  return (
    <View>
         {
            data.map((item)=>{
                return <View>
                    <Text style={{color:'orange',fontSize:20,textTransform:'capitalize',marginStart:7
        }}>{item}</Text>
                    </View>
            })
         }
    </View>
  );
}

export default Axios;
