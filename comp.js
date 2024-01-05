
	var userChoice;
	var compChoice;
	var userPlay;	




	const play=document.getElementById("play");
	play.addEventListener("click",()=>{
		userInput();
	});
	function userInput(){
		
		let userInput=prompt("type X or O");
		if(userInput==="X" || userInput==="x"){
			userChoice="X";
			compChoice="O";

		}
		else{
			userChoice="O";
			compChoice="X";	
		}
		userPlay=1;
		
		playGame();
		
	}


	function playGame(){
		

		if(userPlay %2 ==1){
			
			
			let boxes=document.getElementsByClassName("boxMain");
			Array.from(boxes).forEach(e=>{
				let boxText=e.querySelector(".box");
				e.addEventListener("click",()=>{
					if(boxText.innerText===""){

						boxText.innerText=userChoice;
						checkWin();
						changeTurn();
						
					
					}

					
					
				});
			
			});

			
			
			
			

		}
		else{
			// computer play with auto generated value
			mathRandom();
			checkWin();
			
			
			
			
			
		}
		
	}



	function changeTurn(){
		
		// console.log("executing");
		
		if(userPlay%2 ==1){
			userPlay+=1;
			playGame();// turn declare
				
			

			
			
		}
		else{
			console.log("executin");
			userPlay+=1;
		}
		
			}
		
		
	

	function playComp(){
		let found=false;
		let ranVal=Math.floor(Math.random()*8);
		
		let boxes=document.getElementsByClassName("boxMain");
		Array.from(boxes).forEach(e =>{
			let boxText=e.querySelector(".box");
			let value=boxText.getAttribute("value");
			
			

			if(boxText.innerText==="" && value==ranVal){
				
				boxText.innerText=compChoice;
				console.log("accessed");
				found=true;
				changeTurn();

			}


			
			
		


		})
		if(found===false){
			console.log("not found ");
			mathRandom();
		}

		

	}

	// computer turn and the turn continue until computer find it's right move
	function mathRandom(){

		if(userPlay%2==0){
			console.log("executing", userPlay);
			playComp();
			
		}
		
	}




	// check win 
	const checkWin=()=>{
		let boxText=document.getElementsByClassName("box");
		let win=[
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[2,4,6],
			[0,4,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			];

		win.forEach(check =>{
			
			if(boxText[check[0]].innerText !== ""){
				if((boxText[check[0]].innerText === boxText[check[1]].innerText) && (boxText[check[2]].innerText === boxText[check[1]].innerText) ){
					
					alert("won");
					
					resetGame();
					userPlay=1;

					}
				

			}
			else{
				console.log("not won");
			}
			
		})
	}






	// reset
	
	const reset=document.getElementById("reset");
	reset.addEventListener("click",()=>{
		resetGame();
	});

	function resetGame(){
		let boxes=document.getElementsByClassName("boxMain");	
		Array.from(boxes).forEach(e =>{
			
			let boxText=e.querySelector(".box");
			boxText.innerText="";
			
	})}

	
	

	
