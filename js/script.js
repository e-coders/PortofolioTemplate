// Website Configuration
var name = "Aasheesh Agarwal";
var about = "I am a intermediate programmer with knowledge of HTML.";
var skill = "Full-stack. Web dev. HTML, CSS, JavaScript, Python, Java, PHP."
var about = "I am a full-stack programmer with knowledge of HTML, CSS, JavaScript, Python, Java, PHP, and MySQL. I love programming and currently program in python the most of my time. I also have knowledge of the Scratch programming language, a block-based programming language. I have learned it all practically with some help of communities and myself. I do also have a YouTube Channel called E - Coders where I show others to how to program. I uses the Atom, Sublime Text, and the Visual Studio Code IDE(s) for writing the perfect code. I also publish my great projects to GitHub to share it with others.";
skills = [
  84,
  70,
  92
];
// Website Configuration

document.getElementById("name").textContent = name;
title = document.createElement("title");
title.textContent = name;
document.head.appendChild(title);
document.querySelector("h5#skills").textContent = skill;
document.querySelector("#aboutme").textContent = about;
document.querySelector("#skill1").setAttribute("data-bar",skills[0]);
document.querySelector("#skill2").setAttribute("data-bar",skills[1]);
document.querySelector("#skill3").setAttribute("data-bar",skills[2]);

$(".skills").addClass("active")
$(".skills .skill .skill-bar span").each(function() {
   $(this).animate({
      "width": $(this).parent().attr("data-bar") + "%"
   }, 1000);
});
setTimeout(function() {
   $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
}, 2000);
