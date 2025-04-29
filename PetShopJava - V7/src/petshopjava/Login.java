package petshopjava;

public final class Login {

    private static Login instance;
    private static Menu menus = new Menu();
    private static Usuarios usuarios = Usuarios.getInstance();
    private Usuario usuarioLogado;
    public boolean finalizar = true;
    public boolean continuar = false;
    public void exibeLogin() {

        while (finalizar) {
            menus.menuInicial();
            int dado = 0;
            int sair = menus.getDadoMenuInicial(dado);
            if(sair == 1){
                finalizar = false;
                 continuar = true;
            }else if (sair == 2){
               finalizar = false;
               continuar = false;
            }
            while (continuar) {
                menus.exibeBoasVindas();
                String matricula = menus.getDadoMenu("Matricula");
                String senha = menus.getDadoMenu("Senha");
                boolean retornoLogin = this.realizaLogin(matricula, senha);
                if (retornoLogin) {
                    if (this.usuarioLogado.getTipo().equals("Gerente")) {
                        menus.menuGerente();
                    } else if (this.usuarioLogado.getTipo().equals("Vendedor")) {
                        menus.menuVendedor();
                    }
                }
            }

        }
    }

    public boolean realizaLogin(String matricula, String senha) {

        Usuario usuario = usuarios.checkCredenciais(matricula, senha);

        if (usuario != null) {
            this.usuarioLogado = usuario;
            System.out.println("Login realizado com sucesso!!!");
            return true;
        }
        System.out.println("Credenciais inválidas");
        return false;

    }

    public Usuario getUsuariologado() {
        return usuarioLogado;
    }

    public void setUsuariologado(Usuario usuarioLogado) {
        this.usuarioLogado = usuarioLogado;
    }

    public static Login getInstance() {
        if (instance == null) {
            instance = new Login();
        }
        return instance;
    }

}
