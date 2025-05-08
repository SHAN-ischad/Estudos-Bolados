/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package generalizacao.trabalhourna;

import java.util.Scanner;

/**
 *
 * @author iagov
 */
public class GeneralizacaoTrabalhoUrna {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Pessoa pessoa = new Pessoa("Julia", "9293939-222", 30, "30/10/96", "Solteiro");

        //cpf
        System.out.println("Digite seu cpf");
        pessoa.setCpf(sc.nextLine());
        pessoa.getCpf();
        sc.nextLine();

        //idade
        System.out.println("Digite sua idade");
        pessoa.setIdade(sc.nextInt());
        pessoa.getIdade();
        sc.nextLine();
        
        //estado civil
        System.out.println("Digite seu estado civil");
        pessoa.setEstadoCivil(sc.nextLine());
        pessoa.getEstadoCivil();
        sc.nextLine();
        
        
        //saida
        System.out.println(pessoa.Saudacao());
        
        sc.close();
    }

}
