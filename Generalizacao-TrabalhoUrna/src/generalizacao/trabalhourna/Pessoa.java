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
public class Pessoa {
    
    public String nome;
    public String cpf;
    public int idade;
    public String dataNasc;
    public String estadoCivil;
    
    Pessoa(String nome,String cpf, int idade, String dataNasc, String estadoCivil){
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.dataNasc = dataNasc;
        this.estadoCivil = estadoCivil;
    }
    
    public String getCpf(){
        return this.nome;
    }
    
    public String setCpf(String cpf){
        return cpf = this.nome;
    }
    
    public int getIdade(){
        return this.idade;
    }
    
    public int setIdade( int idade){
        return idade = this.idade;
    }
    
    public String getEstadoCivil(){
        return this.estadoCivil;
    }
    
    public String setEstadoCivil(String estadoCivil ){
        return estadoCivil = this.estadoCivil;
    }
    
    public String Saudacao(){
        return String.format("Nome: %s, CPF: %s, Idade: %d, Data de Nascimento: %s, Estado Civil: %s"
                , this.nome,this.cpf, this.idade,  this.dataNasc,this.estadoCivil );
    }
    
}
