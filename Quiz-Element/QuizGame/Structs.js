function QA(idNmbr, AmountOfAnswers, Question, GoodAnswer, AnswerA, AnswerB, AnswerC, AnswerD){
	this.idNmbr 			= idNmbr;
	this.AmountOfAnswers 	= AmountOfAnswers;
	this.Question 			= Question;
	this.AnswerA 			= AnswerA;
	this.AnswerB 			= AnswerB;
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

function PlayerInformation(idNmbr,Name,Score){
	this.idNmbr 		= 	idNmbr;
	this.Name 			=	Name;
	this.Score 			= 	Score;


}