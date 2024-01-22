import { View, Text, FlatList, ScrollView, Image, StyleSheet} from 'react-native'
import React from 'react'
import DATA from '../DATA'
// import DATA from '../DATA'
// import { useEffect, useState } from 'react'

export default function Rumah_Sakit() {
//menampilkan daftar data puskesmas 
    // console.log(DATA)
    const FilteredByCategory = DATA.filter((DataArray) => DataArray.Kategori == "Rumah_Sakit")
    console.log(FilteredByCategory)


        
  return (
    <ScrollView>
     <View style={styles.iconMenu}>
            <Image
              source={require("../assets/rs.png")}
              style={{ width: 70, height: 70 }}
            />
          </View>
      {FilteredByCategory.map((DataArray, index)=>{
        return(
            <View style={styles.item} key={index}>
                <Text>Nama: {DataArray.Nama}</Text>
                <Text>Alamat: {DataArray.Alamat}</Text>
                {/* <Image source={{uri : DataArray.Gambar }}/> */}
                <Text>latitude: {DataArray.latitude}</Text>
                <Text>longitude: {DataArray.longitude}</Text>
            </View>
        )
      })}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  iconMenu:{
    justifyContent : "center",
    alignContent : "center",
    alignItems : "center",
    padding : 20
},
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor : "#D3D3D3",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
  // Add more styles for your image here
});