const inquirer = require('inquirer');
const myTeam = [];
const questions = [
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

];