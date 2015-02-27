/*document.documentElement.innerHTML = 
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
	.replace(/Democratic-Donkeys/g, "Elephant-Donkeys");*/
var wordsReplaced = [];
var wordsReplacer = [];

var test = "witnesses,these dudes I know\nallegedly,kinda probably\npresident,garbage man\ngive,gib"; 
//^ this is where we reference the reading of file
var file = test.split(/[\n,]/);

for( var i = 0; i < file.length ; i+=2 ) {
 	wordsReplaced.push(file[i]);
 	wordsReplacer.push(file[i+1]);
}

for( var a = 0; a < wordsReplaced.length; a++ ) {
	var reg = new RegExp(wordsReplaced[a], "gi");
	if (a === 0) {
		var htmlReplaced = document.documentElement.innerHTML.replace(reg, wordsReplacer[a]);
	} else {
		htmlReplaced = htmlReplaced.replace(reg, wordsReplacer[a]);
	}
}
document.documentElement.innerHTML = htmlReplaced;

