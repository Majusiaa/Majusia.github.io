var tekst=document.getElementById('pytanie');
var nie=document.getElementById('przyciskNIE');

var tab=[
"Serio?",
"Napewno?",
"Ej no chodź...",
"Jesteś pewny???"
];

function zamianaTekstu(){
	var liczba=Math.floor(Math.random()*4);
	
	tekst.innerHTML=tab[liczba];
}

nie.addEventListener('click', zamianaTekstu);