import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default class Header extends React.Component {
    render(){
        return <SafeAreaView style={styles.header}>
            <Text style={styles.headerText}>Yoki</Text>
        </SafeAreaView>
    }
}

const styles = StyleSheet.create({
    headerText : {
      fontSize: 24, 
      textAlign: 'center',
      fontWeight: 'bold'
    },
    header: {
      backgroundColor: 'lightgrey',
      paddingTop: 45,
      paddingBottom: 10,
      borderBottomColor: 'grey',
      borderBottomWidth: 1
    },
});