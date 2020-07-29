const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const uuid = require('uuid');
const fs = require("fs");
const Employee = require("./lib/Employee");
const RenderHTML = require('./lib/htmlRenderer');

let id =1;
console.log(id);

const employeedb = [];

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
       // console.log(answers);

        // fs.appendFileSync('answers.txt', JSON.stringify(answers));


        // answers.name = new Employee.name;


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

function generateHTML() {
    console.log(employeedb);
    const team = RenderHTML(employeedb);
    console.log(team);
    fs.writeFile("./output/team.html", team, function (err) {
        if (err) throw err;
        console.log("Team webpage has been generated");
    })
} 

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
            const intern = new Intern(answers.name, id++, answers.email, answers.school);
           
            employeedb.push(intern);
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
mainQuery();