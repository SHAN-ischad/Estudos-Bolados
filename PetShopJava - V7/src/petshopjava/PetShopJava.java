/******* Versão 7 ******/
package petshopjava;

    
public class PetShopJava {
    
    static Login login = Login.getInstance();
    static Usuarios usuarios = Usuarios.getInstance();
    
    public static void main(String[] args) {
        usuarios.adicionaUsuario("Manuel", "man123", "1234", "Gerente");
        login.exibeLogin();
    }
    
}
