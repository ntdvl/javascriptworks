var quotes = [
	"Lâla lâtif lâleli lâmbasını lâcivert lâke lâvabodan nâzik, nâdide şefkâte verdi.",
	"Davulcu dede dışarıklı dikişçiyi dolandırırken dönemecin duvarından düştü",
	"Şamlı, şemsiyeli, şıracı,şişko, şoför, şölende, şurupçuları şüphelendirdi.",
	"Sandıklıda sepetleri sıralı simitçi sofrada sökülen sucukları süpürdü.",
	"Sandıklıda sepetleri sıralı simitçi sofrada sökülen sucukları süpürdü.",
	]

function newQoute() {

	var randomNumber = Math.floor(Math.random() * quotes.length);
	document.getElementById('test').innerHTML = quotes[randomNumber];
}

newQoute();