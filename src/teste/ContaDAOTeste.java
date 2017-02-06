package teste;

import model.Conta;
import dao.ContaDAO;

public class ContaDAOTeste {

	public static void main(String[] args) throws Exception {
	    Conta conta = new Conta();
	    conta.setCpf("000.000.000-00");
	    conta.setNumero_agencia("0001");
	    conta.setNumero_conta("444455558888");

	    System.out.println("Salvando a Conta: " + conta.getNumero_agencia());
	    ContaDAO.salvarOuAtualizar(conta);

	  }

}
