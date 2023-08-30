export class Strumento{
    public id: number;
    public marca: string;
    public modello: string;
    public categoria: string;
    public prezzo: number;

    constructor(id:number, marca: string, modello: string, categoria: string, prezzo: number){
        this.id = id;
        this.marca = marca;
        this.modello = modello;
        this.categoria = categoria;
        this.prezzo = prezzo;
    }
}
