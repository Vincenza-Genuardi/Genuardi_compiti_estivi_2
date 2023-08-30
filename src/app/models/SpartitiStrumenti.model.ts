import { Spartito } from "./spartito.model";
import { Strumento } from "./strumento.model";

export class SpartitiStrumenti{
    public spartiti: Spartito[];
    public strumenti: Strumento[];
    constructor(spartiti:Spartito[], strumenti:Strumento[]){
        this.spartiti = spartiti;
        this.strumenti = strumenti;
    }
}