var A,B,C,D, Q;
var rightAnswer;
function QA(idNmbr, AmountOfAnswers, Question, GoodAnswer, AnswerA, AnswerB, AnswerC, AnswerD){
	this.idNmbr = idNmbr;
	this.AmountOfAnswers = AmountOfAnswers;
	this.Question = Question;
	this.AnswerA = AnswerA;
	this.AnswerB = AnswerB;
	if(AmountOfAnswers > 2){
		this.AnswerC = AnswerC;
		if(AmountOfAnswers == 4){
			this.AnswerD = AnswerD;
		}else{
			this.AnswerD = "";
		}
	}else{
		this.AnswerC = "";
		this.AnswerD = "";
	}
	this.GoodAnswer = GoodAnswer;

}

var QAarray = [
	new QA(0,3,"You think you got this?","A", "YEAH.png","Jayce.png","YAhoo.png"),
	new QA(1,4,"You think you got this?","A", "Jayce.png","Maybe.png","Que.png","Yatta.png"),
	new QA(2,3,"You think you got this?","A", "YEAH.png","Jayce.png","YAhoo.png"),
	new QA(3,4,"You think you got this?","A", "Jayce.png","Maybe.png","Que.png","Yatta.png"),
	new QA(4,3,"You think you got this?","A", "a.png","Jayce.png","YAhoo.png"),];

function g(x){
	var temp = document.getElementById(x);
	return temp;
}

function Init(){
	console.log(QAarray[0].AnswerA);
	Q = g("Question");
	A = g("AnswerA");
	B = g("AnswerB");
	C = g("AnswerC");
	D = g("AnswerD");
	if(D){
		NextQuestion();
	}
	

}
function NextQuestion(){
	var RandomQuestionNmbr = Math.floor((Math.random() * (QAarray.length - 1)) + 1);
	Question(RandomQuestionNmbr);

}
function Question(QuestionNumber){
	rightAnswer  = QAarray[QuestionNumber].GoodAnswer;
	Q.innerHTML  = QAarray[QuestionNumber].Question;
	A.innerHTML  = QAarray[QuestionNumber].AnswerA;
	B.innerHTML  = QAarray[QuestionNumber].AnswerB;
	C.innerHTML  = QAarray[QuestionNumber].AnswerC;
	D.innerHTML  = QAarray[QuestionNumber].AnswerD;

}

function Answered(chosenAnswer){
	console.log(chosenAnswer.value + " " + rightAnswer);
	if(chosenAnswer == rightAnswer){
		console.log("hue hue");

	}
}
window.addEventListener("load", Init, false);

