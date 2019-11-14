new Vue({
	el: '#desafio',
	data: {
		vidaJogador: 100,
		ataqueJogador: Math.floor(Math.random() * 6 + 6),
		ataqueEspJogador: Math.floor(Math.random() * 6 + 8),
		curaJogador: Math.floor(Math.random() * 6 + 7),
		vidaMonstro: 100,
		ataqueMonstro: Math.floor(Math.random() * 4 + 8),
		logs: []
	},
	methods: {
		ataque() {
			this.ataqueJogador = Math.floor(Math.random() * 6 + 6);
			this.ataqueMonstro = Math.floor(Math.random() * 4 + 8);
			this.vidaMonstro = this.vidaMonstro - this.ataqueJogador;
			this.vidaJogador = this.vidaJogador - this.ataqueMonstro;
			this.registerLog('Ataque jogador:'+this.ataqueJogador, 'Ataque monstro:'+this.ataqueMonstro);
		},
		ataqueEspecial() {
			this.ataqueEspJogador = Math.floor(Math.random() * 6 + 8);
			this.ataqueMonstro = Math.floor(Math.random() * 4 + 8);
			this.vidaMonstro = this.vidaMonstro - this.ataqueEspJogador;
			this.vidaJogador = this.vidaJogador - this.ataqueMonstro;
			this.registerLog('Ataque especial jogador:'+this.ataqueEspJogador, 'Ataque monstro:'+this.ataqueMonstro);
		},
		cura() {
			this.curaJogador = Math.floor(Math.random() * 6 + 7);
			this.ataqueMonstro = Math.floor(Math.random() * 4 + 8);
			this.vidaJogador = this.vidaJogador + this.curaJogador;
			this.vidaJogador = this.vidaJogador - this.ataqueMonstro;
			this.registerLog('Cura jogador:'+this.curaJogador, 'Ataque monstro:'+this.ataqueMonstro);
		},
		desistir() {
			this.vidaMonstro = 100;
			this.vidaJogador = 100;
			this.logs = [];
		},
		registerLog(textJogador, textMonstro) {
			this.logs.unshift({textJogador, textMonstro});
		}
	},
	computed: {
		zerarVida() {
			return this.vidaJogador <= 0 ? this.vidaJogador = 0 : this.vidaJogador
		}
	}
})