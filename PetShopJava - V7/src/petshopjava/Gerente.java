package petshopjava;


public class Gerente extends Usuario implements IUsuario{

    
    public static Vendas vendas = Vendas.getInstance();
    
    Usuarios usuarios; //Chamada de usuarios
    
    
    
    public Gerente(String nome, String matricula, String senha) {
        super(nome, matricula, senha, "Gerente");
        this.usuarios = Usuarios.getInstance();   
    }
    
//Métodos vindos da classe usuários    
// Adicionar usuário
    public void cadastraVendedor(String nome, String matricula, String senha) {		
            usuarios.adicionaUsuario(nome, matricula, senha, "Vendedor");
	}
    
    // Remover usuário
    public void removeUsuario(String matricula) {
            usuarios.removeUsuario(matricula);
	}
    
    @Override
    public void gerarRelatorio(){
        vendas.gerarRelatorio();
    }

    public void gerarRelatorioIndividual(String matricula){
        vendas.gerarRelatorioIndividual(matricula);
    }
    public boolean fecharPrograma(){
        return false;
    }
}
