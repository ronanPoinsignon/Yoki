import React, { useEffect, useState } from "react";
import {Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Formulaire() {

    const [sexe, setSexe] = useState("");
    const [taille, setTaille] = useState("");
    const [poids, setPoids] = useState("");
    const [etat, setEtat] = useState("");

    function calculerImc(sexe, taille, poids){
        console.log("taille/poids : " + taille, poids)
        try{
            return poids/(taille*taille)*10000;
        }
        catch(err){
            return "";
        }
    }
    function returnTextRes(imc){
        if(!imc){
            return "";
        }
        console.log(imc)
        if(imc < 18.5)
            return "maigreur";
        if(imc < 25)
            return "normal";
        if(imc < 30)
            return "surpoids";
        if(imc < 35)
            return "obésité sévère";
        return "obesité mobide";
    }

    return <View>
        <Text>Votre sexe :</Text>
        <div>
            <input type="radio"
            value="Homme"
            name="genre"
            onChange={() => setSexe("Homme")}/> Homme
            <input type="radio"
            value="Femme"
            name="genre"
            onChange={() => setSexe("Femme")}/> Femme
        </div>

        <TextInput
            placeholder="Votre taille en cm"
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setTaille(text)}
            value={taille}
        />

        <TextInput
            placeholder="Votre poids (en Kg)"
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setPoids(text)}
            value={poids}
        />

        <TouchableOpacity style={styles.button} onPress={() => {
            let resImc = calculerImc(sexe, taille, poids);
            let resEtat = returnTextRes(parseInt(resImc));
            setEtat(resEtat);
        }}><Text>Générer</Text></TouchableOpacity>
        <Text>{etat}</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });