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
public class Eleitor extends Pessoa{
 
   
    private boolean identificado;

    public boolean getIdentificado() {
        return identificado;
    }

    public void setIdentificado(boolean identificado) {
        this.identificado = identificado;
    }
    

    public Eleitor(boolean identificado, String nome, String cpf, int idade, String dataNasc, String estadoCivil) {
        super(nome, cpf, idade, dataNasc, estadoCivil);
        this.identificado = identificado;
    }
    
    
    public void apresentarDocumento(){
        System.out.println(nome + "apresentou documento ou e-Titulo.");
    }
    
    public void fornecerDadosPessoais(){
        System.out.println("Nome: " + nome + "CPF: " + cpf);
    }
    
    public void identificar(){
        apresentarDocumento();
        fornecerDadosPessoais();
        System.out.println("Eleitor identificado com sucesso. ");
    }
    
    public void votar(){
        if(identificado){
            System.out.println(nome + "realizou o voto com sucesso. ");
        }else{
            System.out.println("Eleitor ainda não identificado. Não pode votar. ");
        }
    }
}

    

