const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const uuid = require('uuid');
const fs = require("fs");


inquirer
    .prompt([

        {
            type: "input",
            name: "name",
            message: "Please enter your name:",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address:",
        },
        {
            type: "list",
            name: "role",
            message: "What is your position?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
            ],

        },

    ])
    .then(answers => {
        console.log(answers);
        console.log(uuid.v1());
    });



// if (role === 'Manager') {

// } else if (role === 'Intern') {
//     inquirer
//         .prompt({
//             type: "input",
//             name: "school",
//             message: "Please enter your current school:",
//         });
// } else if (role === 'Engineer') {
//     inquirer
//         .prompt({
//             type: "input",
//             name: "github",
//             message: "Please enter your github username:",
//         });
// }