import { Input } from "../util/Input";
import { Colors } from "../util/Colors";


export  abstract class Produto {

    //Private
    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;


    //Constructor
    constructor(id: number, nome: string, tipo: number, preco: number) {
        this._id = id;
        this._nome = nome;
        this._tipo = tipo;
        this._preco = preco;
    }   

    //Get e Set
    public get id(): number {
        return this._id;
    }           
    public set id(value: number) {
        this._id = value;
    }                                   
    public get nome(): string {
        return this._nome;
    }   
    public set nome(value: string) {
        this._nome = value;
    }                                   
    public get tipo(): number {
        return this._tipo;
    }   
    public set tipo(value: number) {
        this._tipo = value;
    }                                   
    public get preco(): number {
        return this._preco;
    }   
    public set preco(value: number) {
        this._preco = value;
    }                                           

    
    //Métodos Específicos
    public visualizar(): void {
        let tipoProduto: string;

        switch (this._tipo) {
            case 1:
                tipoProduto = "Disco";
                break;
            case 2:
                tipoProduto = "Fone";
                break;
            case 3:
                tipoProduto = "Livro";
                break;
            default:
                tipoProduto = "Tipo Inválido";
                
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("ID: " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Tipo: " + tipoProduto);
        console.log("Preço: R$ " + this._preco.toFixed(2));

    }
}