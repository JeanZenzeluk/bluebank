package webService;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import com.google.gson.Gson;

import dto.Plataforma;
import dto.Tecnica;
import dto.Tipo;

@Path("/plataforma")
public class PlataformaService {
	
	
	@GET
	@Produces("application/json")
	public Response listaPlataformas() {
		String jsonRetorno = "";
		System.out.println("Chamou listaPlataformas...");
		try {
			Plataforma plataforma = new Plataforma();
			
			// TODO Cria o Mock
			plataforma = retornaMockPlataforma();
			
			Gson gson = new Gson();
			System.out.println(gson.toJson(plataforma));
			jsonRetorno = gson.toJson(plataforma);
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
	public Response listaPlataformasError() {
		System.out.println("Chamou listaPlataformasError...");
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
	public Response salvarPlataforma(String plataforma) {
		System.out.println("Chamou POST de salvarPlataforma...");
		try{
			Gson gson = new Gson();
			Plataforma plataformaNova = gson.fromJson(plataforma, Plataforma.class);
			
			//Aplicado para demonstração de erro
			if(plataformaNova.getNome().equals("teste erro"))
				throw new Exception();
			
			ResponseBuilder response = Response.ok();
	        return response.build();
		}catch (Exception e){
			ResponseBuilder response = Response.serverError();
	        return response.build();
		}
	}

	/**
	 * Cria mocks de Plataforma e retorna os mesmos
	 * 
	 * @return ArrayList<Contato> - Lista de Mocks
	 */
	public Plataforma retornaMockPlataforma() {
		
		Tipo tipo = new Tipo(2, "Desktop");
		Tecnica tecnica = new Tecnica(2, "Técnica Desktop");
		
		return new Plataforma("Plataforma 9/34", tipo, "TGF", tecnica, "Uma excelente plataforma retornada via GET.");
	}
}
