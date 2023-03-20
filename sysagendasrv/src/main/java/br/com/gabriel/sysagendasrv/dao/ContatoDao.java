package br.com.gabriel.sysagendasrv.dao;

import java.util.List;

import javax.persistence.EntityManager;

import br.com.gabriel.sysagendasrv.domain.Contato;

public class ContatoDao {
	
	private EntityManager em;
	
	public ContatoDao(EntityManager em) {
		this.em = em;
	}
	
	public Contato getEntity(Integer codContato) {
		
		return em.find(Contato.class, codContato);
	}
	
	@SuppressWarnings("unchecked")
	public List<Contato> getList() {
		
		return em.createQuery("select o from Contato o order by codContato").getResultList();
	}
	
	public Integer getUtlCodContato() {
		
		return(Integer) em.createQuery("select max(codContato) from Contato").getSingleResult();
	}
	
	public void add(Contato contato) {
		
		em.persist(contato);
	}
	
	public void remove(Integer codContato) {
		
		em.remove(getEntity(codContato));
	}
	
	public void update(Contato contato) {
		
		em.merge(contato);
	}
	
	
}
