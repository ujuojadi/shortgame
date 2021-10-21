// console.log(mades);
	// const [{question}, {}, {questiontwo}] = mades;
	// console.log(question, {}, questiontwo);
	// let brown = mades.shift();
	// console.log(brown);
	// let brown;



	// console.log(made, index);
		// const{question, answers, correctAnswer} = made;
		// const{a, b, c} = answers;
		
		// console.log(question, a, b, c, correctAnswer);
		// let quest = (question.split('?').join('?'));
		// brown.push(quest);
		// console.log(brown)


		 // mades.forEach((made)=>{
	  //   const{question, answers, correctAnswer} = made;
	 	// 	 const {a, b, c} = answers;
	 	// 	 console.log(question, a, b, c, correctAnswer);
	 	// 	 let quest = question.split('?');
	 	// 	 	console.log(quest);
			//


let uls = document.querySelector('.uls');
 let h2 = document.querySelector('.second');
 let h5 = document.querySelector('.third');
let next = document.querySelector('#next');
let auto = document.querySelector('.auto');
const cont =document.querySelector("#yope");
const conts =document.querySelector("#nope");
const got =document.querySelector("#got");
const help =document.querySelector("#help");


let score = 0;
let gameover = false;

let questions=[
	{
		question: 'What is the S.I unit of Mass?',
		answers:{
			a:'KG',
		    b:'KM',
		    c:'CM',
		},
		
		correctAnswer: 'KG'
	},
	{
		question: 'Convert 500km/hr to m/s?',
		answers:{
			a:'120.79m/s',
			b:'166..79m/s',
			c:'138.79m/s',

		},
		
		correctAnswer:'138.79m/s'
	},
	{
		question: 'What is Newtons third law of motion?',
		answers:{
			a:'Force is the product of mass and acceleration',
			b:'For every reaction there must be an equal and opposing motion',
			c:'Force is the product of mass and velociy',

		},
		
		correctAnswer: 'For every reaction there must be an equal and opposing motion',
	}  
	
];
let arr = [];
const input = document.querySelectorAll("input[type='radio']")

const game= ()=>{
	let index = 0;
	
		next.addEventListener('click', function(){
		help.classList.add("crowl");	
		cont.style.display= "block";
 		auto.style.display = "none";
  		next.textContent = "NEXT";
  		h2.style.display = "block";
	     h5.textContent = '';
	    getme(questions, index);
	    if(!questions[index]){
		
		cont.style.display= "none";
		h2.textContent= '';
		next.textContent = "PLAY AGAIN";
		console.log("yeah");
		 index = -1;
		 score = 0;
		 } index++;
		
	    	console.log(index);
        })
        
       
        
	
	
}

game();



const getme = (book, index)=>{
	if(!book[index]){
		cont.style.display= "none";
		next.textContent = "PLAY AGAIN";
		auto.style.display = "block";
		if(score === questions.length){
		h5.textContent = ` YOU WIN, You scored ${score} out of ${questions.length}`;	
	}else{
       h5.textContent = ` You LOOSE, You scored ${score} out of ${questions.length}`;	
	}
		
		return;
	}

	
	const{question, answers, correctAnswer}= book[index];
	
	console.log(index);
	console.log(question);
	console.log(book);

	 const{a,b,c} = answers
	console.log(correctAnswer);
	
	
   document.querySelector('.first').innerHTML = question;
   document.querySelector('.uls').innerHTML = 
   `<div id="div"><input  type="radio" id ="kg" name="Mass">
          <label class="right" for="kg">${answers.a}</label></br></div>

           <div id="div"><input  type="radio" id ="km" name="Mass">
          <label class="right" for="km">${answers.b}</label></br></div>
          <div id="div"><input type="radio" id ="cm" name="Mass">
          <label class="right" for="cm">${answers.c}</label></br></div>`;

     const input = document.querySelectorAll("input[type='radio']");
     console.log(input);
     const label = document.querySelectorAll(".right");
      const div = document.querySelectorAll("#div");
     
    for(let i = 0; i<input.length; i++){
    	 
     	input[i].addEventListener('change', (e)=>{

     		console.log(e.target);
     		if(label[i].textContent ===correctAnswer){
     			men(input, label, div, correctAnswer);
     			console.log("right");
     			score++;
     			document.querySelector('.second').innerHTML = score;
     			console.log(score);
     			 h2.textContent = parseInt(score);
     			  div[i].classList.add("rite");


                  
     		}else{
     			 div[i].classList.add("wrung");
     			 men(input, label, div, correctAnswer);
     			console.log("wrong");

     		}
     	 })

     }

  }



 const men = (input, label, div, correctAnswer)=>{
     	input.forEach((inp, index)=>{
     		 inp.disabled = true;
            	const lal = label[index];
            	if(lal.textContent ===correctAnswer){
            		 div[index].classList.add("rite");
            		let me = (div[index]);
            		console.log(me);
            		return me;
            		
            	}
            	
        })
     }