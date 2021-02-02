import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Produit from './components/Produit';
import ProduitElement from './components/ProduitElement';
import Header from './components/Header';

export default function App() {
  const produits = [[new Produit("cassoulet", 2.50), new Date("02/01/2021"), "8h33"],
                    [new Produit("Pâtes", 0.75), new Date("01/31/2021"), "8h20"],
                    [new Produit("Raviolis", 2.33), new Date("01/31/2021"), "8h25"],
                    [new Produit("Oeufs", 2.0), new Date("01/31/2021"), "8h25"],
                    [new Produit("Patates", 3), new Date("01/31/2021"), "8h26"],
                    [new Produit("Orange", 1.70), new Date("01/31/2021"), "8h27"],
                    [new Produit("Tomates", 1.50), new Date("01/31/2021"), "8h28"],
                    [new Produit("Emmental", 1.70), new Date("01/31/2021"), "8h29"],
                    [new Produit("Chocolat", 3.50), new Date("01/31/2021"), "8h30"],
                    [new Produit("Farine", 3), new Date("01/31/2021"), "8h30"],
                    [new Produit("Blé", 3), new Date("01/31/2021"), "8h30"]];
  /*{produits.map((element, index) => {
              return <ProduitElement key={index} produit={element[0]} date={element[1]} heure={element[2]}></ProduitElement>
            })}*/
  const item = ({ item, onPress, style }) => (
    <ProduitElement key={index} produit={item[0]} date={item[1]} heure={item[2]}
    onPress={onPress}
    style={style}></ProduitElement>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item[0] === selectedItem ? "blue" : "orange";
    console.log(backgroundColor)
    return (
      <ProduitElement key={item[0]} produit={item[0]} date={item[1]} heure={item[2]}
      onPress={() => setSelectedItem(item[0])}
      style={{ backgroundColor }}></ProduitElement>
    );
  };

  function setSelectedItem(item){
    selectedItem = item;
  }

  let selectedItem = null;

  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.containerElements}>
          <TouchableOpacity style={styles.scanButton} onPress={()=> console.log("scan")}>
              <Text>Scanner</Text>
          </TouchableOpacity>
          <FlatList style={styles.scrollView} data={produits} renderItem={renderItem} keyExtractor={item[0]} extraData={selectedItem}>
            
          </FlatList>
      </View>
      
    </View>
  );
}
 
const styles = StyleSheet.create({
  generaleView:{justifyContent:"center"},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    flexWrap:'wrap'
  },
  scrollView: {
    
  },
  containerElements: {
    flex: 1,
    display:'flex',
    backgroundColor: 'grey',
    flexDirection:'column',
    alignItems:'center'
  },
  scanButton: {
    backgroundColor: 'lightgrey',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:20,
    borderWidth:1
  },
  text: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold'
  }
});