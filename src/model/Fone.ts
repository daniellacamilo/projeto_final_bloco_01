import { Produto } from "./Produto";

export class Fone extends Produto {

    private _modelo: string;

    //Constructor
    constructor(id: number, 
        nome: string, 
        tipo: number, 
        preco: number, 
        modelo: string) {

        super(id, nome, tipo, preco);

        this._modelo = modelo;    
    }           

    //Métodos Get e Set
    public get modelo(): string {
        return this._modelo;
    }     

    public set modelo(value: string) { 
        this._modelo = value;
    }
   
    //Métodos Específicos
    public visualizar(): void {
        super.visualizar();
        
        console.log(`Modelo: ${this._modelo}`);    
    }
} 