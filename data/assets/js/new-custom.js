var flag =true;
function check() {

	
	//var question1 = document.quiz.question1.value;
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var correct = 0;
	console.log(question1, question2)

	// 	if (question1 == "Providence") {
	// 		correct++;
	// }
	if (question1 == "bigimg1") {
		correct++;
	}
	if (question2 == "smallimg2") {
		correct++;
	}

	var resultplay = ["data/assets/audio/good-job.mp3", "data/assets/audio/oops-try-again.mp3"];
	var pictures = ["data/assets/images/goodjob.jpg", "data/assets/images/tryagain.jpg"];
	var score;

	if (correct == 0) {
		score = 1;
	}

	if (correct > 0 && correct < 2) {
		score = 1;
	}

	if (correct == 2) {
		score = 0;
	}

	$(".On-submit").css("display", "inline-block");

	$(".zooms").removeClass("zoom-effect")
	flag=false;

	document.getElementById("after_submit").style.display = "flex";
	document.getElementById("picture").src = pictures[score];
	document.getElementById("resultplay").src = resultplay[score];



	setTimeout(function () {
		document.getElementById("after_submit").style.display = "none";
	}, 1600);
	return false;


	// var inputs=document.querySelectorAll("input[type=radio]:checked"),
	//     x=inputs.length;
	// document.querySelector("button[type=reset]").addEventListener("click",function(event){
	//     while(x--)inputs[x].checked=0;
	//     event.preventDefault();
	// },0);


}
var total = 0;
var tt = 0
var tt1 = 0
$(".first-roww").on("click", function () {
	if(flag==true){
	$(this).prev().removeClass("selected")
	$(this).next().removeClass("selected")
	$(this).addClass("selected")
	tt = 1
	total = tt + tt1
	if (total >= 2) {
		$(".disablehreflink").css("display", "inline-block")
	}
}
})
$(".second-roww").on("click", function () {
	if(flag==true){
	$(this).prev().removeClass("selected")
	$(this).next().removeClass("selected")
	$(this).addClass("selected")
	tt1 = 1
	total = tt + tt1
	if (total >= 2) {
		$(".disablehreflink").css("display", "inline-block")
	}
}
})
function myFunction() {
	$(".disablehreflink").css("display", "none");
	$(".first-roww").removeClass("selected")
	$(".second-roww").removeClass("selected");
	$(".On-submit").css("display", "none")
	$(".zooms").addClass("zoom-effect")
	flag=true;
	total = 0
	tt = 0
	tt1 = 0
}



