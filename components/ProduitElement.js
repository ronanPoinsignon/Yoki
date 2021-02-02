import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from 'react';

export default class ProduitElement extends React.Component {
    constructor(props){
        super(props);
    }
    getTitre(){
        return this.props.produit ? this.props.produit.getNom() : "";
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
            <TouchableOpacity>
                <Text style={styles.titre}>{this.getTitre() + this.getPrix()}</Text>
                <Text style={styles.description}>{this.getDate()}</Text>
                <Text style={styles.description}>{this.getHeure()}</Text>
                <View style = {styles.lineStyle} />
            </TouchableOpacity>
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