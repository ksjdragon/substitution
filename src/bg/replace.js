/*
	document.documentElement.innerHTML = 
	document.documentElement.innerHTML
	.replace(/witnesses/g, "these dudes I know")
	.replace(/allegedly/g, "kinda probably")
	.replace(/new study/g, "tumblr post")
	.replace(/rebuild/g, "avenge")
	.replace(/space/g, "spaaaaaaaaaaaaaace")
	.replace(/Google Glass/g, "virtual boy")
	.replace(/car/g, "cat")
	.replace(/election/g, "eating contest")
	.replace(/president/g, "garbage man")
	.replace(/Russian/g, "Ruskie")
	.replace(/American/g, "Freedom Fighter")
	.replace(/give/g, "gib")
	.replace(/gave/g, "gibbed")
	.replace(/make/g, "mak")
	.replace(/made/g, "mak-ed")
	.replace(/mistake/g, "mistak")
	.replace(/game/g, "gam")
	.replace(/radioactive/g, "kinda dangerous")
	.replace(/Democratic Party/g, "Elephants")
	.replace(/Republican Party/g, "Donkeys")
	.replace(/Democratic-Donkeys/g, "Elephant-Donkeys");
	*/
var html = document.documentElement.innerHTML;
var wordsReplaced = [];
var wordsReplacer = [];
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};
//value of test is temporary
//TODO ADD IMPORTING OF FILE 
var test = "witnesses,these dudes I know\nallegedly,kinda probably\npresident,garbage man\ngive,gib\ngave,gibbed\nmake,mak\nmade,mak-ed\nDemocratic Party,Elephants\nRepublican Party,Donkey\nelection,eating contest"; 
var file = test.split(/[\n,]/);

for( var i = 0; i < file.length ; i+=2 ) {
 	wordsReplaced.push(file[i]);
 	wordsReplacer.push(file[i+1]);
}

for( var a = 0; a < wordsReplaced.length; a++ ) {
	var reg = new RegExp(wordsReplaced[a], "gi");
	if (a === 0) {
		var htmlReplaced = html.replace(reg, wordsReplacer[a]);
	} else {
		htmlReplaced = htmlReplaced.replace(reg, wordsReplacer[a]);
	}
}

for(var b = 0; b < wordsReplaced.length; b++) {
    var reg2 = new RegExp(wordsReplaced[b], "gi");
	if(html.match(reg2) !== null) {
		var amountFound = html.match(reg2);
	    var reg3 = new RegExp(wordsReplacer[b], "g");
	    var match;
	    var indexes = [];
        while (match = reg3.exec(htmlReplaced)) {
                 indexes.push([match.index, match.index+match[0].length]);
            }
	    for(var c = 0; c < amountFound.length; c++) {
			if (amountFound[c] === amountFound[c].toUpperCase()) {
    	    	for(var d = indexes[c][0]; d < indexes[c][1]; d++) {
    	    		var changeCase = htmlReplaced[d].toUpperCase();
    	    		htmlReplaced = htmlReplaced.replaceAt(d, changeCase);
    	    	}
    	    } else if (amountFound[c][0] === amountFound[c][0].toUpperCase()) {
			    var changeCase = htmlReplaced[indexes[c][0]].toUpperCase();
			    htmlReplaced = htmlReplaced.replaceAt(indexes[c][0], changeCase);
    	    }	
    	}  
	}
}

	
document.documentElement.innerHTML = htmlReplaced;
