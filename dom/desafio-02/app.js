new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
    	alerta(){
    		alert();
    	},
    	armazenaValor(e){
    		this.valor = e.target.value;
    	}
    }
})