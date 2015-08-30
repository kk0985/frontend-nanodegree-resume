var bio = {
	"Name" : "Kris Klingberg",
	"Role" : "Web Developer",
	"contacts" : {
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
	"bioPic" : "images/me.jpg"
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.Name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.Role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#topContacts").append(formattedmobile);
	$("#topContacts").append(formattedemail);
	$("#topContacts").append(formattedgithub);
	$("#topContacts").append(formattedtwitter);
	$("#topContacts").append(formattedlocation);
	$("#header").append(formattedbioPic);
	$("#header").append(formattedwelcomeMsg);


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

}

bio.display();

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

function locationizer(work_obj) {
    var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

work.display = function() {
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

work.display();

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
			"url": "www.udacity.com/course/ud804"
		},
		{
			"title": "HTML & CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "www.udacity.com/course/ud304"
		}
	]
}

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

	var formattedschoolTotalName = formattedName + formattedDegree;
	$(".education-entry:last").append(formattedName + formattedDegree);

	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedDates);

	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	$(".education-entry:last").append(formattedLocation);

	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
	$(".education-entry:last").append(formattedMajor);

	var formattedURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
	$(".education-entry:last").append(formattedURL);

	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

	var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
	var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);

	var classTotalTitle = formattedonlineTitle + formattedonlineSchool;
	$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);

	var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
	$(".education-entry:last").append(formattedonlineDates);

	var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
	$(".education-entry:last").append(formattedonlineURL);
	}
	}
}

education.display();

var projects = {
	"projects" : [
		{
			"title": "My Portfolio Web Page",
			"dates": 2015,
			"description": "From design mockup to design in HTML & CSS",
			"images": "images/Mug.jpg"
		},
		{
			"title": "My Online Resume",
			"dates": 2015,
			"description": "My 2nd project for the FEWD Nanodegree",
			"images": "images/Resume.jpg"
		}
	]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedImage);
	}
}

projects.display();
