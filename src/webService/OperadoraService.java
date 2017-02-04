package webService;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.google.gson.Gson;

import dto.Contato;
import dto.Operadora;

@Path("/operadora")
public class OperadoraService {
	
	@GET
	@Path("/operadoras")
	@Produces("application/json")
	public String listaOperadoras() {
		String jsonRetorno = "";
		System.out.println("Chamou listaOperadoras...");
		try {
			ArrayList<Operadora> operadoras = null;

			// TODO Cria o Mock
			operadoras = retornaMockOperadora();

			Gson gson = new Gson();
			System.out.println(gson.toJson(operadoras));
			jsonRetorno = gson.toJson(operadoras);
		}

		catch (Exception e) {
			System.out.println("Exception Error" + e); // Console
		}
		return jsonRetorno;
	}

	/**
	 * Cria mocks de Operadora e retorna os mesmos
	 * @return ArrayList<Operadora> - Lista de Mocks
	 */
	public ArrayList<Operadora> retornaMockOperadora() {
		
		ArrayList<Operadora> operadoras = new ArrayList<Operadora>();

		Operadora op1 = new Operadora();
		op1.setCodigo(14);
		op1.setCategoria("Celular");
		op1.setNome("Oi");
		op1.setPreco(2);
		
		Operadora op2 = new Operadora();
		op2.setCodigo(15);
		op2.setCategoria("Celular");
		op2.setNome("Vivo");
		op2.setPreco(1);
		
		Operadora op3 = new Operadora();
		op3.setCodigo(41);
		op3.setCategoria("Celular");
		op3.setNome("TIM");
		op3.setPreco(3);
		
		Operadora op4 = new Operadora();
		op4.setCodigo(25);
		op4.setCategoria("Fixo");
		op4.setNome("GVT");
		op4.setPreco(2);
		
		Operadora op5 = new Operadora();
		op5.setCodigo(21);
		op5.setCategoria("Fixo");
		op5.setNome("Embratel");
		op5.setPreco(1);
		
		operadoras.add(op1);
		operadoras.add(op2);
		operadoras.add(op3);
		operadoras.add(op4);
		operadoras.add(op5);
		
		return operadoras;
	}

}
