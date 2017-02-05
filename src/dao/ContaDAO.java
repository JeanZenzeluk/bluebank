package dao;

import java.util.List;

import javax.swing.JOptionPane;

import model.Conta;

import org.hibernate.Criteria;
import org.hibernate.Session;

import util.HibernateUtil;


/**
 * Classe utilizada para fazer realizar as operações de banco de dados sobre a entity Conta.
 */
public class ContaDAO {

	

	  public void salvarOuAtualizar(Conta conta) {
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
	            JOptionPane.showMessageDialog(null, "Houve um erro na execução ao tentar Salvar ou Atualizar" + erro, "Erro ao salvar ou Atualizar: ", JOptionPane.ERROR_MESSAGE);
	        }
	    }

	    public void excluir(int id) {

	        Session s = HibernateUtil.getSessionFactory().getCurrentSession();

	        s.beginTransaction();
	        Conta c = null;

	        try {
	            c = (Conta) s.load(Conta.class, id);
	            s.delete(c);

	            s.getTransaction().commit();
	        } catch (Exception erro) {
	            s.getTransaction().rollback();
	            JOptionPane.showMessageDialog(null, "Houve um erro ao excluir", "Erro ao excluir", JOptionPane.ERROR_MESSAGE);
	        }
	    }

	    public List<Conta> listar() {

	        Session s = HibernateUtil.getSessionFactory().getCurrentSession();
	        s.beginTransaction();

	        Criteria critConta = s.createCriteria(Conta.class);
	        List<Conta> conta = critConta.list();
	        return conta;
	    }

	    public List<Conta> listarPorCPF(String filtro) {

	        Session s = HibernateUtil.getSessionFactory().getCurrentSession();
	        s.beginTransaction();
	        List<Conta> conta = (List<Conta>) s.createQuery("From Conta where cpf_cnpj like '" + filtro + "%'").list();
	        return conta;
	    }

	    public List<Conta> listarporID(String filtro) {

	        Session s = HibernateUtil.getSessionFactory().getCurrentSession();
	        s.beginTransaction();

	        List<Conta> conta = (List<Conta>) s.createQuery("From Conta where id= " + filtro).list();
	        return conta;
	    }

}
