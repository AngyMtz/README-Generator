const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'gitName',
      validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
      type: 'input',
      message: 'What is your e-mail address?',
      name: 'email',
      validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
      type: 'input',
      message: 'What is your Project name?',
      name: 'projName',
      validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
      type: 'input',
      message: 'Short description of your project?',
      name: 'Descrip',
      validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
      type: 'input',
      message: 'What problem does it solve?',
      name: 'probSolv',
      validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'install',
      validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
      type: 'list',
      name: 'license',
      message: 'What type of license did you use for your project?',
      choices: ['MIT', 'Apache 2.0', 'GNU', 'BSD3', 'None'],
      validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
      type: 'input',
      message: 'Who collaborated on this project?',
      name: 'collabor',
      validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repo?',
      name: 'userInst',
      validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
      type: 'input',
      message: 'What command do you need to run the test?',
      name: 'test',
      validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
      type: 'input',
      message: 'What do you want programers to contribute?',
      name: 'contribuiting',
      validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
  ])
  .then((response) => {
    console.log(response)
    fs.writeFile('README.md', generateMarkdown(response), (err) => err ? console.log(err) : console.log('success'));
  })