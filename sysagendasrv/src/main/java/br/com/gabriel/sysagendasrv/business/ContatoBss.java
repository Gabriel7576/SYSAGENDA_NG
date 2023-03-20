package br.com.gabriel.sysagendasrv.business;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.gabriel.sysagendasrv.dao.ContatoDao;
import br.com.gabriel.sysagendasrv.domain.Contato;

@Stateless
public class ContatoBss {
	
	@PersistenceContext
	private EntityManager em;
	
	private ContatoDao dao;
	
	@PostConstruct
	public void init() {
		dao = new ContatoDao(em);
	}
	
	public List<Contato> getList() {
		
		return dao.getList();
	}
	
	public Contato getEntity(Integer codContato) {
		
		return dao.getEntity(codContato);
	}
	
	public Contato add(Contato contato) {
		
		contato.setCodContato(dao.getUtlCodContato() + 1);
		dao.add(contato);
		
		return contato;
	}
	
	public void remove(Integer codContato) {
		
		dao.remove(codContato);
	}
	
	public Contato update(Contato contato) {
		
		dao.update(contato);
		return contato;
	}
}
