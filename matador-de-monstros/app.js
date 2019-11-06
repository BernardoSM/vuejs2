new Vue({
	el: '#desafio',
	data: {
		vidaJogador: 100,
		ataqueJogador: Math.floor(Math.random() * 6 + 6),
		ataqueEspJogador: Math.floor(Math.random() * 6 + 8),
		curaJogador: Math.floor(Math.random() * 6 + 7),
		vidaMonstro: 100,
		ataqueMonstro: Math.floor(Math.random() * 4 + 8),
		relatorio: []
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.efeitoCSS = this.efeitoCSS == 'destaque' 
					? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			setInterval(() => {
				this.largura++;
				this.progress = this.largura + '%';

				if(this.largura == 100){
					this.largura = 0;
				}
			}, 50)
		},
		ativarPerigo(event) {
			if(event.target.value == 'true'){
				this.perigoAlterar = 'perigo';
			}else if(event.target.value == 'false'){
				this.perigoAlterar = '';
			} 
		}
	}
})
