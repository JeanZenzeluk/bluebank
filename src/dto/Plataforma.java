package dto;

public class Plataforma {
	
	private String nome;
	private Tipo tipo;
	private String identificacao;
	private Tecnica tecnica;
	private String descricao;
	
	public Plataforma(){
		
	}
	
	public Plataforma(String nome, Tipo tipo, String identificacao, Tecnica tecnica, String descricao){
		this.nome = nome;
		this.tipo = tipo;
		this.identificacao = identificacao;
		this.tecnica = tecnica;
		this.descricao = descricao;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Tipo getTipo() {
		return tipo;
	}
	public void setTipo(Tipo tipo) {
		this.tipo = tipo;
	}
	public String getIdentificacao() {
		return identificacao;
	}
	public void setIdentificacao(String identificacao) {
		this.identificacao = identificacao;
	}
	public Tecnica getTecnica() {
		return tecnica;
	}
	public void setTecnica(Tecnica tecnica) {
		this.tecnica = tecnica;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
}
