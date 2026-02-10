import { Produto } from "./Produto";

export class Disco extends Produto {

    private _artista: string;

    //Constructor
    constructor(id: number, 
        nome: string, 
        tipo: number, 
        preco: number, 
        artista: string) {
        super(id, nome, tipo, preco);
        this._artista = artista;    
    }           

    //Métodos Get e Set
    public get artista(): string {
        return this._artista;
    }     

    public set artista(value: string) { 
        this._artista = value;
    }

    //Métodos Específicos
    public visualizar(): void {
        super.visualizar();
        
        console.log(`Artista: ${this._artista}`);    
    }
} 