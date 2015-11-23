var A,B,C,D, Q, S, T;
var QuizDiv;
var rightAnswer;
var chosenQuestions = [];
var tempScore = 0;

var CharacterX;
var images = {};
var context;
var charX = 0;
var totalResources = 1;
var numResourcesLoaded = 0;
var fps = 30;
var speed = 300;

//All the Questions from the array
var QAarray = [
	new QA(0,2,"Moet je energy drinken voor de wedstrijd?","B","Ja ze want je hebt moet jezelf wil bijvullen met energy","Nee want de suikerkick en caffeine is tijdelijk"),
	new QA(1,4,"Waar werd het wk 1994 gehouden?","D", "Spanje", "Mexico?", "Brazilie", "Verenigde staten"),
	new QA(2,3, "Van hoever word een penalty gemaakt", "A", "11 meter", "5 meter", "pittig ver"),
	new QA(3,4,"Wanneer is het buitenspel","C", "Wanneer de bal buiten het stadion valt","Wanneer iemand de bal met zijn handen meeneemt","Wanneer de bal langs de buitelijn valt","Weet niet"),
	new QA(4,3,"Hoeveel teamleden zijn er in een elftal","C", "9","4","11"),
	new QA(5,4,"Hoeveel spelers zitten op de bank","A", "10+","10","3","1"),
	new QA(6,3,"Hoeveel gele kaarten mag een speler maximaal krijgen","A", "2","5","11"),
	new QA(7,4, "Wat doet een rode kaart", "A", "De slachtoffer mag geen vrije trap meer maken", "De slachtoffer mag deze en de volgende wedstrijd niet meer meedoen", "Hij verliest zijn fanclub", "Hij mag niet meer douchen"),
	new QA(8, 3, "Wat is de beste maaltijd voor supporters", "A", "PATAT lekker makkelijk", "Spaghetti Vol met Koolydraten", "VLEES VLEES VLEES"), ];



//Get all the Quiz-Element Out of the HTML
function QuizInit(){
	Q = g("Question");
	A = g("A");
	B = g("B");
	C = g("C");
	D = g("D");
	S = g("QuizScore");
	T = g("QuizTime");
	loadImage("Heads/Head");
	loadImage("Bodies/Body");
	loadImage("Feets/Feet");
	context = g2d("QuizProgress");
	NextQuestion();
	HidePersonia();
	

}
function NextQuestion() {
    if (tempScore < 1) {
        S.innerHTML = 0;
    } else {
        S.innerHTML = tempScore + ",000";

    }
	var RandomQuestionNmbr = Math.floor((Math.random() * (QAarray.length - 1)) + 1);
	//First Question, Choose at random and Put it in the Used QuestionArray
	if(chosenQuestions.length == 0){
		InsertQuestion(RandomQuestionNmbr);
		chosenQuestions.push(RandomQuestionNmbr);
	}else if(chosenQuestions.length >= 5){
		//----Bonus Question?
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
    showAllAnswers(["C","D"]);
	rightAnswer     = QAarray[QuestionNumber].GoodAnswer;
	Q.innerHTML     = QAarray[QuestionNumber].Question;
	A.innerHTML     = QAarray[QuestionNumber].AnswerA;
	B.innerHTML     = QAarray[QuestionNumber].AnswerB;
	C.innerHTML     = QAarray[QuestionNumber].AnswerC;
	D.innerHTML     = QAarray[QuestionNumber].AnswerD;

	if (QAarray[QuestionNumber].AnswerD == "") {
	    var Ac = g("D");
	    Ac.style.display = "none";
	    if (QAarray[QuestionNumber].AnswerC == "") {
	        Ac = g("C");
	        Ac.style.display = "none";

	    }
	}

}

function showAllAnswers(y) {
    var i = 0;
    for(i;i < y.length;i++){
        var Ac = g(y[i]);
        Ac.style.display = "block";
    }
    if(i == y.length){
        i = 0;	
    }
}

//Answered? is it the right Then we gain points and continue to the next question
function Answered(chosenAnswer){
	if(chosenAnswer.id.toString() == rightAnswer){
	    tempScore += 1;
	}else{
	    tempScore += 1;
	}
	NextQuestion();
}
// If there are no questions left
function NoQuestionsLeft(){
    QuizDiv = g("answerBox");
    QuizDiv.style.display = "none";
	AddPoints(tempScore);
	tempScore = 0;
	QuizDiv = g("QuizEnding");
	QuizDiv.style.display = "block";
	var i = 0;
	for (i; i < chosenQuestions.length; i++) {
	    n = chosenQuestions[i];
        console.log(n.toString())
	    ACreateDiv("EndQuestion" + i, QAarray[n].Question, "QuizEnding")
	    ModifyDiv("EndQuestion" + i, "class", "EndQuestion")
	    ModifyDiv("EndQuestion" + i, "onmouseover", "ShowEndAnswer(" + n + ")")
	}
	HidePersonia();
}

function ShowEndAnswer(QuestionId) {
    Q.innerHTML = QAarray[QuestionId].AnswerA;
}

function ModifyDiv(targetDiv, element, value) {
    r = g(targetDiv);
    r.setAttribute(element, value);
}
function ACreateDiv(divName, value, Parent, r) {
    var r = document.createElement(divName);
    r.setAttribute("id", divName)
    r.setAttribute("id", divName)
    if (value != null) {
        var t = document.createTextNode(value);
        r.appendChild(t);
    }
    if (Parent === "body") {
        document.body.appendChild(r);
    } else{
        g(Parent).appendChild(r);
    }

}
//checks Position from character and position it should stand
function ScoreDefiner(positionXMultiplier) {
    var x = positionXMultiplier * speed;
    if (charX < x) {
        charX += 10;

    }

}
//Loads Targetimage that can be used
function loadImage(name) {
    images[name] = new Image();
    images[name].onload = function () {
        resourceLoaded();
    }
    images[name].src = "Images/" + name + ".png";
 
}


//The frames will move only when all images are loaded
function resourceLoaded() {
    numResourcesLoaded += 1;
    if (numResourcesLoaded === totalResources) {
        setInterval(redraw, 1000 / fps);
    }
}

//draw the targetimages
function redraw() {
    var x = charX;

    context.canvas.width = context.canvas.width;

    context.drawImage(images["Feets/Feet"], x + 0, -10);
    context.drawImage(images["Bodies/Body"], x + 0,-10);
    context.drawImage(images["Heads/Head"], x + 0,-10);
    ScoreDefiner(tempScore);
}


