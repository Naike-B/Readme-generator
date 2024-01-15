// function to generate markdown for README
// uses a switch statement to assign a different value to the licenseBadge variable depending on the license selected by the user
function generateMarkdown(data) {
  let licenseBadge = '';
  switch (data.license) {
    case 'MIT':
      licenseBadge = '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      licenseBadge = '![Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL v3.0':
      licenseBadge = '![GPL v3.0 License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 3':
      licenseBadge = '![BSD 3 License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    default:
      licenseBadge = '';
  }

  // constructs the file content using the user's input data
  return `
# ${data.title}

## Description
${licenseBadge}

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is covered under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Created by [${data.gitHubUsername}](${data.profileURL})\n\nEmail: ${data.email}\n\n For any questions, please reach out via email.
`;
}

// exports the function generateMarkdown so that it can be used in other modules
module.exports = generateMarkdown;
