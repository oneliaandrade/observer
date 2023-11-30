import { Observer } from "./observer";

export class Loja{
    private nome: string;
    private categoria: string;

    constructor(nome: string, categoria: string){
        this.nome = nome;
        this.categoria = categoria;
    }

    publicarNovoPost(text : string){
        Observer.publicarSpam(text);
    }

}