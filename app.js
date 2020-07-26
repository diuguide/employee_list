var inquirer = require('inquirer');

const questionsIntern = {
    type: "input",
    name: "school",
    message: "Please enter your current school:",
};
const questionsEngineer = {
    type: "input",
    name: "github",
    message: "Please enter your github username:",
};

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
            ],

        },
        {
            type: "input",
            name: "name",
            message: "Please enter your name:",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your id number:",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address:",
        },


    ])
    .then(answers => {

    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });

