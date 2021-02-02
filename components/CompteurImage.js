import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, View, Text} from 'react-native';

export default class CompteurImage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {cpt:0};
    }
    getImage(){
        return this.props.pathImage;
    }
    logHello(){
        console.log("bonjour");
    }
    add(){
      this.state.cpt++;
    }
    render(){
        return <TouchableOpacity 
          onPress={() => this.add()}
        >
          <View>
            <Image source={this.getImage()} style={styles.image}/>
            <Text style={styles.text}>Compteur : {this.state.cpt}</Text>
          </View>
        </TouchableOpacity>;
    }
}

const styles = StyleSheet.create({
    view: {
      position: 'absolute',
      backgroundColor: 'transparent'
    },
    image: {
        height:100,
        width:100
    },
    touchable: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      },
    text: {
      fontSize: 18,
      textAlign: 'center'
    }
  })