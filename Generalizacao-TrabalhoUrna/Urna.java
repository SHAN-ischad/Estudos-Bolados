
package projeto.urnaeletronica;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Urna {

    private Map<Integer, String> candidatos;
    private Map<Integer, Integer> votos;
    private boolean votacaoAtiva;

    public Urna() {
        candidatos = new HashMap<>();
        votos = new HashMap<>();
        votacaoAtiva = false;

        candidatos.put(10, "Ana Silva - Partido X");
        candidatos.put(20, "Carlos Souza - Partido Y");

        for (Integer numero : candidatos.keySet()) {
            votos.put(numero, 0);
        }
        votos.put(0, 0);
    }

    public void iniciarVotacao() {
        votacaoAtiva = true;
        System.out.println("Votação iniciada.");
    }

    public void encerrarVotacao() {
        votacaoAtiva = false;
        System.out.println("Votação encerrada.");
    }

    public void votar(int numeroCandidato) {
        if (!votacaoAtiva) {
            System.out.println("A votação não está ativa no momento.");
            return;
        }

        if (votos.containsKey(numeroCandidato)) {
            votos.put(numeroCandidato, votos.get(numeroCandidato) + 1);
            System.out.println("Voto computado com sucesso.");
        } else {
            System.out.println("Número de candidato inválido. Voto não computado.");
        }
    }

    public void exibirResultados() {
        System.out.println("===== RESULTADO DA VOTAÇÃO =====");
        for (Map.Entry<Integer, String> entry : candidatos.entrySet()) {
            int numero = entry.getKey();
            String nome = entry.getValue();
            int quantidade = votos.get(numero);
            System.out.println("Candidato " + nome + " (" + numero + "): " + quantidade + " votos");
        }
        System.out.println("Votos em branco: " + votos.get(0));
    }

    public void iniciarSimulacao() {
        Scanner scanner = new Scanner(System.in);
        iniciarVotacao();

        while (true) {
            System.out.print("Digite o número do candidato (0 para branco, -1 para encerrar): ");
            int numero = scanner.nextInt();
            if (numero == -1) {
                break;
            }
            votar(numero);
        }

        encerrarVotacao();
        exibirResultados();
        scanner.close();
    }
}
