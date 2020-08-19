var flag = true;
function check() {


	//var question1 = document.quiz.question1.value;
	// var question1 = document.quiz.question1.value;
	// var question2 = document.quiz.question2.value;
	// var correct = 0;
	// console.log(question1, question2)

	// // 	if (question1 == "Providence") {
	// // 		correct++;
	// // }
	// if (question1 == "bigimg1") {
	// 	correct++;
	// }
	// if (question2 == "smallimg2") {
	// 	correct++;
	// }
	console.log(tickcheck1, tickcheck2, "in")
	$(".before-submit-check").css("display", "none")
	document.getElementById("after_submit").style.display = "flex";
	if (tickcheck1 + tickcheck2 == 2) {
		$(".goodjob").css("display", "inline-block")
		console.log("inn")
		// document.getElementById("after_submit").src= "data/assets/audio/good-job.mp3"
		$("#myAudio").attr('src', "data/assets/audio/good-job.mp3");
		$("#myAudio")[0].play();
		$(".correct-answer").addClass("after-submit-answer");
	}
	else {
		$(".tryagain").css("display", "inline-block")
		// document.getElementById("after_submit").src= "data/assets/audio/good-job.mp3"
		$("#myAudio").attr('src', "data/assets/audio/oops-try-again.mp3");
		$("#myAudio")[0].play();
		$(".correct-answer").addClass("after-submit-answer");
	}
	// var resultplay = ["data/assets/audio/good-job.mp3", "data/assets/audio/oops-try-again.mp3"];
	// var pictures = ["data/assets/images/goodjob.jpg", "data/assets/images/tryagain.jpg"];
	// var score;

	// if (correct == 0) {
	// 	score = 1;
	// }

	// if (correct > 0 && correct < 2) {
	// 	score = 1;
	// }

	// if (correct == 2) {
	// 	score = 0;
	// }

	$(".On-submit").css("display", "inline-block");

	$(".zooms").removeClass("zoom-effect")
	flag = false;


	// document.getElementById("picture").src = pictures[score];
	// document.getElementById("resultplay").src = resultplay[score];



	// setTimeout(function () {
	// 	document.getElementById("after_submit").style.display = "none";
	// }, 1600);
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
var tickcheck = 0
var tickcheck1 = 0
var tickcheck2 = 0
$("#quiz-SelectOne .first-roww").on("click", function () {
	if (flag == true) {
		$(this).prevAll().removeClass("selected")
		$(this).nextAll().removeClass("selected")
		$(this).addClass("selected")
		tt = 1
		total = tt + tt1
		if (total >= 2) {
			$(".disablehreflink").css("display", "inline-block")
		}
	}
	if ($(this).hasClass("correct-answer")) {
		tickcheck1 = 1
	}
	else {
		tickcheck1 = 0
		tickcheck = 0
	}
})
$("#quiz-SelectOne .second-roww").on("click", function () {
	if (flag == true) {
		$(this).prevAll().removeClass("selected")
		$(this).nextAll().removeClass("selected")
		$(this).addClass("selected")
		tt1 = 1
		total = tt + tt1
		if (total >= 2) {
			$(".disablehreflink").css("display", "inline-block")
		}
	}
	if ($(this).hasClass("correct-answer")) {
		tickcheck2 = 1
	}
	else {
		tickcheck2 = 0
		tickcheck = 0
	}
})
function myFunction() {
	$(".disablehreflink").css("display", "none");
	$(".first-roww").removeClass("selected")
	$(".second-roww").removeClass("selected");
	$(".On-submit").css("display", "none")
	$(".zooms").addClass("zoom-effect");
	$("#after_submit").css("display", "none")
	$(".correct-answer").removeClass("after-submit-answer");
	$(".goodjob").css("display", "none")
	$(".tryagain").css("display", "none")
	$("#myAudio source").removeAttr('src')
	$(".before-submit-check").css("display", "inline-block")
	flag = true;
	total = 0
	tt = 0
	tt1 = 0
	tickcheck1 = 0
	tickcheck2 = 0
}
$("#quiz-SelectOne .popupclose").on("click", function () {
	myFunction()
})
var color_id = "red";
var counter = 0
var counter1 = 0
var flag1 = false;
var color_selected = false;
$("#quiz-SelectMulti .color-wrap .color-text").on("click", function () {
	$(this).prevAll().removeClass("selected")
	$(this).nextAll().removeClass("selected")
	$(this).addClass("selected")
	color_id = $(this).attr("attr-id")
	color_selected = true;

	$(".hot-cold-sec").addClass("active-form")

})
$("#quiz-SelectMulti .first-row-color").on("click", function (e) {
	if (color_selected == true) {
		// console.log($(this).attr("color-id-match"))
		if ($(this).attr("color-id-match") == undefined) {
			counter++;
		}
		$(this).addClass("selected")
		$(this).attr("color-id-match", color_id)
		// console.log(counter)


		if (counter == 4) {
			$(".disablehreflink").css("display", "inline-block")

		}
	}
})
function check1() {
	$("#after_submit").css("display", "flex");
	$(".correct-answer").addClass("after-submit-answer");
	$(".first-row-color").removeClass("correct-answer")
	$(".first-row-color").removeClass("wrong-answer")
	$(".On-submit").removeClass("tick")
	$(".On-submit").removeClass("cross")
	for (i = 0; i < $(".first-row-color").length; i++) {
		console.log($(".first-row-color").eq(i).attr("color-id"), $(".first-row-color").eq(i).attr("color-id-match"))
		if ($(".first-row-color").eq(i).attr("color-id") == $(".first-row-color").eq(i).attr("color-id-match")) {
			console.log("8")
			$(".first-row-color").eq(i).addClass("correct-answer")
			$(".first-row-color").eq(i).children(".On-submit").addClass("tick")
			counter1++;
		}
		else {
			$(".first-row-color").eq(i).addClass("wrong-answer")
			$(".first-row-color").eq(i).children(".On-submit").addClass("cross")
		}
	}
	$(".On-submit").css("display", "inline-block")
	if (counter1 == 4) {
		$(".goodjob").css("display", "inline-block")
		$("#myAudio").attr('src', "data/assets/audio/good-job.mp3");
		$("#myAudio")[0].play();
	}
	else {
		$(".tryagain").css("display", "inline-block")
		$("#myAudio").attr('src', "data/assets/audio/oops-try-again.mp3");
		$("#myAudio")[0].play();
	}

}

function myFunction1() {
	// alert()
	$(".disablehreflink").css("display", "none");
	$(".first-row-color").removeClass("selected")
	$(".first-row-color").removeAttr("color-id-match")
	$("#after_submit").css("display", "none");
	$(".correct-answer").removeClass("after-submit-answer");
	$(".goodjob").css("display", "none")
	$(".tryagain").css("display", "none")
	$("#myAudio source").removeAttr('src')
	$("#quiz-SelectMulti .color-wrap .color-text").removeClass("selected")
	$(".On-submit").css("display", "none")
	counter = 0
	counter1 = 0
	flag1 = false;
	color_selected = false;
}
$("#quiz-SelectMulti .popupclose").on("click", function () {
	myFunction1()
})
var roww1 = 0;
var roww2 = 0
var countt = 0
var countt1 = 0
$("#quiz-SelectTwo .first-roww").on("click", function () {
	console.log($(this).hasClass("selected"))
	if ($(this).hasClass("selected")) {
		$(this).removeClass("selected")
		roww1 = roww1 - 1
	}
	else {
		$(this).addClass("selected")
		roww1 = roww1 + 1
	}
	if (roww1 >= 2 && roww2 >= 2) {
		$(".disablehreflink").css("display", "inline-block")
	}
})
$("#quiz-SelectTwo .second-roww").on("click", function () {
	console.log($(this).hasClass("selected"))
	if ($(this).hasClass("selected")) {
		$(this).removeClass("selected")
		roww2 = roww1 - 1
	}
	else {
		$(this).addClass("selected")
		roww2 = roww2 + 1
	}
	if (roww1 >= 2 && roww2 >= 2) {
		$(".disablehreflink").css("display", "inline-block")
	}
})
function check2() {
	$("#after_submit").css("display", "flex");
	for (i = 0; i < $(".first-roww").length; i++) {
		if ($(".first-roww").eq(i).hasClass("selected")) {
			if ($(".first-roww").eq(i).find(".On-submit").hasClass("tick")) {
				countt++;
			}
			if ($(".first-roww").eq(i).find(".On-submit").hasClass("cross")) {
				countt=countt-1;
			}
		}
	}
	for (i = 0; i < $(".second-roww").length; i++) {
		if ($(".second-roww").eq(i).hasClass("selected")) {
			if ($(".second-roww").eq(i).find(".On-submit").hasClass("tick")) {
				countt1++;
			}
			if ($(".second-roww").eq(i).find(".On-submit").hasClass("cross")) {
				countt1=countt1-1;
			}
		}
	}
	if (countt == 2 && countt1 == 2) {
		$(".goodjob").css("display", "inline-block")
		$("#myAudio").attr('src', "data/assets/audio/good-job.mp3");
		$("#myAudio")[0].play();
	}
	else {
		$(".tryagain").css("display", "inline-block")
		$("#myAudio").attr('src', "data/assets/audio/oops-try-again.mp3");
		$("#myAudio")[0].play();
	}
	$(".On-submit").css("display", "inline-block")
}
function myFunction2() {
	$(".first-roww").removeClass("selected")
	$(".second-roww").removeClass("selected")
	$(".disablehreflink").css("display", "none");
	$("#after_submit").css("display", "none");
	$(".On-submit").css("display", "none")
	$(".goodjob").css("display", "none")
	$(".tryagain").css("display", "none")
	$("#myAudio source").removeAttr('src')
	roww1 = 0;
	roww2 = 0
	countt = 0
	countt1 = 0
}
$("#quiz-SelectTwo .popupclose").on("click", function () {
	myFunction2()
})