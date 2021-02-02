import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { Profiler } from 'react';

export default class ProduitElement extends React.Component {
    constructor(props){
        super(props);
    }
    getTitre(){
        let prod = this.props.produit;
        if(prod){
            let nom = prod.getNom();
            nom = nom ? nom : "";
            nom = nom.toLowerCase();
            return nom[0].toUpperCase() + nom.substring(1);
        }
        return "";
    }
    getDate(){
        return this.props.date.getDate() ? "Acheté le " + this.props.date.toLocaleDateString() : "";
    }
    getHeure(){
        return this.props.heure ? "A " + this.props.heure : "";
    }
    getPrix() {
        return this.props.produit.getPrix() ? " (" + this.props.produit.getPrix() + "€)" : "";
    }
    render(){
        return <View>
                <Text style={styles.titre}>{this.getTitre() + this.getPrix()}</Text>
                <Text style={styles.description}>{this.getDate()}</Text>
                <Text style={styles.description}>{this.getHeure()}</Text>
                <View style = {styles.lineStyle} />
        </View>
    }
}

const styles = StyleSheet.create({
    titre: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
    },
    lineStyle:{
        borderWidth: 1,
        borderColor:'black',
   }
});