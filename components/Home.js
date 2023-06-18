import { View, Text, FlatList,StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect,useState,useEffect} from 'react'
import axios from 'axios';
import HeadSection from './HeadSection';

const Home = () => {
  const [data, setData] = useState([])
    const [uniqueChars, setUniqueChars] = useState([]);
    function getdata(commodity = "", limit = 500) {
        let url = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000019eaed1ae95144f925f630f26665d3a02&format=json';
        if (commodity !== "") {
            url = url + '&filters[commodity]=' + commodity;
        }
        if (limit) {
            url = url + '&limit=' + limit;
        }
        axios.get(url).then((res) => {
            setData(res.data.records);
            //   console.log(res.data.records);
        }).catch((err) => {
            console.log(err);
        }
        )
    }
    useEffect(() => {
        let uniquedata = [];
        let res = [];
        data.forEach((c) => {
            if (!uniquedata.includes(c.commodity)) {
                uniquedata.push(c.commodity);
                res.push(c);
            }
        });
        setUniqueChars(res);
        // console.log(res);
    }, [data]);

    useEffect(() => {
        getdata();
    }, [])

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [])
  
  return (
    <SafeAreaView>
      <HeadSection />
      <Text>Search</Text>
      <Text>Comodity Prices</Text>
      <FlatList
        data={uniqueChars}
        renderItem={({ item }) => (
          <View style = {styles.card}>
            <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{item.commodity}</Text>
            <Text>updated on {item.arrival_date}</Text>
            <Text style = {{marginTop: 5}}>Min Rs.{item.min_price} - Max Rs.{item.max_price}</Text>
            
          </View>
        )}
      />

    </SafeAreaView>
  )
}

styles = StyleSheet.create({
  card: { 
    backgroundColor: '#f0faed',
    padding: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default Home