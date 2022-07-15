var naroto = new porson('naroto' , 'photo.png') ;
var susaki = new porson('saski' , 'photo.png') ;

naroto.fight(susaki);
susaki.fight(naroto);

susaki.healthy();


function start(){

	console.log('yesss');
	
	document.getElementsByClassName("start")[0].setAttribute("hidden" , '');
	var audio = new Audio('music/vandam.mp3');
	audio.play();
	
	
			
}