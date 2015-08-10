var thisPlayer;
var NameSpot, ScoreSpot, CurrentScoreSpot;

function InformationInit(){
	thisPlayer 			= new PlayerInformation(0,"Chanisco",101);
	NameSpot 			= g("PersonalName");
	ScoreSpot 			= g("PersonalScore");
	CurrentScoreSpot 	= g("PersonalCurrentScore");
	SetInformation();

}

function SetInformation(){
	NameSpot.innerHTML 			= thisPlayer.Name.toString();
	ScoreSpot.innerHTML 		= thisPlayer.Score.toString();
	CurrentScoreSpot.innerHTML 	= 0;

}

function UpdateScore(){
	ScoreSpot.innerHTML 		= thisPlayer.Score.toString();

}
function AddPoints(GainedAmount){
	thisPlayer.Score += (parseInt(GainedAmount));

}

function RemovePoints(LostAmount){
	thisPlayer.Score -= (parseInt(LostAmount));

}
