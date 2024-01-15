const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your README file?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please add a description of your project here:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please add your Table of contents here:',
        name: 'tableOfContents',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a license for your project',
        choices: ['MIT', 'Apache 2.0', 'GPL v3.0', 'BSD 3', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please add the contributors to the project here:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Write tests for your application and provide examples on how to run them',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Add here your GitHub username and a link to your profile, as well as your email address and instructions on how to contact you for any questions',
        name: 'questions',
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
