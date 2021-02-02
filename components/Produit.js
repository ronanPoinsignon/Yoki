export default class Produit {
    constructor(nom, prix){
        this.nom = nom;
        this.prix = prix;
    }
    getNom(){
        return this.nom;
    }
    getPrix(){
        return this.prix;
    }
}