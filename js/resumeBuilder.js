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
	"display" : "function taking no parameters"
}


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

var name = "Kris Klingberg"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

var mobile = "678-427-1056"
var formattedmobile = HTMLmobile.replace("%data%", mobile);

var email = "kris.klingberg@gmail.com"
var formattedemail = HTMLemail.replace("%data%", email);

var github = "kk0985"
var formattedgithub = HTMLgithub.replace("%data%", github);

var twitter = "@kkling01"
var formattedtwitter = HTMLtwitter.replace("%data%", twitter);

var locale = "Atlanta"
var formattedlocation = HTMLlocation.replace("%data%", locale);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedlocation);

if(bio.skills.length > 0) {

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

$("#footerContacts").append(formattedmobile);
$("#footerContacts").append(formattedemail);
$("#footerContacts").append(formattedgithub);
$("#footerContacts").append(formattedtwitter);
$("#footerContacts").append(formattedlocation);















