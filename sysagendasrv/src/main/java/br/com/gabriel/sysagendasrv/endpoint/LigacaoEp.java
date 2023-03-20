package br.com.gabriel.sysagendasrv.endpoint;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.com.gabriel.sysagendasrv.business.LigacaoBss;
import br.com.gabriel.sysagendasrv.domain.Ligacao;
import br.com.gabriel.sysagendasrv.domain.LigacaoId;

@Path("/ligacao")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LigacaoEp {

	@EJB
	private LigacaoBss ligacaoBss;

	@GET
	@Path("/{codContato}/{codLigacao}")
	public Ligacao getLigacao(@PathParam("codContato") Integer codContato,
			@PathParam("codLigacao") Integer codLigacao) {

		return ligacaoBss.getEntity(new LigacaoId(codContato, codLigacao));
	}

	@GET
	@Path("/list")
	public List<Ligacao> getList() {

		return ligacaoBss.getList();
	}

	@POST
	public Ligacao add(Ligacao ligacao) {

		return ligacaoBss.add(ligacao);
	}
	
	@DELETE
	@Path("/{codContato}/{codLigacao}")
	public void remove(@PathParam("codContato") Integer codContato,
			@PathParam("codLigacao") Integer codLigacao) {
		
		ligacaoBss.remove(new LigacaoId(codContato, codLigacao));
	}
	
	@PUT
	@Path("/{codContato}/{codLigacao}")
	public Ligacao update(Ligacao ligacao) {
		
		return ligacaoBss.update(ligacao);
	}

}
