import { Produto } from "./Produto";

export class Livro extends Produto {

    private _autor: string;

    //Constructor
    constructor(id: number, 
        nome: string, 
        tipo: number, 
        preco: number, 
        autor: string) {
        super(id, nome, tipo, preco);
        this._autor = autor;    
    }           

    //Métodos Get e Set
    public get autor(): string {
        return this._autor;
    }     

    public set autor(value: string) { 
        this._autor = value;
    }

    //Métodos Específicos
    public visualizar(): void {
        super.visualizar();
        
        console.log(`Autor: ${this._autor}`);    
    }
} 