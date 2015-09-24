var A,B,C,D, Q, S;
var QuizDiv;
var rightAnswer;
var chosenQuestions = [];
var tempScore = 0;


var QAarray = [
	new QA(0,3,"You think you got this?","A", "I do...","No I don't","Potatoe"),
	new QA(1,4,"Bring me to life?","B", "K?","Wake me up!","Bring me lives","Gimme something to work with"),
	new QA(2,3,"Atleast I Hope","A", "YEAH.png","Jayce.png","YAhoo.png"),
	new QA(3,4,"this is four","A", "Jayce.png","Maybe.png","Que.png","Yatta.png"),
	new QA(2,3,"Eat shit","A", "YEAH.png","Jayce.png","YAhoo.png"),
	new QA(3,4,"Dear lord save me","A", "Jayce.png","Maybe.png","Que.png","Yatta.png"),
	new QA(2,3,"This aint good","A", "YEAH.png","Jayce.png","YAhoo.png"),
	new QA(3,4,"Come ON!","A", "Jayce.png","Maybe.png","Que.png","Yatta.png"),
	new QA(4,3,"Welp","A", "a.png","Jayce.png","YAhoo.png"),];


//Get all the Quiz-Element Out of the HTML
function QuizInit(){
	Q = g("Question");
	A = g("A");
	B = g("B");
	C = g("C");
	D = g("D");
	S = g("currentScore");
	ShowPersonia();
	NextQuestion();	
	

}
function NextQuestion(){
	var RandomQuestionNmbr = Math.floor((Math.random() * (QAarray.length - 1)) + 1);
	//First Question, Choose at random and Put it in the Used QuestionArray
	if(chosenQuestions.length == 0){
		InsertQuestion(RandomQuestionNmbr);
		chosenQuestions.push(RandomQuestionNmbr);
	}else if(chosenQuestions.length >= 5){
		//Bonus Question?
		NoQuestionsLeft();
		

	}else{
		//Choose a random number, Only use it if you 
		for(var i = 0; i < chosenQuestions.length;i++){
			if(chosenQuestions[i] == RandomQuestionNmbr){
				NextQuestion();
				break;
			}
			if(i == chosenQuestions.length - 1){
				if(chosenQuestions[i] != RandomQuestionNmbr){
					InsertQuestion(RandomQuestionNmbr);
					chosenQuestions.push(RandomQuestionNmbr);
					break;
				}
			}
		}
	}

}
//Visual Adding of the Question and Answers to HTML
function InsertQuestion(QuestionNumber){


	rightAnswer      = QAarray[QuestionNumber].GoodAnswer;
	Q.innerHTML     = QAarray[QuestionNumber].Question;
	A.innerHTML     = QAarray[QuestionNumber].AnswerA;
	B.innerHTML     = QAarray[QuestionNumber].AnswerB;
	C.innerHTML     = QAarray[QuestionNumber].AnswerC;
	D.innerHTML     = QAarray[QuestionNumber].AnswerD;

}

//Answered? is it the right Then we gain points and continue to the next question
function Answered(chosenAnswer){
	if(chosenAnswer.id.toString() == rightAnswer){
	    tempScore += 1;
	}else{
		tempScore -= 1;
	}
	S.innerHTML = tempScore.toString();
	NextQuestion();
}
// If there are no questions left
function NoQuestionsLeft(){
	QuizDiv= g("quizDiv");
	QuizDiv.style.display = "none";
	console.log(tempScore)
	AddPoints(tempScore);
	tempScore = 0;

	HidePersonia();
}
