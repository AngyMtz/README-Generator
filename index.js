const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'gitName',
    },
    {
      type: 'input',
      message: 'What is your e-mail address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your Project name?',
      name: 'projName',
    },
    {
      type: 'input',
      message: 'Short description of your project?',
      name: 'Descrip',
    },
    {
      type: 'input',
      message: 'What problem does it solve?',
      name: 'probSolv',
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'install',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What type of license did you use for your project?',
      choices: ['MIT', 'Apache 2.0', 'GNU', 'BSD3', 'None'],
    },
    {
      type: 'input',
      message: 'Who collaborated on this project?',
      name: 'collabor',
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repo??',
      name: 'userInst',
    },
  ])
  .then((response) =>
    response.confirm === response.input
      ? console.log('Success!')
      : console.log('You forgot an answer?!')
  );
