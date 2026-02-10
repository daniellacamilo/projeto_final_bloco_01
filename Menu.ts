import { Input } from "./src/util/Input";
import { Colors } from "./src/util/Colors";

export function main() {

    let opcao: number;

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
                console.log(Colors.fg.whitestrong, "\n\nListar todos os Produto\n\n", Colors.reset);
                
                keyPress();
                break;
            case 2:
                console.log(Colors.fg.whitestrong, "\n\nListar Produtos - por ID\n\n", Colors.reset);

                keyPress();
                break;
            case 3:
                console.log(Colors.fg.whitestrong, "\n\nCadastrar Produto\n\n", Colors.reset);

                keyPress();
                break;
            case 4:
                console.log(Colors.fg.whitestrong, "\n\nAtualizar o Produto\n\n", Colors.reset);

                keyPress();
                break;
            case 5:
                console.log(Colors.fg.whitestrong, "\n\nDeletar um Produto\n\n", Colors.reset);

                keyPress();
                break;
            case 6:
                console.log("Consultar Produto por Nome");
                keyPress();
                break;
            default:
                console.log(Colors.fg.whitestrong, "\nOpção Inválida!\n", Colors.reset);

                keyPress();
        }
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

main();
