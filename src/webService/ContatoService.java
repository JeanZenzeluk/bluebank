package webService;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import com.google.gson.Gson;

import dto.Contato;
import dto.Operadora;

@Path("/contato")
public class ContatoService {
	
	@GET
	@Path("/contatos")
	@Produces("application/json")
	public String listaContatos() {
		String jsonRetorno = "";
		System.out.println("Chamou listaContatos...");
		try {
			ArrayList<Contato> contatos = new ArrayList<Contato>();
			
			// TODO Cria o Mock
			contatos = retornaMockContato();
			
			Gson gson = new Gson();
			System.out.println(gson.toJson(contatos));
			jsonRetorno = gson.toJson(contatos);
		}

		catch (Exception e) {
			System.out.println("Exception Error" + e); // Console
		}
		return jsonRetorno;
	}
	
	@GET
	@Path("/contatos/{id:([0-9])*}")
	@Produces("application/json")
	public Response detalheContatao(@PathParam("id") Integer idContato) {
		String jsonRetorno = "";
		System.out.println("Chamou detalhaContato...");
		try {
			ArrayList<Contato> contatos = new ArrayList<Contato>();
			
			// TODO Cria o Mock
			contatos = retornaMockContato();
			
			Contato contatoRetorno = null;
			
			for(Contato contato : contatos){
				if(contato.getId().equals(idContato)){
					contatoRetorno = contato;
					break;
				}
			}
			
			if(contatoRetorno == null)
				throw new Exception();
			
			Gson gson = new Gson();
			jsonRetorno = gson.toJson(contatoRetorno);
		}catch (Exception e) {
			System.out.println("Exception Error" + e); // Console
			 return Response.status(404).entity("Ops, Ocorreu um erro").type(jsonRetorno).build();
		}
		return Response.ok(jsonRetorno).build();
	}

	@POST
	@Produces("application/json")
	public Response postContato(String contato) {
		System.out.println("Chamou postContato");
		
		Gson gson = new Gson();
		Contato contatoNovo = gson.fromJson(contato, Contato.class);
		
		ResponseBuilder response = Response.ok();
        
		return response.build();
	}

	/**
	 * Cria mocks de Contato e retorna os mesmos
	 * 
	 * @return ArrayList<Contato> - Lista de Mocks
	 */
	public ArrayList<Contato> retornaMockContato() {
		SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");

		ArrayList<Contato> contatos = new ArrayList<Contato>();

		Contato c1 = new Contato();
		c1.setId(1);
		c1.setData(df.format(new Date()));
		c1.setNome("Bruno");
		c1.setTelefone("9999-8877");
		c1.setCpf("888.555.777-88");
		c1.setCor("#FA8072");
		Operadora op1 = new Operadora();
		op1.setNome("Oi");
		op1.setCategoria("Celular");
		op1.setCodigo(14);

		c1.setOperadora(op1);

		Contato c2 = new Contato();
		c2.setId(2);
		c2.setData(df.format(new Date()));
		c2.setNome("Ana");
		c1.setCpf("888.555.777-77");
		c2.setTelefone("9999-8855");
		c2.setCor("#87CEFA");
		Operadora op2 = new Operadora();
		op2.setNome("TIM");
		op2.setCategoria("Celular");
		op2.setCodigo(41);

		c2.setOperadora(op2);

		Contato c3 = new Contato();
		c3.setId(3);
		c3.setData(df.format(new Date()));
		c3.setNome("Pedro");
		c1.setCpf("888.555.777-22");
		c3.setTelefone("9999-7855");
		c3.setCor("#FFD700");
		Operadora op3 = new Operadora();
		op3.setNome("GVT");
		op3.setCategoria("Fixo");
		op3.setCodigo(25);

		c3.setOperadora(op3);

		contatos.add(c1);
		contatos.add(c2);
		contatos.add(c3);

		return contatos;
	}

}
