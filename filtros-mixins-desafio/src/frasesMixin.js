export default {
	computed: {
		fraseComVirgulas() {
			return this.str1.split(' ').join(',')
		},
		fraseComTamanhos() {
			return this.str2.split(' ').map(p => `${p} (${p.length})`).join(' ')
		}
	}
}