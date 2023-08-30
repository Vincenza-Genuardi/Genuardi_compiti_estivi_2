export class Spartito{
    public id: number;
    public titolo: string;
    public autore: string;
    public editore: string;
    public prezzo: number;

    constructor(id:number, titolo: string, autore: string, editore: string, prezzo: number){
        this.id = id;
        this.titolo = titolo;
        this.autore = autore;
        this.editore = editore;
        this.prezzo = prezzo;
    }
}