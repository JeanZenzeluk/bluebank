package webService;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import model.Conta;

import com.google.gson.Gson;

import dao.ContaDAO;
import dto.ContaDTO;

@Path("/conta")
public class ContaService {
	
	@GET
	@Path("/contas")
	@Produces("application/json")
	public String listaContas() {
		String jsonRetorno = "";
		try {
			ArrayList<Conta> contas = new ArrayList<Conta>();
			
			ContaDAO dao = new ContaDAO();
			
			Gson gson = new Gson();
			System.out.println(gson.toJson(contas));
			jsonRetorno = gson.toJson(contas);
		}

		catch (Exception e) {
			System.out.println("Exception Error" + e); // Console
		}
		return jsonRetorno;
	}
	
	@GET
	@Path("/contas/{id:([0-9])*}")
	@Produces("application/json")
	public Response detalheContatao(@PathParam("id") Integer idConta) {
		String jsonRetorno = "";
		System.out.println("Chamou detalhaConta...");
		try {
			ArrayList<Conta> contas = new ArrayList<Conta>();
			ContaDAO dao = new ContaDAO();
			
			//contas = contas = (ArrayList<Conta>) dao.listar();
			
			Conta contaRetorno = null;
			
			for(Conta conta : contas){
				if(conta.getId().equals(idConta)){
					contaRetorno = conta;
					break;
				}
			}
			
			if(contaRetorno == null)
				throw new Exception();
			
			Gson gson = new Gson();
			jsonRetorno = gson.toJson(contaRetorno);
		}catch (Exception e) {
			System.out.println("Exception Error" + e); // Console
			 return Response.status(404).entity("Ops, Ocorreu um erro").type(jsonRetorno).build();
		}
		return Response.ok(jsonRetorno).build();
	}

	@POST
	@Produces("application/json")
	public Response postConta(String conta) {
		
		Gson gson = new Gson();
		ContaDTO transferencia = gson.fromJson(conta, ContaDTO.class);
		
		Conta contaOrigem = ContaDAO.getContaPorAgenciaEConta(transferencia.getAgenciaOrigem(), transferencia.getContaOrigem());
		Conta contaDestino = ContaDAO.getContaPorAgenciaEConta(transferencia.getAgenciaDestino(), transferencia.getContaDestino());
		
		if(contaOrigem != null && contaDestino != null){
			if(contaOrigem.getSaldo() != null && contaOrigem.getSaldo() >= transferencia.getValor()){
				//Efetuar transferência
			}
		}
		ResponseBuilder response = Response.ok();
        
		return response.build();
	}
	

}
