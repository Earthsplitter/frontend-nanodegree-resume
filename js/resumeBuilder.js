var work = {
    "jobs": [
        {
            "employer": "Microsoft",
            "title": "Machine Learning Engineer",
            "location": "Beijing",
            "dates": "01/1/2020 - 01/1/2022",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" +
            " labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
            "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo" +
            "re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese" +
            "runt mollit anim id est laborum."
        }
    ],
    "display": function () {
        this.jobs.forEach(function (job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedEmployerTitle,formattedDates,formattedLocation,formattedDescription);
        });
    }
};

var projects = {
    "projects": [
        {
            "title": "PL/0 Compiler",
            "dates": "01/11/2016",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" +
            " labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
            "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo" +
            "re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese" +
            "runt mollit anim id est laborum.",
            "images": ["images/compiling.png"]
        }
    ],
    "display": function () {
        this.projects.forEach(function (project) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
            project.images.forEach(function (img) {
                var formattedImage = HTMLprojectImage.replace("%data%",img);
                $(".project-entry:last").append(formattedImage);
            });
        });
    }
};

var bio = {
    "name": "Ming Wen",
    "role": "Web Front-End Developer",
    "welcomeMessage": "Welcome!",
    "biopic": "images/fry.jpg",
    "contacts": {
        "mobil": "+86-15178703506",
        "email": "wmcs@mail.ustc.edu.cn",
        "github": "https://github.com/Earthsplitter",
        "location": "Hefei, Anhui"
    },
    "skills": ["HTML","CSS","JavaScript"],
    "display": function () {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedMobile = HTMLmobile.replace("%data%",this.contacts.mobil);
        var formattedEmail = HTMLemail.replace("%data%",this.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%",this.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%",this.contacts.location);
        var formattedBiopic = HTMLbioPic.replace("%data%",this.biopic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%",this.welcomeMessage);
        $("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
        $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
        $("#header").prepend(formattedRole,formattedName,formattedBiopic,formattedWelcome,HTMLskillsStart);
        this.skills.forEach(function (skill) {
            $("#skills").append(HTMLskills.replace("%data%",skill));
        })
    }
};

var education = {
    "schools": [
        {
            "name": "University of Science and Technology of China",
            "location": "Anhui, Hefei, China",
            "degree": "BA",
            "dates": "01/9/2014 - 01/6.2018",
            "url": "",
            "majors": ["Computer Science","abc"]
        }
    ],
    "onlineCourses": [
        {
            "title": "Frontend Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/"
        }
    ],
    "display": function () {
        this.schools.forEach(function (school) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%",school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
            var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
            var formattedSchoolDates = HTMLschoolDates.replace("%data%",school.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",school.location);
            var allMajor = "";
            school.majors.forEach(function (major) {
                allMajor += major+", ";
            });
            allMajor = allMajor.slice(0,allMajor.length-2);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",allMajor);
            $(".education-entry:last").append(formattedSchoolNameDegree,formattedSchoolDates,formattedSchoolLocation,formattedSchoolMajor);
        });
        this.onlineCourses.forEach(function (course) {
            $("#education").append(HTMLonlineClasses).append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",course.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",course.school);
            var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            var formattedOnlineDates = HTMLonlineDates.replace("%data%",course.dates);
            var formattedURL = HTMLonlineURL.replace("%data%",course.url);
            $(".education-entry:last").append(formattedTitleSchool,formattedOnlineDates,formattedURL);
        })

    }
};

work.display();
projects.display();
bio.display();
education.display();

$("#mapDiv").append(googleMap);
