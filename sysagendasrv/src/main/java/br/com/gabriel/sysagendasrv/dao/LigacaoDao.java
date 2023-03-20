package br.com.gabriel.sysagendasrv.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import br.com.gabriel.sysagendasrv.domain.Ligacao;
import br.com.gabriel.sysagendasrv.domain.LigacaoId;

public class LigacaoDao {

	private EntityManager em;

	public LigacaoDao(EntityManager em) {
		this.em = em;
	}

	public Ligacao getEntity(LigacaoId ligacaoId) {

		return em.find(Ligacao.class, ligacaoId);
	}

	@SuppressWarnings("unchecked")
	public List<Ligacao> getList() {

		Query query = em.createQuery("select o from Ligacao o");
		return query.getResultList();
	}

	public Integer getUltCodLigacao(Integer codContato) {

		return (Integer) em.createQuery("select nvl(max(id.codLigacao), 0) from Ligacao where id.codContato = " + codContato).getSingleResult();
	}

	public void add(Ligacao ligacao) {

		em.persist(ligacao);
	}
	
	public void remove(LigacaoId id) {
		
		em.remove(getEntity(id));
	}
	
	public void update(Ligacao ligacao) {
		
		em.merge(ligacao);
	}

}
