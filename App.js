import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Produit from './components/Produit';
import ProduitElement from './components/ProduitElement';
import Header from './components/Header';
import CompteurImage from './components/CompteurImage';
import Formulaire from './components/calculator/Formulaire';
import HeaderCalculator from './components/calculator/HeaderCalculator';

export default function App() {
  const produits = [[new Produit("cassoulEt", 2.50), new Date("02/01/2021"), "8h33"],
                    [new Produit("Pâtes", 0.75), new Date("01/31/2021"), "8h20"],
                    [new Produit("Raviolis", 2.33), new Date("01/31/2021"), "8h25"],
                    [new Produit("Oeufs", 2.0), new Date("01/31/2021"), "8h25"],
                    [new Produit("PatATes", 3), new Date("01/31/2021"), "8h26"],
                    [new Produit("Orange", 1.70), new Date("01/31/2021"), "8h27"],
                    [new Produit("Tomates", 1.50), new Date("01/31/2021"), "8h28"],
                    [new Produit("Emmental", 1.70), new Date("01/31/2021"), "8h29"],
                    [new Produit("Chocolat", 3.50), new Date("01/31/2021"), "8h30"],
                    [new Produit("Farine", 3), new Date("01/31/2021"), "8h30"],
                    [new Produit("Blé", 3), new Date("01/31/2021"), "8h30"]];
  const item = ({ item, onPress, style }) => (
    <ProduitElement key={index} produit={item[0]} date={item[1]} heure={item[2]}
    onPress={onPress}
    style={style}></ProduitElement>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = selectedItem && item[0].getNom() === selectedItem[0].getNom() ? "red" : "pink";
    return (
      <TouchableOpacity onPress={() => setSelectedItem(item)}
      style={{ backgroundColor }}>
      <ProduitElement key={item} produit={item[0]} date={item[1]} heure={item[2]}></ProduitElement>
      </TouchableOpacity>
    );
  };

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <View style={styles.container}>
      <HeaderCalculator></HeaderCalculator>
      {Formulaire()}
    </View>
  );
}

/*
<View style={styles.containerElements}>
          <TouchableOpacity style={styles.scanButton} onPress={()=> console.log("scan")}>
              <Text>Scanner</Text>
          </TouchableOpacity>
          <FlatList style={styles.scrollView} data={produits} renderItem={renderItem} keyExtractor={item[0]} extraData={selectedItem}>
            
          </FlatList>
          <CompteurImage pathImage="./images/dab.jpg"></CompteurImage>

      </View>
*/
 
const styles = StyleSheet.create({
  generaleView:{justifyContent:"center"},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
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