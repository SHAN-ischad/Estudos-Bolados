/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package generalizacao.trabalhourna;

/**
 *
 * @author iagov
 */
public class Candidato extends Pessoa{
    public String numeroVotacao;
    public String partido;
    
    public Candidato(String numeroVotacao, String partido, String nome, String cpf, int idade, String dataNasc, String estadoCivil){
        super(nome, cpf, idade, dataNasc, estadoCivil);
        this.partido = partido;
        this.numeroVotacao = numeroVotacao;
    }
    
    public String getPartido(){
        return this.partido;
    }
    
    public void setPartido(String partido){
         this.partido = partido;
    }
    
     public String getNumero(){
        return this.numeroVotacao;
    }
    
    public void setNumero(String numero){
         this.numeroVotacao = numero;
    }
}
