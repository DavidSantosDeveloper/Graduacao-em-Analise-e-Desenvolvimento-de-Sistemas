import { RedeSocial } from "./Rede_Social/RedeSocial.js";
import { Perfil } from "./perfil/Perfil.js";
import { Postagem } from "./postagem/Postagem.js";
import { PostagemAvancada } from "./postagem/PostagemAvancada.js";
import { RepositorioDePerfisArray } from "./Repositorio_Perfis/Versao_Array/RepositorioDePerfis_Array.js";
import { RepositorioDePostagensArray } from "./Repositorio_Postagens/Versao_Array/RepositorioDePostagens_Array.js";
import { RepositorioDePerfisLista } from "./Repositorio_Perfis/Versao_Lista_Encadeada/RepositorioDePerfis_Lista.js";
//leitura de dados
import input from "readline-sync";
// salvar em arquivos de texto
import * as fs from 'fs';
import { RepositorioDePostagens_Lista } from "./Repositorio_Postagens/Versao_Lista_Encadeada/RepositorioDePostagens_Lista.js";
class App {
    constructor(redeSocial) {
        this.caminho_arquivo_perfis = "./perfis.txt";
        this.caminho_arquivo_postagens = "./postagens.txt";
        this._redeSocial = redeSocial;
    }
    exibirMenu() {
        //LENDO OS PERFIS SALVOS
        this.carregarArquivoTxtPerfis();
        //LENDO AS POSTAGENS SALVAS
        this.carregarArquivoTxtPostagens();
        console.log(this._redeSocial.getRepositorioDePerfis().getPerfis());
        console.log(this._redeSocial.getRepositorioDePostagens().getPostagens());
        let opcao = 0;
        while (opcao !== 12) {
            console.log("\n \n \n ");
            console.log("╔═══════════════════════════════╗");
            console.log("║     Menu da Rede Social       ║");
            console.log("╚═══════════════════════════════╝");
            console.log("\n \n 1. Incluir Perfil");
            console.log("2. Consultar Perfil");
            console.log("3. Editar Perfil");
            console.log("4-Excluir Perfil;");
            console.log("5. Incluir Postagem");
            console.log("6. Consultar Postagens");
            console.log("7. Editar Postagem");
            console.log("8. Excluir Postagem");
            console.log("9-Exibir as postagens populares que ainda podem ser exibidas;");
            console.log("10. Curtir Postagem");
            console.log("11. Descurtir Postagem");
            console.log("12. Sair \n");
            opcao = this.obterOpcao();
            if (opcao == 1) {
                this.incluirPerfil();
            }
            if (opcao == 2) {
                this.consultarPerfil();
            }
            if (opcao == 3) {
                this.EditarPerfil();
            }
            if (opcao == 4) {
                this.excluirPerfil();
            }
            if (opcao == 5) {
                this.incluirPostagem();
            }
            if (opcao == 6) {
                this.consultarPostagens();
            }
            if (opcao == 7) {
                this.EditarPostagens();
            }
            if (opcao == 8) {
                this.excluirPostagens();
            }
            if (opcao == 9) {
                this.mostrarPostagensPopulares();
            }
            if (opcao == 10) {
                this.curtirPostagem();
            }
            if (opcao == 11) {
                this.descurtirPostagem();
            }
            if (opcao == 12) {
                console.log("Fechando...");
                this.salvarAsPostagensEmArquivoTxt();
                this.salvarOsPerfisEmArquivoTxt();
                break;
            }
        }
    }
    obterOpcao() {
        return parseInt(input.question("\n Escolha uma opcao: "));
    }
    incluirPerfil() {
        console.log("\n \n \n");
        console.log("|---------------------------------|");
        console.log("|      Cadrastrar Perfil          |");
        console.log("|---------------------------------|");
        let nome = input.question("\n \nDigite o nome do usuario:");
        let email = input.question("Digite o email do usuario:");
        console.log("\n \n \n");
        let lista_de_perfis_cadrastrados = this._redeSocial.getRepositorioDePerfis().getPerfis();
        let perfil_cadrastrado;
        if (this._redeSocial.getRepositorioDePerfis() instanceof RepositorioDePerfisLista) {
            //Caso da ser lista de perfis está vazia.
            if (this._redeSocial.getRepositorioDePerfis().getTamanho() == 0) {
                perfil_cadrastrado = new Perfil(1, nome, email);
                this._redeSocial.getRepositorioDePerfis().incluir(perfil_cadrastrado);
            }
            //Caso de ter pelo menos 1 perfil na lista de perfis
            else if (this._redeSocial.getRepositorioDePerfis().getTamanho() > 0) {
                let ultimo_no = this._redeSocial.getRepositorioDePerfis().getFim();
                if (ultimo_no != null) {
                    let id_novo_perfil = (ultimo_no.perfil.getId()) + 1;
                    perfil_cadrastrado = new Perfil(id_novo_perfil, nome, email);
                    this._redeSocial.getRepositorioDePerfis().incluir(perfil_cadrastrado);
                }
            }
        }
        else if (this._redeSocial.getRepositorioDePerfis() instanceof RepositorioDePerfisArray) {
            //Caso da ser lista de perfis está vazia.
            if (lista_de_perfis_cadrastrados.length == 0) {
                perfil_cadrastrado = new Perfil(1, nome, email);
                lista_de_perfis_cadrastrados.push(perfil_cadrastrado);
            }
            //Caso de ter pelo menos 1 perfil na lista de perfis
            else {
                let id_novo_perfil = (lista_de_perfis_cadrastrados[lista_de_perfis_cadrastrados.length - 1].getId()) + 1;
                perfil_cadrastrado = new Perfil(id_novo_perfil, nome, email);
                lista_de_perfis_cadrastrados.push(perfil_cadrastrado);
            }
        }
        //  >>>>>>>>>>>Salvar no arquivo de texto 'perfis.txt'<<<<<<<<<<<<
        this.salvarOsPerfisEmArquivoTxt();
        console.log(lista_de_perfis_cadrastrados);
    }
    consultarPerfil() {
        console.log("\n \n \n");
        console.log("|---------------------------------|");
        console.log("|      Consultar Perfil           |");
        console.log("|---------------------------------|");
        let nome_do_usuario_procurado = input.question("\n Digite o nome do usuario:");
        let resultado_da_consulta = this._redeSocial.getRepositorioDePerfis().consultarPorNome(nome_do_usuario_procurado);
        //FAIL FAST
        if (resultado_da_consulta == null) {
            console.log(`\n usuario nao encontrado!!!!!\n`);
        }
        else {
            console.log(`\n Usuario com nome '${nome_do_usuario_procurado}' : `);
            console.log(resultado_da_consulta);
        }
    }
    EditarPerfil() {
        console.log("\n \n \n");
        console.log("|---------------------------------|");
        console.log("|      Editar Perfil              |");
        console.log("|---------------------------------|");
        let nome_do_usuario_procurado = input.question("\n Digite o nome do usuario:");
        let resultado_da_consulta = this._redeSocial.getRepositorioDePerfis().consultarPorNome(nome_do_usuario_procurado);
        //FAIL FAST
        if (resultado_da_consulta == null) {
            console.log(`\n usuario nao encontrado!!!!!\n`);
        }
        else {
            let nome;
            let email;
            let opcao1 = input.question(" Editar nome (s-SIM s-NAO) ?");
            if (opcao1.toUpperCase() == "S") {
                nome = input.question("Digite o nome:");
                resultado_da_consulta.setNome(nome);
            }
            let opcao2 = input.question(" Editar email (s-SIM s-NAO) ?");
            if (opcao2.toUpperCase() == "S") {
                email = input.question("Digite o email:");
                resultado_da_consulta.setEmail(email);
            }
            this.salvarOsPerfisEmArquivoTxt();
            console.log(`\n Usuario com nome '${nome_do_usuario_procurado}' : `);
            console.log(resultado_da_consulta);
        }
    }
    excluirPerfil() {
        console.log("\n \n \n");
        console.log("|---------------------------------|");
        console.log("|      Excluir   Perfil           |");
        console.log("|---------------------------------|");
        let nome_do_usuario_procurado = input.question("\n Digite o nome do usuario que sera excluido:");
        let resultado_da_consulta = this._redeSocial.getRepositorioDePerfis().consultarPorNome(nome_do_usuario_procurado);
        //FAIL FAST
        if (resultado_da_consulta == null) {
            console.log(`\n usuario nao encontrado!!!!!\n`);
        }
        else {
            if (this._redeSocial.getRepositorioDePerfis() instanceof RepositorioDePerfisLista) {
                let lista = this._redeSocial.getRepositorioDePerfis();
                let no_inicial = lista.getPerfis();
                // Caso especial: Remover o primeiro nó
                if (no_inicial.perfil.getNome() === nome_do_usuario_procurado) {
                    lista.setCabeca(no_inicial.proximo);
                }
                let no_anterior = null;
                let no_atual = no_inicial;
                while (no_atual !== null) {
                    if (no_atual.perfil.getNome() === nome_do_usuario_procurado) {
                        // Remove o nó da lista
                        if (no_anterior != null) {
                            no_anterior.proximo = no_atual.proximo;
                        }
                        break;
                    }
                    else {
                        no_anterior = no_atual;
                        no_atual = no_atual.proximo;
                    }
                } /*let no_inicial:Nodo=this._redeSocial.getRepositorioDePerfis().getPerfis()
                let no_atual=no_inicial
    
                while (no_atual !== null) {
                  console.log(no_atual)
                  if(no_atual.perfil.getNome()==nome_do_usuario_procurado){
                     let tamanho=(<RepositorioDePerfisLista>this._redeSocial.getRepositorioDePerfis()).getTamanho()
                     if(tamanho==1){
                        console.log("encontrou na lista encadeada");
                        (<RepositorioDePerfisLista>this._redeSocial.getRepositorioDePerfis()).setCabeca(no_atual.proximo)
                        no_atual = no_atual.proximo;
                        break
                     }
                    
                  }
    
                   else {
                    no_atual = no_atual.proximo;
                  }
                }
                    */
            }
            else if (this._redeSocial.getRepositorioDePerfis() instanceof RepositorioDePerfisArray) {
                let lista_de_perfis = this._redeSocial.getRepositorioDePerfis().getPerfis();
                let lista_de_perfis_atualizada = [];
                for (const perfil_atual of lista_de_perfis) {
                    if (perfil_atual.getNome() != nome_do_usuario_procurado) {
                        lista_de_perfis_atualizada.push(perfil_atual);
                    }
                }
                this._redeSocial.getRepositorioDePerfis().setPerfis(lista_de_perfis_atualizada);
            }
            this.salvarOsPerfisEmArquivoTxt();
            console.log(`\n Usuario com nome '${nome_do_usuario_procurado} excluido' : `);
        }
    }
    mostrarPostagensPopulares() {
        let lista_de_postagens = this._redeSocial.getRepositorioDePostagens().getPostagens();
        let lista_de_postagens_simples = [];
        let lista_de_postagens_avancadas = [];
        if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Lista) {
            let atual = this._redeSocial.getRepositorioDePostagens().getPostagens();
            while (atual !== null) {
                if (atual.postagem instanceof PostagemAvancada) {
                    if (atual.postagem.ehPopular() && atual.postagem.getVisualizacoesRestantes() > 0) {
                        atual.postagem.decrementarVisualizacoes();
                        lista_de_postagens_avancadas.push(atual.postagem);
                    }
                }
                else {
                    if (atual.postagem.ehPopular()) {
                        lista_de_postagens_simples.push(atual.postagem);
                    }
                }
                atual = atual.proximo;
            }
        }
        else if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagensArray) {
            for (const postagem_atual of lista_de_postagens) {
                if (postagem_atual instanceof PostagemAvancada) {
                    if (postagem_atual.ehPopular() && postagem_atual.getVisualizacoesRestantes() > 0) {
                        postagem_atual.decrementarVisualizacoes();
                        lista_de_postagens_avancadas.push(postagem_atual);
                    }
                }
                else {
                    if (postagem_atual.ehPopular()) {
                        lista_de_postagens_simples.push(postagem_atual);
                    }
                }
            }
        }
        let numero_postagem_simples = 1;
        for (const postagem_atual of lista_de_postagens_simples) {
            console.log(` \n               *POSTAGEM ${numero_postagem_simples}* 
                        _________________________________________________________________________________________
                        | ID: ${postagem_atual.getId()}                        DATA:${postagem_atual.getData()}  |                   |
                        |________________________________________________________________________________________|
                        |>>>> AUTOR: @ ${postagem_atual.getPerfil().getNome()}                                   |
                        |>>>> TEXTO: ${postagem_atual.getTexto()}                                                |
                        |>>>> CURTIDAS: ${postagem_atual.getCurtida()}                                           |
                        |>>>> DESCURTIDAS: ${postagem_atual.getDescurtida()}                                     |
                        |________________________________________________________________________________________|

            `);
            numero_postagem_simples++;
        }
        let numero_postagem_avancada = 1;
        for (const postagem_atual of lista_de_postagens_avancadas) {
            console.log(`                \n *POSTAGEM AVANCADA${numero_postagem_avancada}* 
                        _________________________________________________________________________________________
                        | ID: ${postagem_atual.getId()}                        DATA:${postagem_atual.getData()}  |                  
                        |________________________________________________________________________________________|
                        |>>>> AUTOR: @ ${postagem_atual.getPerfil().getNome()}                                   |
                        |>>>> TEXTO: ${postagem_atual.getTexto()}                                                |
                        |>>>> CURTIDAS: ${postagem_atual.getCurtida()}                                           |
                        |>>>> DESCURTIDAS: ${postagem_atual.getDescurtida()}                                     |
                        |>>>> HASHTAGS:${postagem_atual.getHashtagEmString()}                                    |
                        |>>>> VISUALIZACOES RESTANTES:${postagem_atual.getVisualizacoesRestantes()}              |
                        |________________________________________________________________________________________|

            `);
            numero_postagem_avancada++;
        }
    }
    //>>>>>>>>>>PERSISTENCIA DE DADOS
    carregarArquivoTxtPerfis() {
        const arquivo = fs.readFileSync(this.caminho_arquivo_perfis, 'utf-8');
        if (arquivo != "") {
            //const linhas: string[] = arquivo.split('\n');
            const linhas = arquivo.split('\r\n');
            console.log("Iniciando leitura de arquivo perfis.txt");
            for (let i = 0; i < linhas.length; i++) {
                let linhaPerfil = linhas[i].split(";");
                let perfil;
                perfil = new Perfil(Number(linhaPerfil[0]), linhaPerfil[1], linhaPerfil[2]);
                this._redeSocial.getRepositorioDePerfis().incluir(perfil);
                console.log(`Perfil ${perfil.getId()} carregada`);
            }
        }
        /*
        try{
          let perfis_gravados_no_arquivo_txt=JSON.parse(fs.readFileSync(this.caminho_arquivo_perfis,"utf-8"))
          for (const objeto_atual of perfis_gravados_no_arquivo_txt) {
            let objeto_convertido_em_perfil=new Perfil(objeto_atual._id,objeto_atual._nome,objeto_atual._email)
            for (const postagem_atual of objeto_atual._postagens) {
              objeto_convertido_em_perfil.adicicionarPostagens(postagem_atual)
            }
            
            console.log(objeto_convertido_em_perfil)
            this._redeSocial.getRepositorioDePerfis().incluir(objeto_convertido_em_perfil)
          }
    
        }
        catch (error){
           this._redeSocial.getRepositorioDePerfis().setPerfis([])
        }
          */
    }
    salvarOsPerfisEmArquivoTxt() {
        /*
        let lista_de_perfis_cadrastrados=this._redeSocial.getRepositorioDePerfis().getPerfis()
        fs.writeFileSync(this.caminho_arquivo_perfis,JSON.stringify(lista_de_perfis_cadrastrados),"utf-8")
        */
        console.log("Iniciando a gravação de perfis no arquivo perfil.txt");
        let stringPerfil = "";
        let linha = "";
        if (this._redeSocial.getRepositorioDePerfis() instanceof RepositorioDePerfisLista) {
            let cabeca_lista = this._redeSocial.getRepositorioDePerfis().getCabeca();
            let atual = cabeca_lista;
            while (atual !== null) {
                linha = `${atual.perfil.getId()};${atual.perfil.getNome()};${atual.perfil.getEmail()}\r\n`;
                stringPerfil += linha;
                atual = atual.proximo;
            }
            //deleta os últimos \r\n da string que vai pro arquivo, evitando que grave uma linha vazia
            stringPerfil = stringPerfil.slice(0, stringPerfil.length - 2);
            fs.writeFileSync(this.caminho_arquivo_perfis, stringPerfil, 'utf-8');
            console.log("Perfis salvos em arquivo.");
        }
        else if (this._redeSocial.getRepositorioDePerfis() instanceof RepositorioDePerfisArray) {
            for (let perfil of this._redeSocial.getRepositorioDePerfis().getPerfis()) {
                linha = `${perfil.getId()};${perfil.getNome()};${perfil.getEmail()}\r\n`;
                stringPerfil += linha;
            }
            //deleta os últimos \r\n da string que vai pro arquivo, evitando que grave uma linha vazia
            stringPerfil = stringPerfil.slice(0, stringPerfil.length - 2);
            fs.writeFileSync(this.caminho_arquivo_perfis, stringPerfil, 'utf-8');
            console.log("Perfis salvos em arquivo.");
        }
    }
    carregarArquivoTxtPostagens() {
        const arquivo = fs.readFileSync(this.caminho_arquivo_postagens, 'utf-8');
        if (arquivo != "" && arquivo != " ") {
            //const linhas: string[] = arquivo.split('\n');
            const linhas = arquivo.split('\r\n');
            for (let i = 0; i < linhas.length; i++) {
                let linhaConta = linhas[i].split(";");
                let postagem;
                let tipo = linhaConta[3];
                if (tipo == 'PA') {
                    let perfil_da_postagem = this._redeSocial.getRepositorioDePerfis().consultarPorId(Number(linhaConta[6]));
                    let lista_de_hashtags_sem_hash = linhaConta[6].split("#");
                    let lista_de_hashtags_pronta = [];
                    for (const hashtag_atual of lista_de_hashtags_sem_hash) {
                        lista_de_hashtags_pronta.push(`#${hashtag_atual}`);
                    }
                    postagem = new PostagemAvancada(Number(linhaConta[0]), linhaConta[1], Number(linhaConta[2]), Number(linhaConta[4]), new Date(linhaConta[5]), perfil_da_postagem, lista_de_hashtags_pronta, Number(linhaConta[7]));
                    console.log(postagem);
                }
                else if (tipo == 'P') {
                    let perfil_da_postagem = this._redeSocial.getRepositorioDePerfis().consultarPorId(Number(linhaConta[6]));
                    console.log("____id do perfil que postou______");
                    console.log(linhaConta[6]);
                    console.log("_____perfil da postagem_____");
                    console.log(perfil_da_postagem);
                    console.log(`${linhaConta.length}`);
                    postagem = new Postagem(Number(linhaConta[0]), linhaConta[1], Number(linhaConta[2]), Number(linhaConta[4]), new Date(linhaConta[5]), perfil_da_postagem);
                    if (perfil_da_postagem != null) {
                        perfil_da_postagem.adicicionarPostagens(postagem);
                    }
                }
                this._redeSocial.getRepositorioDePostagens().incluir(postagem);
            }
        }
    }
    salvarAsPostagensEmArquivoTxt() {
        let stringPostagem = "";
        let linha = "";
        if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Lista) {
            let atual = this._redeSocial.getRepositorioDePostagens().getCabeca();
            while (atual !== null) {
                if (atual.postagem instanceof PostagemAvancada) {
                    linha = `${atual.postagem.getId()};${atual.postagem.getTexto()};${atual.postagem.getCurtida()};PA;${atual.postagem.getDescurtida()};${atual.postagem.getData()};${atual.postagem.getPerfil().getId()};${atual.postagem.getHashtagEmString()};${atual.postagem.getVisualizacoesRestantes()}\r\n`;
                }
                else {
                    linha = `${atual.postagem.getId()};${atual.postagem.getTexto()};${atual.postagem.getCurtida()};P;${atual.postagem.getDescurtida()};${atual.postagem.getData()};${atual.postagem.getPerfil().getId()}\r\n`;
                }
                stringPostagem += linha;
                atual = atual.proximo;
            }
            //deleta os últimos \r\n da string que vai pro arquivo, evitando que grave uma linha vazia
            stringPostagem = stringPostagem.slice(0, stringPostagem.length - 2);
            fs.writeFileSync(this.caminho_arquivo_postagens, stringPostagem, 'utf-8');
        }
        else if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagensArray) {
            for (let postagem_atual of this._redeSocial.getRepositorioDePostagens().getPostagens()) {
                if (postagem_atual instanceof PostagemAvancada) {
                    linha = `${postagem_atual.getId()};${postagem_atual.getTexto()};${postagem_atual.getCurtida()};PA;${postagem_atual.getDescurtida()};${postagem_atual.getData()};${postagem_atual.getPerfil().getId()};${postagem_atual.getHashtagEmString()};${postagem_atual.getVisualizacoesRestantes()}\r\n`;
                }
                else {
                    linha = `${postagem_atual.getId()};${postagem_atual.getTexto()};${postagem_atual.getCurtida()};P;${postagem_atual.getDescurtida()};${postagem_atual.getData()};${postagem_atual.getPerfil().getId()}\r\n`;
                }
                stringPostagem += linha;
            }
            //deleta os últimos \r\n da string que vai pro arquivo, evitando que grave uma linha vazia
            stringPostagem = stringPostagem.slice(0, stringPostagem.length - 2);
            fs.writeFileSync(this.caminho_arquivo_postagens, stringPostagem, 'utf-8');
        }
    }
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    incluirPostagem() {
        console.log("\n \n \n");
        console.log("|---------------------------------|");
        console.log("|      Incluir Postagens          |");
        console.log("|---------------------------------|");
        let nome_do_usuario_procurado = input.question("\n \n Digite o nome do usuario autor da postagem:");
        let resultado_da_consulta_pelo_perfil_do_autor_da_postagem = this._redeSocial.getRepositorioDePerfis().consultarPorNome(nome_do_usuario_procurado);
        //Verifica se eh um usuario valido.
        while (resultado_da_consulta_pelo_perfil_do_autor_da_postagem == null) {
            console.log("\n usuario não encontado!!! Digite novamente.\n");
            nome_do_usuario_procurado = input.question("\n Digite o nome do usuario autor da postagem:");
            resultado_da_consulta_pelo_perfil_do_autor_da_postagem = this._redeSocial.getRepositorioDePerfis().consultarPorNome(nome_do_usuario_procurado);
        }
        let tipo_da_postagem = Number(input.question("\n \n Tipo da postagem 1-Postagem 2-Postagem Avancada : "));
        //verfica se a postagem eh valida
        while (tipo_da_postagem != 1 && tipo_da_postagem != 2) {
            console.log(`\n opcao invalida!!!! Digite novamente\n.`);
            tipo_da_postagem = Number(input.question("\n Tipo da postagem 1-Postagem 2-Postagem Avancada : "));
        }
        //########## Criar postagem
        let lista_de_postagens = this._redeSocial.getRepositorioDePostagens().getPostagens();
        let postagem_atual;
        if (tipo_da_postagem == 1) {
            let texto_da_postagem = input.question("\n \n Digite o texto da postagem:");
            if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Lista) {
                console.log("entrei aqui...");
                console.log(this._redeSocial.getRepositorioDePostagens().getTamanho() == 0);
                //>>>>>>>Caso lista de Postagens vazia
                if (this._redeSocial.getRepositorioDePostagens().getTamanho() == 0) {
                    postagem_atual = new Postagem(1, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem);
                }
                //>>>>>>>>Caso lista de Postagens com pelo menos 1 postagem
                else {
                    let id_postagem_atual = (this._redeSocial.getRepositorioDePostagens().getFim().postagem.getId()) + 1;
                    postagem_atual = new Postagem(id_postagem_atual, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem);
                }
            }
            else if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagensArray) {
                //>>>>>>>Caso lista de Postagens vazia
                if (lista_de_postagens.length == 0) {
                    postagem_atual = new Postagem(1, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem);
                }
                //>>>>>>>>Caso lista de Postagens com pelo menos 1 postagem
                else {
                    let id_postagem_atual = lista_de_postagens[lista_de_postagens.length - 1].getId() + 1;
                    postagem_atual = new Postagem(id_postagem_atual, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem);
                }
            }
            //salvando na memoria no Repositorio de Postagens
            this._redeSocial.getRepositorioDePostagens().incluir(postagem_atual);
            //salvando postagem na lista de postagem do usuario autor
            resultado_da_consulta_pelo_perfil_do_autor_da_postagem.adicicionarPostagens(postagem_atual);
        }
        else if (tipo_da_postagem == 2) {
            let texto_da_postagem = input.question("\n \n Digite o texto da postagem:   \n");
            let numero_de_visualizacoes_maximo = Number(input.question("\n Digite o numero maximo de visualizacoes:"));
            let lista_de_hashtags = [];
            let numero_hastag_atual = 1;
            while (true) {
                let hashtag_atual = input.question(`\n Digite a ${numero_hastag_atual} hashtag(#): `);
                lista_de_hashtags.push(`#${hashtag_atual}`);
                numero_hastag_atual++;
                let continuar = true;
                while (continuar) {
                    let opcao = input.question(`\n\n\nDeseja adicionar mais hashtags? (S-sim N-Nao):  `);
                    if (opcao.toUpperCase() == "S")
                        break;
                    else if (opcao.toUpperCase() == "N")
                        continuar = false;
                    else
                        continue;
                }
                if (continuar == true)
                    continue;
                else
                    break;
            }
            if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Lista) {
                //>>>>>>>Caso lista de Postagens vazia
                if (this._redeSocial.getRepositorioDePostagens().getTamanho() == 0) {
                    postagem_atual = new PostagemAvancada(1, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem, lista_de_hashtags, numero_de_visualizacoes_maximo);
                }
                //>>>>>>>>Caso lista de Postagens com pelo menos 1 postagem
                else {
                    let id_postagem_atual = (this._redeSocial.getRepositorioDePostagens().getFim().postagem.getId()) + 1;
                    postagem_atual = new PostagemAvancada(id_postagem_atual, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem, lista_de_hashtags, numero_de_visualizacoes_maximo);
                }
            }
            else if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagensArray) {
                //>>>>>>>Caso lista de Postagens vazia
                if (lista_de_postagens.length == 0) {
                    postagem_atual = new PostagemAvancada(1, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem, lista_de_hashtags, numero_de_visualizacoes_maximo);
                }
                //>>>>>>>>Caso lista de Postagens com pelo menos 1 postagem
                else {
                    let id_postagem_atual = lista_de_postagens[lista_de_postagens.length - 1].getId() + 1;
                    postagem_atual = new PostagemAvancada(id_postagem_atual, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem, lista_de_hashtags, numero_de_visualizacoes_maximo);
                }
            }
            //salvando na memoria no Repositorio de Postagens
            this._redeSocial.getRepositorioDePostagens().incluir(postagem_atual);
            //salvando postagem na lista de postagem do usuario autor
            resultado_da_consulta_pelo_perfil_do_autor_da_postagem.adicicionarPostagens(postagem_atual);
        }
        console.log(postagem_atual);
        console.log(this._redeSocial.getRepositorioDePostagens());
        //SALVAR postagens em arquivo "postagens.txt"
        this.salvarAsPostagensEmArquivoTxt();
    }
    EditarPostagens() {
        console.log("\n \n \n");
        console.log("|---------------------------------|");
        console.log("|      Editar Postagem            |");
        console.log("|---------------------------------|");
        let id_postagem = Number(input.question("\n Digite o id da postagem:"));
        let resultado_da_consulta = this._redeSocial.getRepositorioDePostagens().consultarPorID(id_postagem);
        //FAIL FAST
        if (resultado_da_consulta == null) {
            console.log(`\n postagem nao encontrada!!!!!\n`);
        }
        else {
            let texto;
            let hashtag;
            let max_visualizacao;
            let opcao1 = input.question(" Editar texto (s-SIM s-NAO) ?");
            let opcao2;
            let opcao3;
            if (opcao1.toUpperCase() == "S") {
                texto = input.question("Digite o texto:");
                resultado_da_consulta.setTexto(texto);
            }
            if (resultado_da_consulta instanceof PostagemAvancada) {
                opcao2 = input.question(" Editar hastag (s-SIM s-NAO) ?");
                if (opcao2.toUpperCase() == "S") {
                    let contador = 1;
                    while (true) {
                        hashtag = input.question(`Digite a ${contador} hashtag: `);
                        resultado_da_consulta.adicionarHashtag(`#${hashtag}`);
                        contador++;
                        let perguta = input.question(`Cadrastar mais hastags (s-Sim n-Nao)`);
                        if (perguta.toUpperCase() == "N") {
                            break;
                        }
                    }
                }
                opcao3 = input.question(" Editar numero maximo de visualizacoes (s-SIM s-NAO) ?");
                if (opcao3.toUpperCase() == "S") {
                    max_visualizacao = input.question("Digite o numero maximo de visualizacoes:");
                }
            }
            this.salvarAsPostagensEmArquivoTxt();
            console.log(`\n Postagem com id '${id_postagem} foi  atualizada!!!' : `);
        }
    }
    excluirPostagens() {
        console.log("\n \n \n");
        console.log("|---------------------------------|");
        console.log("|      Excluir   Postagens        |");
        console.log("|---------------------------------|");
        let id_postagem_exluida = Number(input.question("\n Digite o ID da postagem que sera excluida:"));
        let resultado_da_consulta = this._redeSocial.getRepositorioDePostagens().consultarPorID(id_postagem_exluida);
        //FAIL FAST
        if (resultado_da_consulta == null) {
            console.log(`\n  ID da postagem nao encontrado!!!!!\n`);
        }
        else {
            if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Lista) {
                let lista_de_postagens = this._redeSocial.getRepositorioDePostagens().getPostagens();
                let lista_de_postagens_atualizada = new RepositorioDePostagens_Lista();
                let atual = lista_de_postagens;
                while (atual !== null) {
                    if (atual.postagem.getId() != id_postagem_exluida) {
                        lista_de_postagens_atualizada.incluir(atual.postagem);
                    }
                    atual = atual.proximo;
                }
                this._redeSocial.getRepositorioDePostagens().setPostagens(lista_de_postagens_atualizada.getCabeca());
                this.salvarAsPostagensEmArquivoTxt();
                console.log(`\n Postagem com id '${id_postagem_exluida} excluido' : `);
            }
            else if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagensArray) {
                let lista_de_postagens = this._redeSocial.getRepositorioDePostagens().getPostagens();
                let lista_de_postagens_atualizada = [];
                for (const postagem_atual of lista_de_postagens) {
                    if (postagem_atual.getId() != id_postagem_exluida) {
                        lista_de_postagens_atualizada.push(postagem_atual);
                    }
                }
                this._redeSocial.getRepositorioDePostagens().setPostagens(lista_de_postagens_atualizada);
                this.salvarAsPostagensEmArquivoTxt();
                console.log(`\n Postagem com id '${id_postagem_exluida} excluido' : `);
            }
        }
    }
    consultarPostagens() {
        console.log("\n\n\n");
        console.log("|---------------------------------|");
        console.log("|      Consultar Postagens        |");
        console.log("|---------------------------------|");
        console.log("\n\n\n");
        let opcao = input.question(`Digite uma opcao: 
                              (1-mostrar Todas as postagens
                               2-mostrar as postagens de 1 perfil
                               3-mostrar uma postagem
                               0-Sair
                                
          
                               ) `);
        /*
        while(isNaN(Number(opcao))){
                console.log("\n opcao invalida!!!  digite novamente.")
                opcao=input.question(`\n Digite uma opcao:
                (1-mostrar Todas as postagens
                 2-mostrar as postagens de 1 perfil
                 3-mostrar uma postagem por ID
                 0-Sair
                  
                  ) `)
  
        }
        */
        opcao = Number(opcao);
        //FAIL FAST
        if (opcao == 0) {
            return;
        }
        else if (opcao == 1) {
            console.log(`\n\n\n>>>>>>>>>>>>Todas as postagens da Rede Social<<<<<<<<<<<<<<<<`);
            this.mostrarTodasAsPostagensDaRedeSocialNaTela();
        }
        else if (opcao == 2) {
            console.log(`\n\n\n>>>>>>>>>>>>Todas as postagens da um Perfil<<<<<<<<<<<<<<<<`);
            let nome_usuario = input.question("\nDigite o nome do usuario:");
            this.mostrarTodasAsPostagensDeUmPerfilNaTela(nome_usuario);
        }
        else if (opcao == 3) {
            console.log(`\n\n\n>>>>>>>>>>>>Mostrar Postagem com ID especifico<<<<<<<<<<<<<<<<`);
            let id_postagem = input.question("\nDigite o ID da postagem:");
            while (isNaN(Number(id_postagem))) {
                console.log("\nvalor invalido!!! Digite novamente.");
                id_postagem = input.question("\nDigite o ID da postagem:");
            }
            id_postagem = Number(id_postagem);
            this.mostrarPostagemPorID(id_postagem);
        }
    }
    mostrarTodasAsPostagensDaRedeSocialNaTela() {
        let lista_de_postagens = this._redeSocial.getRepositorioDePostagens().getPostagens();
        let lista_de_postagens_simples = [];
        let lista_de_postagens_avancadas = [];
        if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Lista) {
            let atual = lista_de_postagens;
            while (atual !== null) {
                if (atual.postagem instanceof PostagemAvancada) {
                    lista_de_postagens_avancadas.push(atual.postagem);
                }
                else {
                    lista_de_postagens_simples.push(atual.postagem);
                }
                atual = atual.proximo;
            }
        }
        else if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagensArray) {
            for (const postagem_atual of lista_de_postagens) {
                if (postagem_atual instanceof PostagemAvancada) {
                    lista_de_postagens_avancadas.push(postagem_atual);
                }
                else {
                    lista_de_postagens_simples.push(postagem_atual);
                }
            }
        }
        let numero_postagem_simples = 1;
        for (const postagem_atual of lista_de_postagens_simples) {
            console.log(` \n               *POSTAGEM ${numero_postagem_simples}* 
                     _________________________________________________________________________________________
                     | ID: ${postagem_atual.getId()}                        DATA:${postagem_atual.getData()}  |                   |
                     |________________________________________________________________________________________|
                     |>>>> AUTOR: @ ${postagem_atual.getPerfil().getNome()}                                   |
                     |>>>> TEXTO: ${postagem_atual.getTexto()}                                                |
                     |>>>> CURTIDAS: ${postagem_atual.getCurtida()}                                           |
                     |>>>> DESCURTIDAS: ${postagem_atual.getDescurtida()}                                     |
                     |________________________________________________________________________________________|

         `);
            numero_postagem_simples++;
        }
        let numero_postagem_avancada = 1;
        for (const postagem_atual of lista_de_postagens_avancadas) {
            console.log(`                \n *POSTAGEM AVANCADA${numero_postagem_avancada}* 
                     _________________________________________________________________________________________
                     | ID: ${postagem_atual.getId()}                        DATA:${postagem_atual.getData()}  |                  
                     |________________________________________________________________________________________|
                     |>>>> AUTOR: @ ${postagem_atual.getPerfil().getNome()}                                   |
                     |>>>> TEXTO: ${postagem_atual.getTexto()}                                                |
                     |>>>> CURTIDAS: ${postagem_atual.getCurtida()}                                           |
                     |>>>> DESCURTIDAS: ${postagem_atual.getDescurtida()}                                     |
                     |>>>> HASHTAGS:${postagem_atual.getHashtagEmString()}                                    |
                     |>>>> VISUALIZACOES RESTANTES:${postagem_atual.getVisualizacoesRestantes()}              |
                     |________________________________________________________________________________________|

         `);
            numero_postagem_avancada++;
        }
    }
    mostrarTodasAsPostagensDeUmPerfilNaTela(nome_usuario) {
        let consulta_pelo_usuario = this._redeSocial.getRepositorioDePerfis().consultarPorNome(nome_usuario);
        //FAIL FAST
        if (consulta_pelo_usuario == null) {
            console.log("usuario não encontrado!!!");
            return;
        }
        let lista_de_postagens = consulta_pelo_usuario.getPostagens();
        let lista_de_postagens_simples = [];
        let lista_de_postagens_avancadas = [];
        for (const postagem_atual of lista_de_postagens) {
            if (postagem_atual instanceof PostagemAvancada) {
                lista_de_postagens_avancadas.push(postagem_atual);
            }
            else {
                lista_de_postagens_simples.push(postagem_atual);
            }
        }
        let numero_postagem_simples = 1;
        for (const postagem_atual of lista_de_postagens_simples) {
            console.log(` \n               *POSTAGEM ${numero_postagem_simples}* 
                   _________________________________________________________________________________________
                   | ID: ${postagem_atual.getId()}                        DATA:${postagem_atual.getData()}  |                   |
                   |________________________________________________________________________________________|
                   |>>>> AUTOR: @ ${postagem_atual.getPerfil().getNome()}                                   |
                   |>>>> TEXTO: ${postagem_atual.getTexto()}                                                |
                   |>>>> CURTIDAS: ${postagem_atual.getCurtida()}                                           |
                   |>>>> DESCURTIDAS: ${postagem_atual.getDescurtida()}                                     |
                   |________________________________________________________________________________________|

       `);
            numero_postagem_simples++;
        }
        let numero_postagem_avancada = 1;
        for (const postagem_atual of lista_de_postagens_avancadas) {
            console.log(`                \n *POSTAGEM AVANCADA${numero_postagem_avancada}* 
                   _________________________________________________________________________________________
                   | ID: ${postagem_atual.getId()}                        DATA:${postagem_atual.getData()}  |                  
                   |________________________________________________________________________________________|
                   |>>>> AUTOR: @ ${postagem_atual.getPerfil().getNome()}                                   |
                   |>>>> TEXTO: ${postagem_atual.getTexto()}                                                |
                   |>>>> CURTIDAS: ${postagem_atual.getCurtida()}                                           |
                   |>>>> DESCURTIDAS: ${postagem_atual.getDescurtida()}                                     |
                   |>>>> HASHTAGS:${postagem_atual.getHashtagEmString()}                                    |
                   |>>>> VISUALIZACOES RESTANTES:${postagem_atual.getVisualizacoesRestantes()}              |
                   |________________________________________________________________________________________|

       `);
            numero_postagem_avancada++;
        }
    }
    mostrarPostagemPorID(id_postagem) {
        let consulta_pela_postagem = this._redeSocial.getRepositorioDePostagens().consultarPorID(id_postagem);
        //FAIL FAST
        if (consulta_pela_postagem == null) {
            console.log(`Não há postagem com o id ${id_postagem} !!!`);
        }
        else {
            if (consulta_pela_postagem instanceof PostagemAvancada) {
                console.log(`                \n *POSTAGEM AVANCADA* 
            _________________________________________________________________________________________________
            | ID: ${consulta_pela_postagem.getId()}                DATA:${consulta_pela_postagem.getData()}  |                  
            |________________________________________________________________________________________________|
            |>>>> AUTOR: @ ${consulta_pela_postagem.getPerfil().getNome()}                                   |
            |>>>> TEXTO: ${consulta_pela_postagem.getTexto()}                                                |
            |>>>> CURTIDAS: ${consulta_pela_postagem.getCurtida()}                                           |
            |>>>> DESCURTIDAS: ${consulta_pela_postagem.getDescurtida()}                                     |
            |>>>> HASHTAGS:${consulta_pela_postagem.getHashtagEmString()}                                    |
            |>>>> VISUALIZACOES RESTANTES:${consulta_pela_postagem.getVisualizacoesRestantes()}              |
            |________________________________________________________________________________________________|

              `);
            }
            else {
                console.log(` \n               *POSTAGEM * 
            _________________________________________________________________________________________________
            | ID: ${consulta_pela_postagem.getId()}                DATA:${consulta_pela_postagem.getData()}  |                   
            |________________________________________________________________________________________________|
            |>>>> AUTOR: @ ${consulta_pela_postagem.getPerfil().getNome()}                                   |
            |>>>> TEXTO: ${consulta_pela_postagem.getTexto()}                                                |
            |>>>> CURTIDAS: ${consulta_pela_postagem.getCurtida()}                                           |
            |>>>> DESCURTIDAS: ${consulta_pela_postagem.getDescurtida()}                                     |
            |________________________________________________________________________________________________|

               `);
            }
        }
    }
    curtirPostagem() {
        let id_postagem = input.question("Digite o ID da postagem:");
        while (isNaN(Number(id_postagem))) {
            console.log("valor invalido!!! Digite novamente.");
            id_postagem = input.question("Digite o ID da postagem:");
        }
        id_postagem = Number(id_postagem);
        console.log(`\n_________________________________
                   |      Curtir Postagens          |
                   |________________________________|
                   \n`);
        let consulta_pela_postagem = this._redeSocial.getRepositorioDePostagens().consultarPorID(id_postagem);
        //FAIL FAST
        if (consulta_pela_postagem == null) {
            console.log(`\nNão há postagem com o id ${id_postagem} !!!`);
        }
        else {
            console.log("----Postagem antes do like---------");
            this.mostrarPostagemPorID(id_postagem);
            consulta_pela_postagem.curtir();
            console.log("----Postagem apos o like---------");
            this.mostrarPostagemPorID(id_postagem);
        }
    }
    descurtirPostagem() {
        let id_postagem = input.question("Digite o ID da postagem:");
        while (isNaN(Number(id_postagem))) {
            console.log("valor invalido!!! Digite novamente.");
            id_postagem = input.question("Digite o ID da postagem:");
        }
        id_postagem = Number(id_postagem);
        console.log(`\n_________________________________
                    |      Descurtir Postagens       |
                    |________________________________|
          \n`);
        let consulta_pela_postagem = this._redeSocial.getRepositorioDePostagens().consultarPorID(id_postagem);
        //FAIL FAST
        if (consulta_pela_postagem == null) {
            console.log(`\nNão há postagem com o id ${id_postagem} !!!`);
        }
        else {
            console.log("----Postagem antes do Deslike---------");
            this.mostrarPostagemPorID(id_postagem);
            consulta_pela_postagem.descurtir();
            console.log("\n----Postagem apos o Deslike---------");
            this.mostrarPostagemPorID(id_postagem);
        }
    }
}
let repositorio_de_perfis = new RepositorioDePerfisLista();
let repositorio_de_postagens = new RepositorioDePostagens_Lista();
const redeSocial = new RedeSocial(repositorio_de_postagens, repositorio_de_perfis);
const app = new App(redeSocial);
app.exibirMenu();
