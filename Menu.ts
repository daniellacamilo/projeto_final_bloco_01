import { Disco } from "./src/model/Disco";
import { Fone } from "./src/model/Fone";
import { Livro } from "./src/model/Livro";

import { Produto } from "./src/model/Produto";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Input } from "./src/util/Input";
import { Colors } from "./src/util/Colors";

export function main() {

    let opcao: number;

    criarProdutosTeste();

    const produtoController = new ProdutoController();

    const tipoProdutos = ['Disco', 'Fone', 'Livro'];

    // Testes para as classes filhas de Produto
    //  Disco
    const disco = new Disco(789011, "Music", 2, 100, "Madonna");
    disco.visualizar();

    // Fone
    const fone = new Fone(123456, "Fone Apple", 3, 500, "Apple AirPods Max");
    fone.visualizar();

    // Livro
    const livro = new Livro(123456, "O Senhor dos Anéis", 1, 150, "J.R.R. Tolkien");
    livro.visualizar();
    

    while (true) {

        console.log(Colors.bg.black, Colors.fg.yellow, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                    Clube do Disco                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Listar todos os Produtos             ");       
        console.log("            2 - Listar Produto pelo ID               ");
        console.log("            3 - Cadastrar Produto                    ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        Colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = Input.questionInt("");

        if (opcao === 0) {
            console.log(Colors.fg.greenstrong, "\nClube do Disco agradece a sua visita! Até a próxima!\n", Colors.reset);
            sobre();
            console.log(Colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {

             case 1:
                console.log(Colors.fg.whitestrong, "\n\nListar todos os Produtos\n\n", Colors.reset);
                produtoController.listarTodas();
                keyPress();
                break;

            case 2:
                console.log(Colors.fg.whitestrong, "\n\nListar Produto - por ID\n\n", Colors.reset);
                const id = Input.questionInt("Digite o ID do produto: ");
                procurarPorId();
                keyPress();
                break;

            case 3:
                console.log(Colors.fg.whitestrong, "\n\nCadastrar Produto\n\n", Colors.reset);
                cadastrarProduto();
                keyPress();
                break;
         
            case 4:
                console.log(Colors.fg.whitestrong, "\n\nAtualizar Produto\n\n", Colors.reset);
                atualizarProduto();
                keyPress();
                break;

            case 5:
                console.log(Colors.fg.whitestrong, "\n\nDeletar um Produto\n\n", Colors.reset);
                deletarProduto();
                keyPress();
                break;

            case 6:
                console.log(Colors.fg.whitestrong, "\n\nConsultar Produto por Nome\n\n", Colors.reset);
                consultarPorNomeProduto();
                keyPress();
                break;
            
            default:
                console.log(Colors.fg.whitestrong, "\nOpção Inválida!\n", Colors.reset);

                keyPress();
        }
    }

}

// Opção 1: Listar todos os Produtos
// Ver case 2 do Menu

// Opção 2: Consultar Produto por ID
function procurarPorId(): void {
    console.log("Digite o ID do produto: ");
    const numero = Input.questionInt("");
    produtoController.procurarPorId(numero);
}

// Opção 3: Cadastrar Produto

function cadastrarProduto(): void {
    console.log("Digite o nome do produto: ");
    const nome = Input.question("");

    console.log("Digite o tipo do produto: ");
    const tipo = Input.keyInSelect(tipoProdutos, "", { cancel: false }) + 1;

    console.log("Digite o preço do produto: ");
    const preco = Input.questionFloat("");

    switch (tipo) {
        case 1: // Cria objeto da Classe Disco
            console.log("Digite o artista do disco: ");
            const artista = Input.question("");

            produtoController.cadastrarProduto(new Disco(produtoController.gerarnumero(),
                nome, tipo, preco, artista));
            break;

        case 2: // Cadastro da Classe Fone
            console.log("Digite o modelo do Fone: ");
            const modelo = Input.questionInt("");

            produtoController.cadastrarProduto(new Fone(produtoController.gerarnumero(),
                nome, tipo, preco, modelo));
            break;

        case 3: // Cadastro da Classe Livro
            console.log("Digite o autor do Livro: ");
            const autor = Input.question("");

            produtoController.cadastrarProduto(new Livro(produtoController.gerarnumero(),
                nome, tipo, preco, autor));
            break;
    }
}


// Opção 4: Atualizar Produto

function atualizarProduto(): void {

    console.log("Digite o ID do produto: ");
    const id = Input.questionInt("");

    const produto = produtoController.buscarNoArray(id);

    if (produto !== null) {

        // Valores atuais do produto
        let nome: string = produto.nome
        const tipo: number = produto.tipo;
        let preco: number = produto.preco;

        // Atualização do nome
        console.log(`Nome atual: ${nome}`);
        console.log("Digite o novo nome do Produto: ");
        console.log(Colors.fg.yellowstrong,
            "\nPressione ENTER para manter o Nome atual",
            Colors.reset);
        nome = Input.question("", { defaultInput: nome });

        // Atualização do preço
        console.log(`Preço atual: ${formatarMoeda(preco)}`);
        console.log("Digite o novo preço do Produto: ");
        console.log(Colors.fg.yellowstrong,
            "\nPressione ENTER para manter o Preço atual",
            Colors.reset);
        preco = Input.questionFloat("", { defaultInput: preco });

        switch (tipo) {
            case 1: // Atualização da Classe Disco
                const disco = produto as Disco;     
                let artista: string = disco.artista;    
                console.log(`Artista atual: ${artista}`);   
                console.log("Digite o novo artista do Disco: ");
                console.log(Colors.fg.yellowstrong,
                    "\nPressione ENTER para manter o Artista atual",
                    Colors.reset);
                artista = Input.question("", { defaultInput: artista });
                produtoController.atualizarProduto(new Disco(id, nome, tipo, preco, artista));
                break;          

            case 2: // Atualização da Classe Fone       
                const fone = produto as Fone;           
                let modelo: string = fone.modelo;
                console.log(`Modelo atual: ${modelo}`);
                console.log("Digite o novo modelo do Fone: ");
                console.log(Colors.fg.yellowstrong,     
                    "\nPressione ENTER para manter o Modelo atual",
                    Colors.reset);
                modelo = Input.question("", { defaultInput: modelo });
                produtoController.atualizarProduto(new Fone(id, nome, tipo, preco, modelo));
                break;      

            case 3: // Atualização da Classe Livro      
                const livro = produto as Livro;     
                let autor: string = livro.autor;        
                console.log(`Autor atual: ${autor}`);
                console.log("Digite o novo autor do Livro: ");  
                console.log(Colors.fg.yellowstrong,
                    "\nPressione ENTER para manter o Autor atual",
                    Colors.reset);                  
                autor = Input.question("", { defaultInput: autor });    
                produtoController.atualizarProduto(new Livro(id, nome, tipo, preco, autor));
                break;
        }
        
    }

    

    // Opção 5: Deletar Produto

function deletarProduto(): void {
    console.log("Digite o ID do Produto: ");
    const id = Input.questionInt("");

    const produto = produtoController.buscarNoArray(id);

    if (produto !== null) {
        console.log(Colors.fg.whitestrong,
            `Deseja prosseguir com a exclusão do produto de ID: ${id} (Sim/Não)? `,
            Colors.reset);
        let confirmacao = Input.question("").toUpperCase();

        if (confirmacao === "SIM") {
            produtoController.deletarProduto(id);
        } else {
            console.log(Colors.fg.red, "Operação cancelada!",
                Colors.reset);
        }
    } else {
        console.log(Colors.fg.red,
            `O produto de ID: ${id} não foi encontrado! `,
            Colors.reset);
    }
}

// Opção 6: Consultar Produto por Nome

function consultarPorNome() {
    console.log("Digite o nome do produto: ");
    const produto = Input.question("");
    produtoController.consultarPorNome(produto);

}



}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Daniella Camilo - daniella.camilos@gmail.com");
    console.log("github.com/daniellacamilo");
    console.log("*****************************************************");
}

/* Função de pausa entre as opções do menu */
function keyPress(): void {
    console.log(Colors.reset,"\nPressione enter para continuar...");
    Input.prompt();
}

// Produtos para testes

function criarProdutosTeste(): void {

    //DISCOS
    produtoController.cadastrarProduto(new Disco(produtoController.gerarnumero(), "MDNA", 1, 399.90, "Pop", "Madonna"));
    ProdutoController.cadastrarProduto(new Disco(produtoController.gerarnumero(), "The Dark Side of the Moon", 1, 299.90, "Rock", "Pink Floyd"));
    ProdutoController.cadastrarProduto(new Disco(produtoController.gerarnumero(), "Thriller", 1, 199.90, "Pop", "Michael Jackson"));
    

    //FONES
    ProdutoController.cadastrarProduto(new Fone(produtoController.gerarnumero(), "Fone Apple", 2, 500, "Apple AirPods Max"));
    ProdutoController.cadastrarProduto(new Fone(produtoController.gerarnumero(), "Fone Sony", 2, 300, "Sony WH-1000XM4"));
    ProdutoController.cadastrarProduto(new Fone(produtoController.gerarnumero(), "Fone Bose", 2, 400, "Bose QuietComfort 35 II"));  
    


    //LIVROS
    produtoController.cadastrarProduto(new Livro(produtoController.gerarnumero(), "O Senhor dos Anéis", 3, 129.90, "J.R.R. Tolkien"));
    produtoController.cadastrarProduto(new Livro(produtoController.gerarnumero(), "1984", 3, 89.90, "George Orwell"));
    produtoController.cadastrarProduto(new Livro(produtoController.gerarnumero(), "O Pequeno Príncipe", 3, 49.90, "Antoine de Saint-Exupéry"));            

}

main();