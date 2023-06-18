import { View, Text, StyleSheet} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react'

const HeadSection = () => {
  return (
      <View style={styles.header}>
      <Text style = {styles.word}>Krishi Sahyoog</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    color: 'Green',
  },
  word: {
    padding: 0,
    fontSize: 25,
    color: '#0a8f06',
  }
})

export default HeadSection