// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'GNU':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    case 'BSD3':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    case 'None':
      return ' '
    default:
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      return 'https://choosealicense.com/licenses/mit/'
    case 'Apache 2.0':
      return 'https://choosealicense.com/licenses/'
    case 'GNU':
      return 'https://choosealicense.com/licenses/gpl-3.0/'
    case 'BSD3':
      return 'https://choosealicense.com/licenses/bsd-3-clause/'
    case 'None':
      return ' '
    default:
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case 'MIT':
      return 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. '
    case 'Apache 2.0':
      return 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code. '
    case 'GNU':
      return 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.'
    case 'BSD3':
      return 'This license has also been called the "New BSD License" or "Modified BSD License". Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.'
    case 'None':
      return ' '
    default:
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Project
  ${data.projName}\n
  ${renderLicenseBadge(data.license)}\n\n

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)\n

  ## Description
  ${data.Descrip}\n\n

  ## Problems Solve
  ${data.probSolv}\n\n

  ## Installation
  ${data.install}\n\n

  ## License
  ${renderLicenseBadge(data.license)}\n
  ${renderLicenseLink(data.license)}\n
  ${renderLicenseSection(data.license)}\n\n
  

  ## Questions
  * GitHub: [${data.gitName}](https://github.com/${data.gitName})
  * Email: [${data.email}](mailto:${data.email})
  
`;
}

module.exports = generateMarkdown;
