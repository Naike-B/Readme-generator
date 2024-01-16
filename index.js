const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for the user to write the file
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Add a description of your project here:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use here:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a license for your project.',
        choices: ['MIT', 'Apache 2.0', 'GPL v3.0', 'BSD 3', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Add guidelines on how to contribute to your project here:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Write tests for your application and provide examples on how to run them.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Add your gitHub username here:',
        name: 'gitHubUsername',
    },
    {
        type: 'input',
        message: 'Add the URL of your gitHub profile here:',
        name: 'profileURL',
    },
    {
        type: 'input',
        message: 'Enter your email address here:',
        name: 'email',
    }
];

// function to write README file
// uses Node.js file system library - writeFile() method to create and write the file
// uses ternary operator to handle errors
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log(`Done! Your file ${fileName} was written successfully.`);
    });
}


// function to initialize program by prompting the user for input, generating the README file, and creating a new file on the user's computer, filling it with the generated README content
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeFile = generateMarkdown(answers);
        writeToFile(`${answers.title}.md`, readmeFile);
    });
}

// function call to initialize program
init();
