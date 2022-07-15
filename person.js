class porson{

	constructor(name , image){


		this.name = name ;
		this.image = image ;
		this.health = 100 ;
		this.damadg = 0 ;
		this.win = false ;
		this.lose = false ;
		this.clicks = 0 ;
		this.animy = {} ;
		this.missage = '' ;

	}

	box(){

		if(this.win == true){
			console.log('enugh you win');
		}else{
			this.clicks++ ;
			this.animy.health -=5 
			this.animy.damadg +=5;

			if(this.clicks >=10){
				this.finish(this.animy.name) ;
				console.log('finish him 000000000000');
			}

			if(this.animy.damadg == 100){
				this.animy.missage = 'ohhhh' ;
				this.missage = 'you win' ;
				this.changes(this.animy.name , false , true);
				console.log('he lose.......................');
				this.win = true ;
				this.animy.win = false ;
			}

		
			
			this.changes(this.animy.name);

			this.result();

			

			}
		
	}

	result(){
		var audio = new Audio('music/fight.mp3');
		audio.play();
		console.log(this.name +' is :' + this.clicks);
			console.log('animy damage :'+this.animy.damadg);
			console.log('animy health :'+this.animy.health);
	}

	changes(name , isHealthy = false , isMessage = false){

		if(isMessage){
			 document.getElementById(name)
		.getElementsByClassName("buttons")[0].textContent = 'ohhhh';

		 document.getElementById(this.name)
		.getElementsByClassName("buttons")[0].textContent = 'you win !';

		var audio1 = new Audio('music/die.mp3');
		
			audio1.play();
		}
		

		if(isHealthy){
			 document.getElementById(name)
		.getElementsByClassName("brogress")[0].style = `width:${this.health}%`;
		}else{
		document.getElementById(name)
		.getElementsByClassName("brogress")[0].style = `width:${this.animy.health}%`;
		}

	

	}

	healthy(){

		
		if(this.health >= 100){
			var audio1 = new Audio('music/monester.mp3');
		
			audio1.play();
		}else{
			this.health +=20 ;
			this.damadg -=20;

			if(this.health > 100 ){
				this.health = 100 ;
			}
			
			this.changes(this.name ,true );
			var audio = new Audio('music/eat.mp3');
			audio.play();

		}

		
	}

	fight(animy){
		this.animy = animy ;
	}



	test(){
		console.log(`my name is :${this.name}`);
	}

	finish(name){
		 document.getElementById(name)
		.getElementsByClassName("finish")[0].removeAttribute("hidden")
	}

	finishHim(){
		var audio1 = new Audio('music/come1.mp3');
			audio1.play();

		setTimeout(() => {

 	this.animy.health -=50 
		this.animy.damadg +=50;

		if(this.animy.health <= 0 ){
			this.changes(this.animy.name , false , true);
		}else{
			document.getElementById(this.name)
			.getElementsByClassName("finish")[0].setAttribute("hidden" , '');
			this.changes(this.animy.name);
			this.result();
		}
}, 5000);
		
			
		
		
	}



}

