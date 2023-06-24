import { View, Text,StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import React, { useEffect,useState } from 'react'
// import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import axios from 'axios';

const Details = ({navigation,route}) => {
    const [data, setData] = useState([]);

    const { commodity } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: commodity
        });
    }, [navigation])

    function getdata(commodity = "", limit = 2000) {
        let url = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000019eaed1ae95144f925f630f26665d3a02&format=json';
        if (commodity !== "") {
          url = url + '&filters[commodity]=' + commodity;
        }
        if (limit > 0) {
          url = url + '&limit=' + limit;
        }
        axios.get(url).then((res) => {
          let records = res.data.records;
          setData(records);
        }).catch((err) => {
          console.log(err);
        }
        )
      }

    useEffect(() => {  
        getdata(commodity);
    }, [])

    return (
        <View>
            <Text>Details</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style = {styles.flexstyle}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.market}</Text>
                            <Text>Rs. {item.modal_price}/Quintal </Text>
                        </View>
                        <View style = {styles.flexstyle}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>20 Km away</Text>
                            <Text>updated on {item.arrival_date}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'space-between',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 5
    },
    flexstyle: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Details