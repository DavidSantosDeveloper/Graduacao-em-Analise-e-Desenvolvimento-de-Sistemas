import { IRepositorioDePerfis } from "../interfaces/IRepositorioDePerfis.js"
import {IRepositorioDePostagens} from "../interfaces/IRepositorioDePostagens.js"

import {RepositorioDePerfisLista,Nodo} from "../Repositorio_Perfis/Versao_Lista_Encadeada/RepositorioDePerfis_Lista.js"
import { RepositorioDePostagensArray } from "../Repositorio_Postagens/Versao_Array/RepositorioDePostagens_Array.js";
import { RepositorioDePerfisArray } from "../Repositorio_Perfis/Versao_Array/RepositorioDePerfis_Array.js";
import {Perfil} from "../perfil/Perfil.js"
import {Postagem} from "../postagem/Postagem.js"
import {PostagemAvancada} from "../postagem/PostagemAvancada.js"
export {RedeSocial}

type relacao_Perfil_E_PostagensAvancadas={
    id_perfil:number
    postagensAvancadas:Postagem[]
}

class RedeSocial{
    private _RepositorioDePostagens: IRepositorioDePostagens;
    private _RepositorioDePerfis: IRepositorioDePerfis; 

    constructor(RepositorioDePostagens: IRepositorioDePostagens,RepositorioDePerfis: IRepositorioDePerfis){
        this._RepositorioDePostagens = RepositorioDePostagens;
        this._RepositorioDePerfis = RepositorioDePerfis;
    }
    getRepositorioDePerfis(){
        return this._RepositorioDePerfis
    }
    getRepositorioDePostagens(){
        return this._RepositorioDePostagens
    }
    incluirPerfil(perfil: Perfil):boolean{
        //FAIL FAST
        if(perfil.getId()!=undefined || perfil.getNome()!=undefined  || perfil.getEmail()!=undefined){
            return false
        }
        else{
             if(this._RepositorioDePerfis.consultar(perfil.getId(),perfil.getNome(),perfil.getEmail())==null){
                    this._RepositorioDePerfis.incluir(perfil)
                    return true
            }
            return false  
        }
    }
    consultarPerfil(id: number, nome: string, email: string): Perfil | null{
        let resultado_da_consulta=this._RepositorioDePerfis.consultar(id,nome,email)
        //FAIL FAST
        if(resultado_da_consulta==null){
            return null
        }  
        else{
            return resultado_da_consulta
        }

    }
    incluirPostagem(postagem: Postagem): boolean{
        //FAIL FAST
        if(postagem.getId()==undefined){
            return false
        }
        else{
            this._RepositorioDePostagens.incluir(postagem)
            return true
        }
    }
    consultarPostagens(id: number, texto: string, hashtag: string, perfil: Perfil): Postagem[]{
        return this._RepositorioDePostagens.consultar(id,texto,hashtag,perfil)
    }
    curtir(id_Postagem: number){
        let resultado_da_consulta=this._RepositorioDePostagens.consultarPorID(id_Postagem)
        //FAIL FAST
        if(resultado_da_consulta==null){
            return
        }
        else{
            resultado_da_consulta.curtir()
        }

    }
    descurtir(id_Postagem: number){
        let resultado_da_consulta=this._RepositorioDePostagens.consultarPorID(id_Postagem)
        //FAIL FAST
        if(resultado_da_consulta==null){
            return
        }
        else{
            resultado_da_consulta.descurtir()
        }

    }

    decrementarVisualizacoes(postagem: PostagemAvancada): void{
        //FAIL FAST
        if(postagem.getVisualizacoesRestantes()<0){
            return
        }
        postagem.decrementarVisualizacoes()
    }

    exibirPostagensPorPerfil(id_perfil: number): Postagem[] | null{
        let resultado_da_consulta_pelo_perfil=this._RepositorioDePerfis.consultar(id_perfil)
        
        let postagens_do_perfil:Postagem[]=[]
        let postagens_que_ainda_podem_ser_exibidas:Postagem[]=[]
        //FAIL FAST
        if(resultado_da_consulta_pelo_perfil==null){
            return null
            
        }
        else{
            postagens_do_perfil=resultado_da_consulta_pelo_perfil.getPostagens()

            for (const postagem_atual of postagens_do_perfil) {
                if(postagem_atual instanceof PostagemAvancada){
                    this.decrementarVisualizacoes(postagem_atual)
                }
            }

            for (const postagem_atual of postagens_do_perfil) {
                //FAIL FAST
                if(postagem_atual instanceof PostagemAvancada){
                    if(postagem_atual.getVisualizacoesRestantes()>0){
                        postagens_que_ainda_podem_ser_exibidas.push(postagem_atual)
                    }
                }
                else{
                    postagens_que_ainda_podem_ser_exibidas.push(postagem_atual)
                }
            }
            return postagens_que_ainda_podem_ser_exibidas

        }
    }

    exibirPostagensPorHashtag(hashtag: string): relacao_Perfil_E_PostagensAvancadas[] | null{
        

        let postagens_que_ainda_podem_ser_exibidas:relacao_Perfil_E_PostagensAvancadas[]=[]

        if(this._RepositorioDePerfis instanceof RepositorioDePerfisLista){
            let atual:Nodo = (<RepositorioDePerfisLista>this._RepositorioDePerfis).getCabeca();
            while (atual !== null) {
                for (const postagem_atual_do_perfil of atual.perfil.getPostagens()) {
                    if(postagem_atual_do_perfil instanceof PostagemAvancada){
                        if(postagem_atual_do_perfil.getVisualizacoesRestantes()>0){
                            postagem_atual_do_perfil.decrementarVisualizacoes()
                            postagens_que_ainda_podem_ser_exibidas.push({id_perfil:atual.perfil.getId(),postagensAvancadas:[postagem_atual_do_perfil]})
                        }
                    }
                    else{
                        postagens_que_ainda_podem_ser_exibidas.push({id_perfil:atual.perfil.getId(),postagensAvancadas:[postagem_atual_do_perfil]})
                    } 
                }
                
                atual = atual.proximo;
            }

        }

        else if(this._RepositorioDePerfis instanceof RepositorioDePerfisArray){
            for (const perfil_atual of this._RepositorioDePerfis.getPerfis()) {
                for (const postagem_atual of perfil_atual.getPostagens()) {
                    if(postagem_atual instanceof PostagemAvancada){
                        if(postagem_atual.getVisualizacoesRestantes()>0){
                            postagem_atual.decrementarVisualizacoes()
                            postagens_que_ainda_podem_ser_exibidas.push({id_perfil:perfil_atual.getId(),postagensAvancadas:[postagem_atual]})
                        }
                    }
                    else{
                        postagens_que_ainda_podem_ser_exibidas.push({id_perfil:perfil_atual.getId(),postagensAvancadas:[postagem_atual]})
                    } 
                }
            }
        }
          
        
        return postagens_que_ainda_podem_ser_exibidas
        
    }

    
}
