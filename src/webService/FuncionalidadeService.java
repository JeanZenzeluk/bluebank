package webService;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import com.google.gson.Gson;

import dto.Funcionalidade;
import dto.Tecnica;
import dto.Tipo;

@Path("/funcionalidade")
public class FuncionalidadeService {
	
	
	@GET
	@Produces("application/json")
	public Response listaFuncionalidades() {
		String jsonRetorno = "";
		System.out.println("Chamou listaFuncionalidades...");
		try {
			Funcionalidade funcionalidade = new Funcionalidade();
			
			// TODO Cria o Mock
			funcionalidade = retornaMockFuncionalidade();
			
			Gson gson = new Gson();
			System.out.println(gson.toJson(funcionalidade));
			jsonRetorno = gson.toJson(funcionalidade);
		}catch (Exception e) {
			System.out.println("Exception Error" + e); // Console
			ResponseBuilder response = Response.serverError();
	        return response.build();
		}
		return Response.ok(jsonRetorno, MediaType.APPLICATION_JSON).build();
	}
	
	@GET
	@Path("/geterror")
	@Produces("application/json")
	public Response listaFuncionalidadesError() {
		System.out.println("Chamou listaFuncionalidadesError...");
		try {
			throw new Exception();
		}catch (Exception e) {
			System.out.println("Exception Error" + e);
			ResponseBuilder response = Response.serverError();
	        return response.build();
		}
	}
	
	

	@POST
	@Produces("application/json")
	public Response salvarFuncionalidade(String funcionalidade) {
		System.out.println("Chamou POST de salvarFuncionalidade...");
		try{
			Gson gson = new Gson();
			Funcionalidade funcionalidadeNova = gson.fromJson(funcionalidade, Funcionalidade.class);
			
			//Aplicado para demonstração de erro
			if(funcionalidadeNova.getNome().equals("teste erro"))
				throw new Exception();
			
			ResponseBuilder response = Response.ok();
	        return response.build();
		}catch (Exception e){
			ResponseBuilder response = Response.serverError();
	        return response.build();
		}
	}

	/**
	 * Cria mocks de Funcionalidade e retorna os mesmos
	 * 
	 * @return ArrayList<Contato> - Lista de Mocks
	 */
	public Funcionalidade retornaMockFuncionalidade() {
		
		Tipo tipo = new Tipo(2, "Desktop");
		Tecnica tecnica = new Tecnica(2, "Técnica Desktop");
		
		return new Funcionalidade("Funcionalidade XPTO", tipo, "TGF", tecnica, "Uma excelente funcionalidade retornada via GET.");
	}
}
