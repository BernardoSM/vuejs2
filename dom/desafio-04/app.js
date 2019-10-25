new Vue({
	el: '#desafio',
	data: {
		efeitoCSS: 'destaque',
		efeitoAlterar: '',
		perigoAlterar: '',
		efeitoEstilo: 'width: 500px',
		progress: 0,
		largura: 0
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
