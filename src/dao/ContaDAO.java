package dao;

import java.util.List;


import model.Conta;

import org.hibernate.Session;

import util.HibernateUtil;

/**
 * Classe utilizada para fazer realizar as operações de banco de dados sobre a
 * entity Conta.
 */
public final class ContaDAO {

	public static void salvarOuAtualizar(Conta conta) {
		Session s = HibernateUtil.getSessionFactory().getCurrentSession();
		if (conta.getId() != null) {
			s.clear();
		}
		s.beginTransaction();

		try {
			s.saveOrUpdate(conta);
			s.getTransaction().commit();
		} catch (Exception erro) {
			s.getTransaction().rollback();
		}
	}

	public static Conta getContaPorAgenciaEConta(String numeroAgencia, String numeroConta) {
		System.out.println("testeeee");
		Session s = HibernateUtil.getSessionFactory().getCurrentSession();
		s.beginTransaction();
		List<Conta> contas = (List<Conta>) s.createQuery(
				"From Conta where numero_agencia like '" + numeroAgencia
						+ "' and numero_conta like '" + numeroConta + "'")
				.list();
		
		if(contas != null){
			if(contas.size() > 0){
				return contas.get(0);
			}
		}
		return new Conta();
	}

}
