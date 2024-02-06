// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { error } = require('console');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your repository called?',
        name: 'title',
        validate: function (input) {
            return input !== '' ? true : 'Repo name cannot be empty';
        },
    },
    {
        type: 'input',
        message: 'Please give a detailed description of your repository.',
        name: 'description',
        validate: function (input) {
            return input !== '' ? true : 'Description cannot be empty';
        },
    },
    {
        type: 'input',
        message: 'Please add installation instructions if you have any.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please add a usage guide.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please choose a liscense.',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
        validate: function (input) {
            return input !== '' ? true : 'Please add your username.';
        },
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: function (input) {
            const emailRegex = /\S+@\S+\.\S+/;
            return emailRegex.test(input) ? true : 'Please enter a valid email address.';
        },
        
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md succssfully created!');
        }
    });
}

// Create a function to initialize app
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
            console.error('Sorry, looks like an error occurred during prompts.', error);
        });
}

// Function call to initialize app
init();
