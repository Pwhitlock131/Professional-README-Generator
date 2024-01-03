// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');
const { error } = require('console');
// TODO: Create an array of questions for user input
// Add validation to questions?
const questions = [{
    type: 'input',
    message: 'What is your repository called?',
    name: 'title',
},
{
    type: 'input',
    message: 'Please give a detailed description of your repository.',
    name: 'description',
},
{
    type: 'input',
    message: 'Please add installation instructions if you have any.',
    name: 'installation',
},
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //impiment this function to write the generated readme content to a file
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);

            const fileName = 'README.md';

            writeToFile(fileName, readmeContent);

            console.log(`${fileName} created successfully!`);
        })
        .catch((error) => {
            console.error('Sorry, looks like an error occured during prompts.', error);
        });
}

// Function call to initialize app
init();
