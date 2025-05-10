package generalizacao.trabalhourna;

import java.util.*;

public class Urna {
    private Map<Integer, Candidato> candidatos;
    private Map<Integer, Integer> votos;
    private Map<String, Eleitor> eleitores; // CPF -> Eleitor
    private boolean votacaoAtiva;

    public Urna() {
        candidatos = new HashMap<>();
        votos = new HashMap<>();
        eleitores = new HashMap<>();
        votacaoAtiva = false;

        Candidato c1 = new Candidato("10", "Partido X", "Ana Silva", "123.456.789-00", 45, "01/01/1978", "Solteira");
        Candidato c2 = new Candidato("20", "Partido Y", "Carlos Souza", "987.654.321-00", 50, "10/10/1974", "Casado");

        candidatos.put(Integer.parseInt(c1.getNumero()), c1);
        candidatos.put(Integer.parseInt(c2.getNumero()), c2);

        for (Integer numero : candidatos.keySet()) {
            votos.put(numero, 0);
        }
        votos.put(0, 0); // voto em branco

        // Eleitores cadastrados
        eleitores.put("111.111.111-11", new Eleitor(true,"João Silva", "111.111.111-11", 30, "01/01/1995", "Solteiro"));
        eleitores.put("222.222.222-22", new Eleitor(true,"Maria Oliveira", "222.222.222-22", 28, "15/05/1996", "Casada"));
    
    }

    public void iniciarVotacao() {
        votacaoAtiva = true;
        System.out.println("Votação iniciada.");
    }

    public void encerrarVotacao() {
        votacaoAtiva = false;
        System.out.println("Votação encerrada.");
    }

    public void votar(String cpfEleitor, int numeroCandidato) {
        if (!votacaoAtiva) {
            System.out.println("A votação não está ativa no momento.");
            return;
        }

        Eleitor eleitor = eleitores.get(cpfEleitor);
        if (eleitor == null) {
            System.out.println("Eleitor não encontrado. CPF inválido.");
            return;
        }

        if (!eleitor.getIdentificado()) {
            eleitor.identificar();
        }

        if (eleitor.getIdentificado()) {
            if (votos.containsKey(numeroCandidato)) {
                votos.put(numeroCandidato, votos.get(numeroCandidato) + 1);
                System.out.println("Voto computado com sucesso.");
            } else {
                System.out.println("Número de candidato inválido. Voto não computado.");
            }
        } else {
            System.out.println("Eleitor não está autorizado a votar.");
        }
    }

    public void exibirResultados() {
        System.out.println("\n===== RESULTADO DA VOTAÇÃO =====");
        for (Map.Entry<Integer, Candidato> entry : candidatos.entrySet()) {
            int numero = entry.getKey();
            Candidato candidato = entry.getValue();
            int quantidade = votos.get(numero);
            System.out.println("Candidato " + candidato.nome + " (" + numero + "): " + quantidade + " votos");
        }
        System.out.println("Votos em branco: " + votos.get(0));
    }

    public void iniciarSimulacao() {
        Scanner scanner = new Scanner(System.in);
        iniciarVotacao();

        while (true) {
            System.out.print("\nDigite seu CPF (ou 'sair' para encerrar): ");
            String cpf = scanner.nextLine();
            if (cpf.equalsIgnoreCase("sair")) {
                break;
            }

            System.out.print("Digite o número do candidato (0 para branco): ");
            int numero = scanner.nextInt();
            scanner.nextLine(); // limpar buffer

            votar(cpf, numero);
        }

        encerrarVotacao();
        exibirResultados();
        scanner.close();
    }
}
