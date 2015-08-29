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

var formattedName = HTMLheaderName.replace("%data%", bio.Name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.Role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var formattedmobile = HTMLmobile.replace("%data%", bio.Contacts.mobile);
var formattedemail = HTMLemail.replace("%data%", bio.Contacts.email);
var formattedgithub = HTMLgithub.replace("%data%", bio.Contacts.github);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.Contacts.twitter);
var formattedlocation = HTMLlocation.replace("%data%", bio.Contacts.location);
$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedlocation);


var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedskills = HTMLskills.replace("%data%", bio.skills);
$("#topContacts").append(formattedbioPic);
$("#topContacts").append(formattedwelcomeMsg);
$("#topContacts").append(formattedskills);

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
			"dates": "1985",
			"url": "www.elgin.edu"
		}
	]
	,
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"date": "2015",
			"url": "www.udacity.com"
		},
		{
			"title": "HTML & CSS",
			"school": "Udacity",
			"date": "2015",
			"url": "www.udacity.com"
		}
	]
}

$("#footerContacts").append(formattedmobile);
$("#footerContacts").append(formattedemail);
$("#footerContacts").append(formattedgithub);
$("#footerContacts").append(formattedtwitter);
$("#footerContacts").append(formattedlocation);















