package dto;

import java.util.Date;

public class Contato {

	private Integer id;
	private String nome;
	private String telefone;
	private String data;
	private String cpf;
	private Operadora operadora;
	private String cor;

	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public Operadora getOperadora() {
		return operadora;
	}
	public void setOperadora(Operadora operadora) {
		this.operadora = operadora;
	}
	public String getCor() {
		return cor;
//teste
	}
	public void setCor(String cor) {
		this.cor = cor;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
}
