package petshopjava;

import java.util.Scanner;

public class Menu {

    Scanner scanner;
    private static Login login = Login.getInstance();

    public Menu() {
        scanner = new Scanner(System.in);
    }

    public void menuGerente() {
        //Substituindo as opções na classe Login.

        Gerente usuarioLogado = (Gerente) login.getUsuariologado();
        String matricula;
        boolean finalizar = true;
        while (finalizar) {
            //O método exibeMenuGerente()está abaixo e substitui as linhas
            //das opções que aparecem na tela.
            exibeMenuGerente();
            String opcao = scanner.next();
            //Os métodos getDadoMenu e getValorMenu estão abaixo
            //e representam a leitura das variáveis, a partir da opção escolhida.
            if (opcao.equals("1")) {
                String nome = getDadoMenu("Nome");
                matricula = getDadoMenu("Matricula");
                String senha = getDadoMenu("Senha");
                usuarioLogado.cadastraVendedor(nome, matricula, senha);
            } else if (opcao.equals("2")) {
                matricula = getDadoMenu("Matricula");
                usuarioLogado.removeUsuario(matricula);
            } else if (opcao.equals("3")) {
                usuarioLogado.gerarRelatorio();
            } else if (opcao.equals("4")) {
                matricula = getDadoMenu("Matricula");
                usuarioLogado.gerarRelatorioIndividual(matricula);
            } else if (opcao.equals("5")) {
                login.setUsuariologado(null);
            } else if (opcao.equals("6")) {
                if (usuarioLogado.fecharPrograma()) {
                    finalizar = false;
                }
                break;
            } else {
                System.out.println("Opção inválida. Digite uma nova opção.");
            }

        }
    }

    public void menuVendedor() {
        Vendedor usuarioLogado = (Vendedor) login.getUsuariologado();
        String matricula = usuarioLogado.getMatricula();
        boolean finalizar = true;
        while (finalizar) {
            exibeMenuVendedor();
            String opcao = scanner.next();
            if (opcao.equals("1")) {
                double valor = getValorMenu();
                String formaPagamento = getDadoMenu("Forma Pagamento");
                usuarioLogado.realizaVenda(valor, formaPagamento, matricula);
            } else if (opcao.equals("2")) {
                usuarioLogado.gerarRelatorio();
            } else if (opcao.equals("3")) {
                login.setUsuariologado(null);
            } else if (opcao.equals("4")) {
                if (usuarioLogado.fecharPrograma()) {
                    break;
                }
            } else {
                System.out.println("Opção inválida. Digite uma nova opção.");
            }
        }
    }

    //Métodos para leituras diferentes de Strings e Valores numéricos.
    public String getDadoMenu(String dado) {
        System.out.println("+-----------------------------+");
        System.out.println(String.format("+ %s ------------------+", dado));
        return scanner.next();

        // Para versões mais recentes:
        //System.out.println("+ %s ------------------+".formatted(dado));
        // Mais antigas:
        // System.out.println(String.format("+ %s ------------------+", dado));
    }

    public double getValorMenu() {
        System.out.println("+-----------------------------+");
        System.out.println("+ Valor ----------------------+");
        return scanner.nextDouble();
    }

    public void exibeBoasVindas() {
        System.out.println("===============================");
        System.out.println("+  Bem-vindo ao JAVA PETSHOP  +");
        System.out.println("+-----------------------------+");

    }

    public void menuInicial() {
        System.out.println("===============================");
        System.out.println("+  Escolha as opções abaixo  +");
        System.out.println("+-----------------------------+");
        System.out.println("+-----------------------------+");
        System.out.println("+1--Entrar---------");
        System.out.println("+2--Sair---------");
    }
    
      public int getDadoMenuInicial(int dado) {
        System.out.println("+-----------------------------+");
        System.out.println(String.format("+ %s ------------------+", dado));
        return scanner.nextInt();

        // Para versões mais recentes:
        //System.out.println("+ %s ------------------+".formatted(dado));
        // Mais antigas:
        // System.out.println(String.format("+ %s ------------------+", dado));
    }

    public void exibeMenuGerente() {
        System.out.println("===============================");
        System.out.println("+-- Escolha uma das opções  --+");
        System.out.println("+-----------------------------+");
        System.out.println("+ 1 - Cadastra vendedor ------+");
        System.out.println("+ 2 - Remove vendedor --------+");
        System.out.println("+ 3 - Relatorio de vendas ----+");
        System.out.println("+ 4 - Relatorio de v. ind ----+");
        System.out.println("+ 5 - Logout -----------------+");
        System.out.println("+ 6 - Sair   -----------------+");
        System.out.println("===============================");
    }

    public void exibeMenuVendedor() {
        System.out.println("===============================");
        System.out.println("+-- Escolha uma das opções  --+");
        System.out.println("+-----------------------------+");
        System.out.println("+ 1 - Realizar venda ---------+");
        System.out.println("+ 2 - Relatorio de vendas ----+");
        System.out.println("+ 3 - Logout -----------------+");
        System.out.println("+ 4 - Sair   -----------------+");
        System.out.println("===============================");
    }
}
