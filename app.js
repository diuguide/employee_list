// pull in the required dependancies

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const RenderHTML = require('./lib/htmlRenderer');

// set base id to 1
let id = 1;

// create empty employee database
const employeedb = [];

// prompt to determine role
function mainQuery() {

    inquirer
        .prompt([


            {
                type: "list",
                name: "role",
                message: "What is your position?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "Exit"
                ],

            }

        ])
        .then(answers => {
        // switch statement for each role  
            switch (answers.role) {
                case 'Manager':
                    managerQuery();
                    break;
                case 'Engineer':
                    engineerQuery();
                    break;
                case 'Intern':
                    internQuery();
                    break;
                default:
                    generateHTML();
                    break;
            }
        });
}

// function to export the gathered information
function generateHTML() {
    const team = RenderHTML(employeedb);
    fs.writeFile("./output/team.html", team, function (err) {
        if (err) throw err;
        console.log("Team webpage has been generated");
    })
}

// intern query
function internQuery() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter your name:"
            },
            {
                type: "input",
                name: "email",
                message: "Please enter your email:"
            },
            {
                type: "input",
                name: "school",
                message: "Please enter your current school:",
            }
        ])
        .then(answers => {

        // create new intern class using constructors
            const intern = new Intern(answers.name, id++, answers.email, answers.school);
        // push new intern class to employee database    
            employeedb.push(intern);
        // return to main menu
            mainQuery();

        });
}
function managerQuery() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter your name:"
            },
            {
                type: "input",
                name: "email",
                message: "Please enter your email:"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Please enter your office number:"
            }


        ])
        .then(answers => {
            const manager = new Manager(answers.name, id++, answers.email, answers.officeNumber);

            employeedb.push(manager);
            mainQuery();
        });
}
function engineerQuery() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter your name:"
            },
            {
                type: "input",
                name: "email",
                message: "Please enter your email:"
            },
            {
                type: "input",
                name: "github",
                message: "Please enter your github user name:",
            }
        ])
        .then(answers => {
            const engineer = new Engineer(answers.name, id++, answers.email, answers.github);

            employeedb.push(engineer);
            mainQuery();

        });
}

// begin program
mainQuery();