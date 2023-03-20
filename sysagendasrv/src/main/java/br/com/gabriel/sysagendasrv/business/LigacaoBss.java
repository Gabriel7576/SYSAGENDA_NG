package br.com.gabriel.sysagendasrv.business;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.gabriel.sysagendasrv.dao.LigacaoDao;
import br.com.gabriel.sysagendasrv.domain.Ligacao;
import br.com.gabriel.sysagendasrv.domain.LigacaoId;

@Stateless
public class LigacaoBss {

	@PersistenceContext
	private EntityManager em;

	private LigacaoDao dao;

	@PostConstruct
	public void init() {
		dao = new LigacaoDao(em);
	}

	public Ligacao getEntity(LigacaoId ligacaoId) {

		return dao.getEntity(ligacaoId);
	}

	public List<Ligacao> getList() {

		return dao.getList();
	}

	public Ligacao add(Ligacao ligacao) {
		
		LigacaoId id = ligacao.getId();
		
		id.setCodLigacao(dao.getUltCodLigacao(id.getCodContato()) + 1);
		
		dao.add(ligacao);
		return ligacao;
	}
	
	public void remove(LigacaoId id) {
		
		dao.remove(id);
	}
	
	public Ligacao update(Ligacao ligacao) {
		
		dao.update(ligacao);
		return ligacao;
	}

}
