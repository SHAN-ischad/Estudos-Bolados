package petshopjava;

import java.util.ArrayList;
import java.util.List;


public final class Usuarios {
    private static Usuarios instance;
    List<Usuario> usuarios;
    
    
    public Usuarios(){
        this.usuarios = new ArrayList<>();
        //O cadastro do gerente Manuel foi para a classe Principal: PetShopJava.java    
    }
    
    //Método Adicionar usuário
    public Usuario adicionaUsuario(String nome, String matricula, String senha, String tipo){
        Usuario usuario;
        if(tipo.equals("Gerente")) {
                usuario = new Gerente(nome, matricula, senha);
                System.out.println("Gerente cadastrado com sucesso!");
        }else {
                usuario = new Vendedor(nome, matricula, senha);
                System.out.println("Vendedor cadastrado com sucesso!");
        }
        usuarios.add(usuario);
        return usuario;
    }
    //Método para indexar a matrícula
    public int indexof(String matricula){
        for(int i = 0; i < usuarios.size();i++){
            if(usuarios.get(i).getMatricula().equals(matricula)){
                return i;
            }
        }
        return -1;
    }
    
    //Método para implementar a vericação de login
    public Usuario checkCredenciais(String matricula, String senha){
        for(int i = 0; i < usuarios.size();i++){
            if(usuarios.get(i).getMatricula().equals(matricula)){
                if (usuarios.get(i).getSenha().equals(senha)){
                    return usuarios.get(i);
                }
            }
        }
        return null;
    }
     
    
    //Método para remover o usuário
    public void removeUsuario(String matricula){
        int indice = this.indexof(matricula);
        if(indice != -1){
            usuarios.remove(indice);
            System.out.println("Usuário removido com sucesso!");
        }else{
            System.out.println("Usuário não foi encontrado");
        }
    }
    //Método para listar os atuais usuários
    public List<Usuario> getUsuarios(){
        return this.usuarios;
    }
    //Método para instanciar usuários - Singleton.
    public static Usuarios getInstance(){
        if (instance == null){
            instance = new Usuarios();
        }
        return instance;
    }
    
    public static boolean fechar(){
        return false;
        
    }
    
}
