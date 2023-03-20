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

import br.com.gabriel.sysagendasrv.business.ContatoBss;
import br.com.gabriel.sysagendasrv.domain.Contato;

@Path("/contato")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ContatoEp {

	@EJB
	private ContatoBss contatoBss;

	@GET
	@Path("/{codContato}")
	public Contato getContato(@PathParam("codContato") Integer codContato) {

		return contatoBss.getEntity(codContato);
	}

	@POST
	public Contato add(Contato contato) {

		return contatoBss.add(contato);
	}

	@DELETE
	@Path("/{codContato}")
	public void remove(@PathParam("codContato") Integer codContato) {

		contatoBss.remove(codContato);
	}

	@GET
	@Path("/list")
	public List<Contato> getList() {

		return contatoBss.getList();
	}
	
	@PUT
	@Path("/{codContato}")
	public Contato update(Contato contato) {
		
		return contatoBss.update(contato);
	}
}
