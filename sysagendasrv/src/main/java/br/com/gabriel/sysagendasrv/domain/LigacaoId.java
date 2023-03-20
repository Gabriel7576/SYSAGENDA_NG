package br.com.gabriel.sysagendasrv.domain;
// Generated 18 de mar. de 2023 17:26:26 by Hibernate Tools 4.3.5.Final

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * LigacaoId generated by hbm2java
 */
@Embeddable
public class LigacaoId implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	
	private int codContato;
	private int codLigacao;

	public LigacaoId() {
	}

	public LigacaoId(int codContato, int codLigacao) {
		this.codContato = codContato;
		this.codLigacao = codLigacao;
	}

	@Column(name = "COD_CONTATO", nullable = false, precision = 6, scale = 0)
	public int getCodContato() {
		return this.codContato;
	}

	public void setCodContato(int codContato) {
		this.codContato = codContato;
	}

	@Column(name = "COD_LIGACAO", nullable = false, precision = 6, scale = 0)
	public int getCodLigacao() {
		return this.codLigacao;
	}

	public void setCodLigacao(int codLigacao) {
		this.codLigacao = codLigacao;
	}

}
