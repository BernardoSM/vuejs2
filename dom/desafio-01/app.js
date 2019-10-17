new Vue({
	el: '#desafio',
	data: {
		nome: 'Bernardo Simonassi',
		idade: 20,
		urlImagem: 'https://cartelskins.com.br/res/site/img/banner-ads.png'
	},
	methods: {
		multiplicarIdade: function(){
			var idadex3 = this.idade * 3;
			return idadex3;
		},
		numeroRandomico: function(){
			return Math.random(1);
		}
	}
})