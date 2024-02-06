const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: 'input',
    message: 'What will it be your repository title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What will it be your project title?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Provide a description of your application:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'install',
  },
  {
    type: 'input',
    message: 'Provide instructions and examples for use.',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Choose your license for your project.',
    name: 'license',
    choices: [
        { value: 'Apache' },   
        { value: 'Microsoft Public License' },  
        { value: 'Mozilla Public Licence' },  
        { value: 'MIT' },  
        { value: 'BSD' },
        { value: 'ISC' },  
        { value: 'None' }, 
    ]
  },

  {
    type: 'input',
    message: 'List your collaborates',
    name: 'credits',
},
  {
    type: 'input',
    message: 'How would you test this project?',
    name: 'test',
  },       
  
  {
      type: 'input',
      message: 'Enter your GitHub username:',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Enter your email:',
      name: 'email',
  },
  {
    type: 'input',
    message: 'Where is this application deployed at?',
    name: 'deploy',
  } ,

];

//prompt
inquirer
  .prompt(questions)

// Generate a readme file based on user's input with user's github as name
.then((data) => {
  
    fs.writeFile(`${data.title}.md`, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("Your Professional Readme was generated"))
})

