const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your Project name?',
      name: 'projName',
    },
    {
      type: 'input',
      message: 'Description of your project?',
      name: 'Descrip',
    },
    {
      type: 'input',
      message: 'What problem does it solve?',
      name: 'probSolv',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Insert Screenshots',
      name: 'screenShot',
    },
    {
      type: 'input',
      message: 'Who collaborated on this project?',
      name: 'collabor',
    },
    {
      type: 'input',
      message: 'License?',
      name: 'collabor',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
