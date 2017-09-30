
//Bio

var bio = {
    "name" : "Gregory Albertt",
    "role" : "Web and Mobile Developer",
    "contacts" : {
        "mobile" : "(82)99925-3626",
        "email" : "gregoryalbertt@suavibe.com",
        "github" : "gregoryalbertt",
        "location" : "maceio"
    },
    "welcome message" : " ",
    "skills" : ["skil1", "skill2"],
    "bioPic" : "https://uploaddeimagens.com.br/imagens/eucafe-jpg"

}

// formatted Role
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);

// Formatted Name
var formattedName = HTMLheaderName.replace("%data%" , bio.name);
$("#header").prepend(formattedName);

// Contact Informations
var formattedContact = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEMail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

//var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);


$("#topContacts").append(formattedContact);
$("#topContacts").append(formattedEMail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
//$("#header").append(formattedPic);



//Education
var education = {
    "schools": [
        {
            "name": "Universidade Federal de Alagoas",
            "city": "Maceio",
            "degree": "Undergraduate",
            "major": "Computer Engineering"
        }
    ]
}

for (school in education.schools){

    $("#education").append(HTMLschoolStart);

    var SchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var SchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var SchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
    var SchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

    $(".education-entry").append(SchoolName);
    $(".education-entry").append(SchoolDegree);
    $(".education-entry").append(SchoolLocation);
    $(".education-entry").append(SchoolMajor);


}

// Work
var work = {
    "jobs" : [
        {
        "position" : "Tech Manager",
        "employer" : "Vibe P&E",
        "years" : "0.3",
        "location" : "Maceio",
        "description" : "Handle Technoly solutions to the company, and looking forward for innovations"
        },
        {
            "position" : "Estagiario",
            "employer" : "Secretaria de Segurança Pública do Estado de Alagoas (SSP)",
            "years" : "0.2",
            "location" : "Maceio",
            "description" : "Give support to the hardware"
        }
    ]
 }

 for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart); 

    var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

    var formattedEmployerTitle = formattedEmployer + formattedJobTitle;

    var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(workLocation);
    $(".work-entry:last").append(workDescription);
    
 }

 // Projects
var projects = {
    "title" : " ",
    "description" : " "
}

// Skills
if (bio.skills.length > 0){

    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills){

        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }
}




