var name = "Kris Klingberg";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"Name" : "Kris Klingberg",
	"Role" : "Web Developer",
	"Contacts" : {
		"mobile" : "678-427-1056",
		"email" : "kris.klingberg@gmail.com",
		"github" : "kk0985",
		"twitter" : "@kkling01",
		"location" : "Atlanta"
	},
	"welcomeMessage" : "Hello World!  I have a new identity!",
	"skills" : [
		"teaching","coaching","consultative selling","JS","HTML & CSS"
	],
	"bioPic" : "images/me.jpg",
}

var mobile = "678-427-1056";
var formattedmobile = HTMLmobile.replace("%data%", mobile);
var email = "kris.klingberg@gmail.com";
var formattedemail = HTMLemail.replace("%data%", email);
var github = "kk0985";
var formattedgithub = HTMLgithub.replace("%data%", github);
var twitter = "@kkling01";
var formattedtwitter = HTMLtwitter.replace("%data%", twitter);
var locale = "Atlanta";
var formattedlocation = HTMLlocation.replace("%data%", locale);


$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedlocation);


var work = {
"jobs" : [
		{
			"employer" : "AT&T",
			"title" : "Sales Executive",
			"location" : "Atlanta, GA, USA",
			"dates" : "March 2010-Present",
			"description" : "Marketing acquisition partner responsible for growth in participation of the employee sponsorship program within a business."
		},
		{
			"employer" : "Verizon Wireless",
			"title" : "Sales Executive",
			"location" : "Macon, GA, USA",
			"dates" : "March 2004-June 2009",
			"description" : "Acquistion specialist responsible for adding new logos and for growth within existing businesses."
		}
	]
}

var education = {
	"schools" : [
		{
			"name": "Elgin Community College",
			"location": "Elgin, IL, USA",
			"degree": "Associates",
			"majors": ["Business Communications"],
			"dates": 1985,
			"url": "www.elgin.edu"
		}
	]
	,
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "www.udacity.com"
		},
		{
			"title": "HTML & CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "www.udacity.com"
		}
	]
}

var projects

$("#footerContacts").append(formattedmobile);
$("#footerContacts").append(formattedemail);
$("#footerContacts").append(formattedgithub);
$("#footerContacts").append(formattedtwitter);
$("#footerContacts").append(formattedlocation);

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills [0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills [1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills [2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills [3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills [4]);
	$("#skills").append(formattedSkill);
}

function displayWork () {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

$("#map-Div").append(googleMap);























