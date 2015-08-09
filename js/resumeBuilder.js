var bio = {
	"Name" : "Kris Klingberg",
	"Role" : "Web Developer",
	"Contacts" : {
		"mobile" : "678-427-1056",
	}
};

var formattedName = HTMLheaderName.replace("%data%", bio.Name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.Role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var formattedmobile = HTMLmobile.replace("%data%", bio.Contacts.mobile);
$("#topContacts").append(formattedmobile);

$("#footerContacts").append(formattedmobile);